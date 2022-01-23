import { useEffect, useState } from "react";
import ItemVote from "../../components/Item/ItemVote/ItemVote";
import Loader from "../../components/Loader/Loader";
import useHttp from "../../hooks/useHttp";
import { ItemType } from "../../types";
import BasePage from "../BasePage";
import { useSearchParams } from "react-router-dom";

const VotingPage = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [searchParams] = useSearchParams();

  const {
    isLoading: isLoadingItems,
    error: isErrorItems,
    sendRequest: getItemsToVoting,
  } = useHttp();
  const { sendRequest: getUrlBack } = useHttp();

  const content = isErrorItems ? (
    "Request failed!"
  ) : isLoadingItems ? (
    <Loader loading={true} message={"Loading your results..."} />
  ) : !items ? (
    "No items found!"
  ) : (
    items.map((item: ItemType) => {
      return (
        <ItemVote
          key={item["item-id"]}
          image={item["image-url"]}
          title={item.name}
          price={item.price}
          votes={item.votes}
        />
      );
    })
  );

  useEffect(() => {
    const transformItems = (data: any) => {
      setItems(data.products);
    };
    getItemsToVoting(
      {
        // url: `https://initvoting.azurewebsites.net/api/votingresults?id=${searchParams.get(
        //   "id"
        // )}`,
        url: `https://prod-234.westeurope.logic.azure.com/workflows/f560025fe2ff4bc5ae61f4a6e73190de/triggers/manual/paths/invoke/ids/${searchParams.get("id")}?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=0Lr0YNWv6R5oXrAeftrQARa-hBHI8fvXCbh4eucJrKE`,
      },
      transformItems
    );
    return () => {
      setItems([]);
    };
  }, [getItemsToVoting, searchParams]);

  const onDoneVoting = async () => {
    const transformUrl = (data: any) => {
      data && window.open(data[`return-url`], "_blank");
    };
    getUrlBack(
      {
        // url: "https://initvoting.azurewebsites.net/api/donevoting",
        url: "https://prod-108.westeurope.logic.azure.com:443/workflows/0b1b994fa3bf4af19bbe843c9e176a3d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lbWTHXvl7yFbWhM8Qu4O128QR2YQItgpVvTTGPu0CUE",
      },
      transformUrl
    );
  };

  return (
    <BasePage>
      <BasePage.Header>
        <BasePage.Title />
        <BasePage.Subtitle>So this is what your friends say</BasePage.Subtitle>
      </BasePage.Header>
      <BasePage.Body>{content}</BasePage.Body>
      <BasePage.Footer>
        <BasePage.Button onClick={onDoneVoting}>
          Stop rating, go shopping
        </BasePage.Button>
      </BasePage.Footer>
    </BasePage>
  );
};
export default VotingPage;
