import { useEffect, useState } from "react";
import ItemResult from "../../components/Item/ItemResult/ItemResult";
import useHttp from "../../hooks/useHttp";
import { ItemType } from "../../types";
import BasePage from "../BasePage";
import { useNavigate, useSearchParams } from "react-router-dom";
import { InputContainer, Input, InputTitle } from "./style";
import Loader from "../../components/Loader/Loader";
import { Modal } from "../../components/Modal/Modal";

const ResultsPage = () => {
  const [items, setItems] = useState<any[]>([]);
  const [voterName, setVoterName] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<Boolean>(false);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const {
    isLoading: isLoadingItems,
    error: isErrorItems,
    sendRequest: getItemsToVoting,
  } = useHttp();

  const {
    isLoading: isLoadingSendResults,
    error: errorSendResults,
    sendRequest: votingRequest,
  } = useHttp();

  const addVotingValueToItem = (item: ItemType, value: Number) => {
    const itemFound = items.find((el) => el === item);
    itemFound.vote = value;
  };
  const addCommentToItem = (item: ItemType, comment: string) => {
    const itemFound = items.find((el) => el === item);
    itemFound.comment = comment;
  };

  const valueChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setVoterName(e.currentTarget.value);
  };

  const content = isErrorItems ? (
    "Request failed!"
  ) : isLoadingItems ? (
    <Loader loading={true} message={"Loading items..."} />
  ) : !items ? (
    "No items found!"
  ) : (
    items.map((item: ItemType) => {
      return (
        <ItemResult
          key={item["item-id"]}
          image={item["image-url"]}
          title={item.name}
          price={item.price}
          onAddVotingValue={(value: number) =>
            addVotingValueToItem(item, value)
          }
          onAddComment={(comment: string) => addCommentToItem(item, comment)}
        />
      );
    })
  );

  useEffect(() => {
    const transformItems = (data: any) => {
      data.products.forEach((item: ItemType) => {
        item.comment = "";
        item.vote = 0;
      });
      setItems(data.products);
    };
    getItemsToVoting(
      {
        url: `https://initvoting.azurewebsites.net/api/initvoting?id=${searchParams.get(
          "id"
        )}`,
      },
      transformItems
    );
    return () => {
      setItems([]);
    };
  }, [getItemsToVoting, searchParams]);

  const closeModal = () => {
    if (success) {
      navigate("/votingPage");
    }
    !isLoadingSendResults && setShowModal(false);
  };

  const onSendVoting = async () => {
    setShowModal(true);
    !voterName
      ? setMessage("You must enter name")
      : items
      ? setMessage("Loading...")
      : setMessage("There are no items");
    const responseDate = (data: any) => {
      errorSendResults
        ? setMessage("Try again!")
        : data.products && setMessage("Thank for your voting!");
      if (data) setSuccess(true);
    };
    voterName &&
      items.length &&
      votingRequest(
        {
          url: "https://initvoting.azurewebsites.net/api/voting",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { products: items, voterName },
        },
        responseDate
      );
  };

  return (
    <BasePage>
      <BasePage.Header>
        <BasePage.Title />
        <BasePage.Subtitle>Rate my shopping bag</BasePage.Subtitle>
        <InputContainer>
          <InputTitle>Enter your name</InputTitle>
          <Input type="text" value={voterName} onChange={valueChangeHandler} />
        </InputContainer>
      </BasePage.Header>
      <BasePage.Body>{content}</BasePage.Body>
      <BasePage.Footer>
        <BasePage.Button onClick={onSendVoting}>Done!</BasePage.Button>
        <Modal
          message={message}
          showModal={showModal}
          setShowModal={setShowModal}
          closeModal={closeModal}
        />
      </BasePage.Footer>
    </BasePage>
  );
};
export default ResultsPage;
