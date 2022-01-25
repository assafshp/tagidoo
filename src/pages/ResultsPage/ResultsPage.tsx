import { Children, useEffect, useState } from "react";
import ItemResult from "../../components/Item/ItemResult/ItemResult";
import useHttp from "../../hooks/useHttp";
import { ItemType } from "../../types";
import BasePage from "../BasePage";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { InputContainer, Input, InputTitle } from "./style";
import Loader from "../../components/Loader/Loader";
import { Modal } from "../../components/Modal/Modal";
import { Message } from "../InitCartPage/style";

const ResultsPage = (props: any) => {
  const [data, setData] = useState<any>({});
  const navigate = useNavigate();
  const [voterName, setVoterName] = useState<string>(
    localStorage.getItem("voterName") || ""
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<Boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [searchParams] = useSearchParams();
  const { state }: any = useLocation();
console.log(state);

  useEffect(() => {
    if (state) {
      if (state.from === "/initCartPage") {
        setMessage(`Now it's time to share this page with your friends!`);
        setShowModal(true);
      }
    } else {
      setMessage("Write your name");
      setShowModal(true);
    }
  }, [state]);

  useEffect(() => {
    setData(data);
  }, [data]);

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
          <ItemResult
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
    if (success) {
      navigate(`/votingPage?id=${data.id}`);
    }
    !isLoadingSendResults && setShowModal(false);
  };

  const onSendVoting = async () => {
    setShowModal(true);
    if (!voterName) {
      setMessage("You must enter name");
    } else {
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
    }
    const responseDate = (data: any) => {
      errorSendResults
        ? setMessage("Try again!")
        : data.products && setMessage("Thank for your voting!");
      if (data) setSuccess(true);
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
        {isLoadingSendResults && <Loader loading={true} size={30} />}
        <BasePage.Button onClick={onSendVoting}>Send</BasePage.Button>
      </BasePage.Footer>
      {!isLoadingSendResults && !errorSendResults && !isLoadingItems && (
        <Modal
          message={message}
          showModal={showModal}
          setShowModal={setShowModal}
          closeModal={closeModal}
        >
          {!success && !state && (
            <InputContainer>
              <InputTitle>Enter your name</InputTitle>
              <Input
                type="text"
                value={voterName}
                onChange={voterChangeHandler}
              />
            </InputContainer>
          )}
        </Modal>
      )}
    </BasePage>
  );
};
export default ResultsPage;
