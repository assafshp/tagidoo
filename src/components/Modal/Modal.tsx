import { useEffect, useCallback } from "react";
import {
  Background,
  CloseModalButton,
  ModalContent,
  ModalWrapper,
} from "./style";

interface ModalProps {
  showModal: Boolean;
  setShowModal: (value: boolean) => void;
  message: string;
  closeModal: () => void;
}

export const Modal = (props: ModalProps) => {
  const setShowModal = props.setShowModal;
  const showModal = props.showModal;
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && props.showModal) {
        props.setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {props.showModal ? (
        <Background>
          <ModalWrapper>
            <ModalContent>{props.message}</ModalContent>
            <CloseModalButton onClick={props.closeModal}>Ok</CloseModalButton>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
