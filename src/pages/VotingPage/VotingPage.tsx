import { useEffect, useState } from "react";
import ItemVote from "../../components/Item/ItemVote/ItemVote";
import useHttp from "../../hooks/useHttp";
import { ItemType } from "../../types";
import BasePage from "../BasePage";
import { useSearchParams } from "react-router-dom";
import { InputContainer, InputMessage, Link } from "./style";
import Loader from "../../components/Loader/Loader";
import { Modal } from "../../components/Modal/Modal";
import { Message } from "../InitCartPage/style";
import iconSend from "../../assets/icons/sendIcon.svg";

const VotingPage = (props: any) => {
  const [data, setData] = useState<any>({});
  const [voterName, setVoterName] = useState<string>(
    localStorage.getItem("voterName") || ""
  );
  const [showModal, setShowModal] = useState<boolean>(true);
  const [success, setSuccess] = useState<Boolean>(false);
  const [message, setMessage] = useState<string>("You must enter name");
  const [searchParams] = useSearchParams();

  const {
    isLoading: isLoadingItems,
    error: isErrorItemsFromCart,
    sendRequest: getItemsToVoting,
  } = useHttp();

  const {
    isLoading: isLoadingSendResults,
    error: errorSendResults,
    sendRequest: votingRequest,
  } = useHttp();

  const addVotingValueToItem = (item: ItemType, value: string) => {
    const index = data.products.indexOf(item);
    const votes = [];
    const objectVote = { voterName: "", vote: value, comment: "" };
    votes.push(objectVote);

    !data.products[index].votes
      ? (data.products[index].votes = votes)
      : !data.products[index].votes[0]
      ? data.products[index].votes.push(objectVote)
      : (data.products[index].votes[0].vote = value);
  };
  const addCommentToItem = (item: ItemType, comment: string) => {
    const index = data.products.indexOf(item);
    const votes = [];
    const objectVote = { voterName: "", vote: "", comment: comment };
    votes.push(objectVote);

    !data.products[index].votes
      ? (data.products[index].votes = votes)
      : !data.products[index].votes[0]
      ? data.products[index].votes.push(objectVote)
      : (data.products[index].votes[0].comment = comment);
  };

  const voterChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setVoterName(e.currentTarget.value);
  };

  const content = isErrorItemsFromCart ? (
    <Message>Request failed!</Message>
  ) : isLoadingItems ? (
    <Loader loading={true} message={"Loading page..."} />
  ) : !data.products ? (
    <Message>No items found!</Message>
  ) : (
    data.products.map((item: ItemType) => {
      return (
        item.selected && (
          <ItemVote
            key={item["item-id"]}
            image={item["image-url"]}
            title={item.name}
            price={item.price}
            onAddVotingValue={(value: string) =>
              addVotingValueToItem(item, value)
            }
            onAddComment={(comment: string) => addCommentToItem(item, comment)}
          />
        )
      );
    })
  );

  useEffect(() => {
    const transformItems = (data: any) => {
      setData(data);
    };
    getItemsToVoting(
      {
        url: `https://prod-174.westeurope.logic.azure.com/workflows/c125ae4f1c1544649244717e3a9d4b13/triggers/manual/paths/invoke/ids/${searchParams.get(
          "id"
        )}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wZ4C8E5zfQLWkBOG-7mpjjz2Hnbl7bKt1pTeD9wSglc`,
      },
      transformItems
    );
    return () => {
      setData({});
    };
  }, [getItemsToVoting, searchParams]);

  const closeModal = () => {
    setShowModal(false);
  };
  const onSendVoting = async () => {
    if (voterName) {
      setMessage("");
      localStorage.setItem("voterName", voterName);
      data.products.forEach((product: any) => {
        if (product.selected) {
          const votes = [];
          const objectVote = { voterName: "", vote: "", comment: "" };
          votes.push(objectVote);
          !product.votes
            ? (product.votes = votes)
            : !product.votes[0]
            ? product.votes.push(objectVote)
            : (product.votes[0].voterName = voterName);
        }
      });
    } else {
      setShowModal(true);
    }
    const responseDate = (data: any) => {
      errorSendResults ? setMessage("Try again!") : setMessage("");
      if (data) {
        setSuccess(true);
        setShowModal(true);
      }
    };
    voterName &&
      data.products.length &&
      votingRequest(
        {
          url: "https://prod-143.westeurope.logic.azure.com:443/workflows/4135e5fcc18c4bc194c151fe0a523888/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=gouXYj9c2loCr6PvP4Mu9lJk_KYKHP1MVOKvqrR0KsY",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        },
        responseDate
      );
  };
  return (
    <BasePage>
      <BasePage.Header>
        <BasePage.Title />
        <BasePage.Subtitle>Rate my shopping bag</BasePage.Subtitle>
      </BasePage.Header>
      <BasePage.Body>{content}</BasePage.Body>
      <BasePage.Footer>
        <BasePage.Button img={iconSend} onClick={onSendVoting}>
          Send
        </BasePage.Button>
      </BasePage.Footer>
      {!isLoadingItems && (
        <Modal
          message={message}
          showModal={showModal}
          setShowModal={setShowModal}
          closeModal={closeModal}
        >
          {!success ? (
            <InputContainer>
              <InputMessage
                placeholder="Write your name"
                type="text"
                value={voterName}
                onChange={voterChangeHandler}
              ></InputMessage>
            </InputContainer>
          ) : (
            success && (
              <div>
                <p>Thank you for your friendly feedback!</p>
                <p style={{ display: "contents" }}>
                  To download tagidoo click{" "}
                </p>
                <Link href={"https://www.tagidoo.com"}>here</Link>
              </div>
            )
          )}
        </Modal>
      )}
    </BasePage>
  );
};
export default VotingPage;
