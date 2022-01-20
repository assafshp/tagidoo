import { useEffect, useState } from "react";
import ItemInit from "../../components/Item/ItemInit/ItemInit";
import useHttp from "../../hooks/useHttp";
import { useSearchParams } from "react-router-dom";
import BasePage from "../BasePage";
import { ItemType } from "../../types";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import { MIN_NUM_OF_VOTE } from "../../theme";

const InitCartPage = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [votingList, setVotingList] = useState<ItemType[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<Boolean>(false);
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const {
    isLoading: isLoadingItems,
    error: isErrorItems,
    sendRequest: getItemsFromCart,
  } = useHttp();

  const {
    isLoading: isLoadingSendItems,
    error: isErrorSendItems,
    sendRequest: sendItemsToVote,
  } = useHttp();

  const addOrRemoveItem = (item: ItemType) => {
    const index = votingList.indexOf(item);
    if (index >= MIN_NUM_OF_VOTE) {
      votingList.splice(index, 1);
    } else {
      setVotingList((votingList) => [...votingList, item]);
    }
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
        <ItemInit
          key={item["item-id"]}
          image={item["image-url"]}
          title={item.name}
          price={item.price}
          button={{
            addOrRemove: () => {
              addOrRemoveItem(item);
            },
          }}
        />
      );
    })
  );

  useEffect(() => {
    const transformItems = (data: any) => {
      setItems(data.products);
    };
    getItemsFromCart(
      {
        url: `https://initvoting.azurewebsites.net/api/initvote?id=${searchParams.get('id')}`,
      },
      transformItems
    );
    return () => {
      setItems([]);
    };
  }, [getItemsFromCart, searchParams]);

  const closeModal = () => {
    if (success) {
      navigate("/resultsPage");
    }
    !isLoadingSendItems && setShowModal(false);
  };

  const onAskFriends = async () => {
    setShowModal(true);
    !votingList.length
      ? setMessage("You need to add items")
      : setMessage("Loading...");
    const responseDate = (data: any) => {
      isErrorSendItems
        ? setMessage("Try again!")
        : data.products &&
          setMessage("Your items are on the way to your friends!");
      if (data) setSuccess(true);
    };
    votingList.length &&
      sendItemsToVote(
        {
          url: "https://initvoting.azurewebsites.net/api/startvoting",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { products: votingList },
        },
        responseDate
      );
  };
  
  return (
    <BasePage>
      <BasePage.Header>
        <BasePage.Title />
        <BasePage.Subtitle>Choose Items to share</BasePage.Subtitle>
      </BasePage.Header>
      <BasePage.Body>{content}</BasePage.Body>
      <BasePage.Footer>
        <BasePage.Button onClick={onAskFriends}>
          Ask your friends
        </BasePage.Button>
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
export default InitCartPage;
