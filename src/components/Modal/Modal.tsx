import { useEffect, useCallback } from "react";
import {
  HeaderContainer,
  IconMessage,
  InputTitle,
} from "../../pages/VotingPage/style";
import {
  Background,
  CloseModalButton,
  IconCloseBtn,
  ModalContent,
  ModalWrapper,
} from "./style";
import iconStore from "../../assets/icons/cartModal.svg";
import iconSave from "../../assets/icons/saveIcon.svg";
import { IconBtn } from "../../pages/style";

interface ModalProps {
  showModal: Boolean;
  setShowModal: (value: boolean) => void;
  message: string;
  closeModal: () => void;
  children?: any;
  messageButton?: string;
  icon?: Boolean;
}

export const Modal = (props: ModalProps) => {
  const setShowModal = props.setShowModal;
  const showModal = props.showModal;
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && props.showModal) {
        props.setShowModal(false);
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
            <HeaderContainer>
              <IconMessage src={iconStore}></IconMessage>
              <InputTitle>Be friendly</InputTitle>
            </HeaderContainer>
            <ModalContent>{props.message}</ModalContent>
            {props.children}
            <CloseModalButton onClick={props.closeModal}>
              {!props.icon && (
                <IconCloseBtn>
                  <IconBtn src={iconSave} />
                </IconCloseBtn>
              )}
              {props.messageButton ? props.messageButton : "Save"}
            </CloseModalButton>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
