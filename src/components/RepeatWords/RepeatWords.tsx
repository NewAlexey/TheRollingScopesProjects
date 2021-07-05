import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ACTIONS } from '../../redux/constants';
import { IState } from '../../redux/reducers/AppReducer';
import { GameCard } from '../Game/GameCard';

const GameContainer = styled.main`
  width: 100%;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-wrap: wrap;
  margin: 50px 0;
  justify-content: space-evenly;
`;

const EmptyText = styled.p`
  position: absolute;
  left: 50%;
  top: 45%;
  font-size: 35px;
  transform: translate(-50%, 90%);
`;

export const RepeatWords = (): JSX.Element => {
  const refAudio = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();
  const repeatWords = useSelector((store: IState) => store.repeatWords);
  const playAudio = (value: string): void => {
    const audio = refAudio.current as HTMLAudioElement;
    audio.src = value;
  };

  const closeSideMenu = (value: boolean): void => {
    dispatch({ type: ACTIONS.CLOSE_SIDE_MENU, value });
  };

  useEffect(() => {
    closeSideMenu(false);
  }, []);

  return (
    <>
      {repeatWords.length !== 0 ? (
        <>
          <GameContainer>
            {repeatWords.map((elem) => (
              <GameCard
                key={elem.word}
                word={elem.word}
                image={elem.image}
                translation={elem.translation}
                audioSrc={elem.audioSrc}
                clickOnCard={playAudio}
              />
            ))}
          </GameContainer>
          <audio ref={refAudio} autoPlay>
            <track kind="captions" />
          </audio>
        </>
      ) : (
        <EmptyText> Sorry, empty here</EmptyText>
      )}
    </>
  );
};
