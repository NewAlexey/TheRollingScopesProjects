import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { GameCard } from './GameCard';
import cards from '../../utils/cards';
import { ACTIONS } from '../../redux/constants';
import { IState } from '../../redux/reducers/AppReducer';
import { ModalGameResult } from '../Modals/ModalGameResult';
import { updateGameClick, updateTrainClick } from '../../utils/update-local-storage-img-click';

const AUDIO_DELAY = 600;
const SELECTED_CATEGORY = 0;
const WRONG_ANSWER = '/info/audio/error.mp3';
const RIGHT_ANSWER = '/info/audio/correct.mp3';
const SAD_MUSIC = '/info/audio/failure.mp3';
const HAPPY_MUSIC = '/info/audio/success.mp3';

interface ICategoryCards {
  category: string;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

const GameContainer = styled.main`
  width: 100%;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
  justify-content: space-evenly;
`;

const StartButton = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(180deg, #0099ae 0%, #00bf82 100%);
  border-radius: 50%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  top: 15%;
  right: 3%;
  cursor: pointer;
  transition: all 0.4s ease-out;
  box-shadow: 0px 50px 10px 10px rgba(34, 60, 80, 0.35);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 50px 15px 15px rgba(34, 60, 80, 0.35);
  }
`;

const RepeatButton = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(180deg, #0099ae 0%, #00bf82 100%);
  border-radius: 50%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  top: 15%;
  right: 3%;
  cursor: pointer;
  transition: all 0.4s ease-out;
  box-shadow: 0px 50px 10px 10px rgba(34, 60, 80, 0.35);
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 50px 15px 15px rgba(34, 60, 80, 0.35);
  }
`;

interface IListAudioSrc {
  audioSrc: string;
  isGuessed: boolean;
}

function shuffle(array: IListAudioSrc[] | ICategoryCards[]): void {
  array.sort(() => Math.random() - 0.5);
}

const setFalseIsGuessAudio = (array: IListAudioSrc[]): IListAudioSrc[] => array.map((elem) => {
  if (elem.isGuessed) {
    const notIsGuessedElem = elem;
    notIsGuessedElem.isGuessed = false;

    return notIsGuessedElem;
  }

  return elem;
});

const getGuessedArr = (arr: IListAudioSrc[], value: string): IListAudioSrc[] => arr.map((elem) => {
  if (elem.audioSrc === value) {
    const newElem = {} as IListAudioSrc;
    newElem.isGuessed = true;
    newElem.audioSrc = elem.audioSrc;

    return newElem;
  }

  return elem;
});

const getCardsForGame = (arr: ICategoryCards[]): IListAudioSrc[] => arr.map((elem) => {
  const newElem = {} as IListAudioSrc;
  newElem.audioSrc = elem.audioSrc;
  newElem.isGuessed = false;
  return newElem;
});

const checkGuessedImg = (arr: IListAudioSrc[]): boolean => arr.some((elem) => !elem.isGuessed);

export const Game = (): JSX.Element => {
  const location = useLocation();
  const wrongAnswer = useSelector((store: IState) => store.wrongAnswer);
  const [categoryCards, setCategoryCards] = useState<ICategoryCards[]>([]);
  const [listAudioSrc, setListAudioSrc] = useState<IListAudioSrc[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const onTrainMode = useSelector((store: IState) => store.onTrainMode);
  const onGameMode = useSelector((store: IState) => store.isGameStart);
  const history = useHistory();
  const dispatch = useDispatch();
  const refAudio = useRef<HTMLAudioElement>(null);

  const closeSideMenu = (value: boolean): void => {
    const isOpenSideMenu = value;
    dispatch({ type: ACTIONS.CLOSE_SIDE_MENU, isOpenSideMenu });
  };

  const playAudio = (value: string): void => {
    const audio = refAudio.current as HTMLAudioElement;
    audio.src = value;
  };

  const playCurrentAudio = (): void => {
    const currentElem = listAudioSrc.find((elem) => !elem.isGuessed) as IListAudioSrc;

    if (!currentElem) return;
    setTimeout(() => {
      playAudio(currentElem.audioSrc);
    }, AUDIO_DELAY);
  };

  useEffect(() => {
    if (onGameMode) {
      playCurrentAudio();
    }
  }, [listAudioSrc]);

  useEffect(() => {
    shuffle(listAudioSrc);
  }, [onTrainMode]);

  useEffect(() => {
    if (onGameMode) {
      playCurrentAudio();
    }
    if (!onGameMode) {
      const isGuessedFalseAudio = setFalseIsGuessAudio(listAudioSrc);
      setListAudioSrc(isGuessedFalseAudio);
      dispatch({ type: ACTIONS.CLEAR_ANSWERS });
    }
  }, [onGameMode]);

  useEffect(() => {
    const category = location.pathname.split('/').reverse()[SELECTED_CATEGORY];
    const selectedDataCaregory = cards.filter((elem) => elem.category === category);
    shuffle(selectedDataCaregory);
    setCategoryCards(selectedDataCaregory);
    const cardsForGame = getCardsForGame(selectedDataCaregory);
    shuffle(cardsForGame);
    setListAudioSrc(cardsForGame);
    return (): void => {
      dispatch({ type: ACTIONS.CLEAR_ANSWERS });
      const isGameStart = false;
      dispatch({ type: ACTIONS.IS_GAME_START, isGameStart });
    };
  }, [dispatch, location]);

  const setGameisStart = (): void => {
    const isGameStart = true;
    dispatch({ type: ACTIONS.IS_GAME_START, isGameStart });
  };

  const goMainPage = (): void => {
    history.push('/main');
  };

  const clickGuessImg = (value: string): boolean => {
    const currentElem = listAudioSrc.find((elem) => !elem.isGuessed);
    const currentAudio = currentElem?.audioSrc as string;

    if (value === currentAudio) {
      dispatch({ type: ACTIONS.RIGHT_ANSWER });
      const guessedArr = getGuessedArr(listAudioSrc, value);
      setListAudioSrc(guessedArr);
      playAudio(RIGHT_ANSWER);

      if (!checkGuessedImg(guessedArr)) {
        if (wrongAnswer.length) {
          playAudio(SAD_MUSIC);
        } else {
          playAudio(HAPPY_MUSIC);
        }

        setGameOver(true);
      }
      return true;
    }
    playAudio(WRONG_ANSWER);
    dispatch({ type: ACTIONS.WRONG_ASNWER });

    return false;
  };

  const clickOnCard = (value: string): boolean => {
    if (onGameMode) {
      const cardIsGuessed = clickGuessImg(value);
      updateGameClick(value, cardIsGuessed);

      return cardIsGuessed;
    }
    if (onTrainMode) {
      updateTrainClick(value);
      playAudio(value);
    }
    return false;
  };

  const onStartButton = (): JSX.Element | null => (!onTrainMode ? <StartButton onClick={setGameisStart}>START</StartButton> : null);

  const repeatButton = (): JSX.Element => (
    <RepeatButton onClick={playCurrentAudio}>
      <img src="/info/img/repeat.svg" alt="repeat" width="40px" height="40px" />
    </RepeatButton>
  );
  return (
    <>
      <GameContainer onClick={(): void => closeSideMenu(false)}>
        {categoryCards.map((elem) => (
          <GameCard
            key={elem.word}
            word={elem.word}
            image={elem.image}
            translation={elem.translation}
            audioSrc={elem.audioSrc}
            clickOnCard={clickOnCard}
          />
        ))}
        <audio ref={refAudio} autoPlay>
          <track kind="captions" />
        </audio>
        {onGameMode ? repeatButton() : onStartButton()}
      </GameContainer>
      {gameOver ? <ModalGameResult closeModal={goMainPage} /> : null}
    </>
  );
};
