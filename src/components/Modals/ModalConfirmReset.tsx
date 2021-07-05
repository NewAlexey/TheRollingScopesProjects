import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ACTIONS } from '../../redux/constants';
import { clearStatisticInLocalStorage, getStatisticDataFromLocalStorage } from '../../utils/create-local-storage';

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000000cc;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 15%;
  height: 17%;
  display: flex;
  flex-direction: column;
  background-color: #b0b0b0;
  justify-content: space-evenly;
  align-items: center;
`;

const Information = styled.p`
  color: #000000;
`;

const ButtonContainer = styled.div`
  width: 60%;
  height: 30%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  height: 30px;
  padding: 0 30px;
`;

const onClickContent = (e: React.MouseEvent<HTMLDivElement>): void => {
  e.stopPropagation();
};

interface IModalProps {
  closeModal(): void;
}

export const ModalConfirmReset: React.FC<IModalProps> = ({ closeModal }) => {
  const dispatch = useDispatch();
  const closeModalAndResetStatistic = (): void => {
    closeModal();
    clearStatisticInLocalStorage();
    const statisticData = getStatisticDataFromLocalStorage();
    dispatch({ type: ACTIONS.ADD_STATISTIC_DATA, statisticData });
  };

  return (
    <>
      <Background onClick={closeModal}>
        <ContentContainer onClick={(e): void => onClickContent(e)}>
          <Information>Are you sure?</Information>
          <ButtonContainer>
            <Button onClick={closeModalAndResetStatistic}>Yes</Button>
            <Button onClick={closeModal}>No</Button>
          </ButtonContainer>
        </ContentContainer>
      </Background>
    </>
  );
};
