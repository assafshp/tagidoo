import { useEffect, useState } from "react";
import ItemResult from "../../components/Item/ItemResult/ItemResult";
import Loader from "../../components/Loader/Loader";
import useHttp from "../../hooks/useHttp";
import { ItemType } from "../../types";
import BasePage from "../BasePage";
import { useSearchParams } from "react-router-dom";
import { Message } from "../InitCartPage/style";
import cartIcon from '../../assets/icons/cartIconwhite.svg';

const ResultsPage = () => {
  const [data, setData] = useState<any>({});
  const [searchParams] = useSearchParams();

  const {
    isLoading: isLoadingItems,
    error: isErrorItems,
    sendRequest: getItemsToVoting,
  } = useHttp();
  const { sendRequest: getUrlBack } = useHttp();

  const content = isErrorItems ? (
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
            votes={item.votes}
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
        url: `https://prod-234.westeurope.logic.azure.com/workflows/f560025fe2ff4bc5ae61f4a6e73190de/triggers/manual/paths/invoke/ids/${searchParams.get(
          "id"
        )}
      ?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=0Lr0YNWv6R5oXrAeftrQARa-hBHI8fvXCbh4eucJrKE`,
      },
      transformItems
    );
    return () => {
      setData({});
    };
  }, [getItemsToVoting, searchParams]);

  const onDoneVoting = async () => {
    data.enabled = false;
    const transformUrl = (data: any) => {
      data && window.open(data[`return-url`], "_blank");
    };
    getUrlBack(
      {
        url: "https://prod-108.westeurope.logic.azure.com:443/workflows/0b1b994fa3bf4af19bbe843c9e176a3d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=lbWTHXvl7yFbWhM8Qu4O128QR2YQItgpVvTTGPu0CUE",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { id: data.id },
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
        <BasePage.Button img={cartIcon} onClick={onDoneVoting}>
          Stop rating, go shopping
        </BasePage.Button>
      </BasePage.Footer>
    </BasePage>
  );
};
export default ResultsPage;
