import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ACTIONS } from '../../../redux/constants';
import { IState } from '../../../redux/reducers/AppReducer';

interface ICard {
  trainMode: boolean;
  isReverse: boolean;
}
const CardContainer = styled.div`
  border-radius: 15px;
  margin: 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  cursor: pointer;
`;

const usuallyHoverBoxShadow = '0px 0px 10px 10px rgba(34, 60, 80, 0.35)';
const hoverBoxShadow = '0px 0px 15px 15px rgba(34, 60, 80, 0.35)';

const Card = styled.div<ICard>`
  border-radius: 15px;
  transform-style: preserve-3d;
  transition: all 0.35s ease-in-out;
  position: relative;
  width: 248px;
  height: ${(props): string => (props.trainMode ? '215px' : '215px')};
  cursor: pointer;
  box-shadow: ${usuallyHoverBoxShadow};
  transform: ${(props): string => (props.isReverse ? 'rotateY(180deg)' : '')};
  &:hover {
    box-shadow: ${(props): string => (props.trainMode ? hoverBoxShadow : usuallyHoverBoxShadow)};
  }
`;

interface ICardFrond {
  isGuess?: boolean;
}

const CardFront = styled.div<ICardFrond>`
  backface-visibility: hidden;
  transform-style: preserve-3d;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isGuess }): string => (isGuess ? '0.5' : '1')};
  pointer-events: ${({ isGuess }): string => (isGuess ? 'none' : 'auto')}; ;
`;

const CardBack = styled(CardFront)`
  transform: rotateY(180deg);
`;

const CardFooter = styled.div`
  transform-style: preserve-3d;
  backface-visibility: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

const Img = styled.img`
  width: 100%;
  height: 165px;
  border-radius: 15px;
  object-fit: scale-down;
  box-shadow: 0px 10px 15px 0px rgba(34, 60, 80, 0.2);
`;

const CategoryName = styled.p`
  font-size: 25px;
  min-width: 20%;
  text-align: right;
`;

interface IRotate {
  isCardReverse: boolean;
}

const Rotate = styled.div<IRotate>`
  width: 28px;
  height: 30px;
  background-size: contain;
  background-image: url(/info/img/rotate.svg);
  position: absolute;
  top: 27%;
  left: 83%;
  transition: all 0.2s ease-out;
  visibility: ${(props): string => (props.isCardReverse ? 'hidden' : '')};
  &:hover {
    transform: scale(1.3);
  }
`;

interface ICategoryCards {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  clickOnCard(value: string): boolean | void;
}

export const GameCard: React.FC<ICategoryCards> = ({
  word,
  translation,
  image,
  audioSrc,
  clickOnCard,
}): JSX.Element => {
  const [cardReverse, setCardReverse] = useState(false);
  const [mouseOnCard, setMouseOnCard] = useState(false);
  const [isGuess, setIsGuess] = useState(false);
  const onTrainMode = useSelector((store: IState) => store.onTrainMode);
  const onGameMode = useSelector((store: IState) => store.isGameStart);
  const dispatch = useDispatch();

  useEffect(() => {
    const isOpenSideMenu = false;
    const isGameStart = false;
    dispatch({ type: ACTIONS.CLOSE_SIDE_MENU, isOpenSideMenu });
    dispatch({ type: ACTIONS.IS_GAME_START, isGameStart });
  }, []);

  useEffect(() => {
    setIsGuess(false);
  }, [onGameMode]);

  const reverseCard = (): void => {
    setCardReverse(true);
  };

  const reverseCardBack = (): void => {
    if (cardReverse) {
      setCardReverse(false);
    }
    setMouseOnCard(false);
  };

  const getAudioSrc = (): void => {
    if (clickOnCard(audioSrc)) {
      setIsGuess(true);
    }
  };

  return (
    <>
      <CardContainer>
        <div onMouseMove={(): void => setMouseOnCard(true)} onMouseLeave={reverseCardBack}>
          <Card isReverse={cardReverse} trainMode={onTrainMode}>
            <CardFront isGuess={isGuess}>
              <Img src={image} width="250px" height="200px" onClick={getAudioSrc} />
              <CardFooter>
                {onTrainMode ? <CategoryName>{word}</CategoryName> : null}
                {onTrainMode ? <Rotate onClick={reverseCard} isCardReverse={cardReverse} /> : null}
              </CardFooter>
            </CardFront>
            <CardBack>
              <Img src={image} width="250px" height="200px" />
              <CardFooter>{onTrainMode ? <CategoryName>{translation}</CategoryName> : null}</CardFooter>
            </CardBack>
          </Card>
        </div>
      </CardContainer>
    </>
  );
};
