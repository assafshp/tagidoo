import { useEffect, useState } from "react";
import ItemInit from "../../components/Item/ItemInit/ItemInit";
import useHttp from "../../hooks/useHttp";
import { useSearchParams } from "react-router-dom";
import BasePage from "../BasePage";
import { ItemType } from "../../types";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import Modal from "../../components/Modal/Modal";
import { Div, Message, SharePage } from "./style";
import SplashScreen from "../SplashScreen/SplashScreen";
import continueIcon from "../../assets/icons/continueIcon.svg";
import { CloseModalButton, IconCloseBtn } from "../../components/Modal/style";
import { IconBtn } from "../style";
import iconSave from "../../assets/icons/saveIcon.svg";
import { WhatsappShareButton, WhatsappIcon } from "react-share";

const InitCartPage = () => {
  let counterOfSelectedItems = 0;
  const [data, setData] = useState<any>({});
  const [showModal, setShowModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<Boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showSplash, setShowSplash] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [id, setId] = useState<string | null>();

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
    const index = data.products.indexOf(item);
    const selected = data.products[index].selected;
    !selected && counterOfSelectedItems++;
    selected && counterOfSelectedItems--;
    data.products[index].selected = !selected;
  };
  const content = isErrorItems ? (
    <Message>Request failed!</Message>
  ) : isLoadingItems ? (
    <Loader loading={true} message={"Loading page..."} />
  ) : !data.enabled ? (
    <Message>Voting is closed</Message>
  ) : !data.products ? (
    <Message>No items found!</Message>
  ) : (
    data.products.map((item: ItemType) => {
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

    async function getMockId (){

      const tmp = await fetch('https://prod-201.westeurope.logic.azure.com:443/workflows/e2f403f144454fde96c530f5556899de/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=AUznvoall_13uy_nwSwVSacxxWNaLWVhvrcDR6gUkVE');
      const res =  (await tmp.json()).id;
      setId(res);      
    }
    

    const timer = setTimeout(() => setShowSplash(false), 2500);
    const tmpId = searchParams.get("id");
    if (!tmpId) {
      getMockId();
    } else {
      setId(tmpId);
    }
    
    return () => {
      clearTimeout(timer);
      setId("");
    };
  }, [searchParams]);

  useEffect(() => {
    const transformItems = (data: any) => {
      data.products.forEach((item: ItemType) => {
        item.selected = false;
      });
      setData(data);
    };
    !showSplash &&
      getItemsFromCart(
        {
          url: `https://prod-138.westeurope.logic.azure.com/workflows/a66a3ae4989f47ef9aeb1a8b4158d554/triggers/manual/paths/invoke/ids/${id}
      ?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=YpXCYZROZ0tRlysYusCsu-xEoBcqMVjyoTmqBQ-c6Lw`,
        },
        transformItems
      );
    return () => {
      setData({});
    };
  }, [getItemsFromCart, searchParams, showSplash]);

  const closeModal = () => {
    setShowModal(false);
  };
  const onAskFriends = async () => {
    setShowModal(true);
    !counterOfSelectedItems && setMessage("You need to add items");
    const responseDate = (data: any) => {
      isErrorSendItems && setMessage("Try again!");
      if (data) {
        setSuccess(true);
        setShowSplash(true);
      }
    };
    if (counterOfSelectedItems && data.enabled) {
      sendItemsToVote(
        {
          url: "https://prod-238.westeurope.logic.azure.com:443/workflows/cdab7b1e029547e7951e208def8c26c3/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Pl0JzU9Dgqfm6nVPqWP2bC80AIjTc-6qLe1X1lP8l4w",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: data,
        },
        responseDate
      );
    }
  };

  return showSplash ? (
    success ? (
      <SplashScreen small>
        <SharePage>
          <Div>
            <p style={{ fontSize: "20px" }}>
              Share this page with your friends
            </p>
            <WhatsappShareButton
              style={{ paddingTop: "25px" }}
              url={
                window.location.origin + `/votingPage?id=` +
                id
              }
            >
              <WhatsappIcon size={80} round={true} />
            </WhatsappShareButton>
          </Div>
          <CloseModalButton
            style={{ marginTop: "80px" }}
            onClick={() => navigate(`/resultsPage?id=${id}`)}
          >
            See whats your friends said
          </CloseModalButton>
        </SharePage>
      </SplashScreen>
    ) : (
      <SplashScreen />
    )
  ) : (
    <BasePage>
      <BasePage.Header>
        <BasePage.Title />
        <BasePage.Subtitle>Choose Items to share!</BasePage.Subtitle>
      </BasePage.Header>
      <BasePage.Body>{content}</BasePage.Body>
      <BasePage.Footer>
        <BasePage.Button onClick={onAskFriends} img={continueIcon}>
          Continue
        </BasePage.Button>
      </BasePage.Footer>
      {!isLoadingSendItems && !success && (
        <Modal
          message={message}
          showModal={showModal}
          setShowModal={setShowModal}
          closeModal={closeModal}
        ></Modal>
      )}
    </BasePage>
  );
};
export default InitCartPage;
