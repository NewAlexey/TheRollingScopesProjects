import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../redux/reducers/AppReducer';

const WINNER_IMG = '/info/img/success.svg';
const LOSER_IMG = '/info/img/failure.svg';

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

const WinnerContainer = styled.div`
  width: 25vw;
  height: 25vw;
`;

const Message = styled.p`
  min-width: 130px;
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  color: #0099ae;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-60%);
`;

const WrongAnswersMessage = styled.p`
  min-width: 200px;
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
  color: #0099ae;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  -ms-transform: translateX(-50%);
  transform: translate(-50%, 90%);
`;

interface IModalProps {
  closeModal(): void;
}

export const ModalGameResult: React.FC<IModalProps> = ({ closeModal }) => {
  const wrongAnswer = useSelector((store: IState) => store.wrongAnswer);
  const loserMessage = `Count of errors - ${wrongAnswer.length} :(`;

  const getSadMessage = (): JSX.Element => (
    <>
      <img src={LOSER_IMG} alt="winner-img" />
      <Message>Sorry :(</Message>
      <WrongAnswersMessage>{loserMessage}</WrongAnswersMessage>
    </>
  );

  const getHappyMessage = (): JSX.Element => (
    <>
      <img src={WINNER_IMG} alt="winner-img" />
      <Message>Congratulations!</Message>
    </>
  );
  return (
    <Background onClick={closeModal}>
      <WinnerContainer>{wrongAnswer.length !== 0 ? getSadMessage() : getHappyMessage()}</WinnerContainer>
    </Background>
  );
};
