import { useSelector } from 'react-redux';
import styled from 'styled-components';

import getID from '../../utils/random-key';
import { IState } from '../../redux/reducers/AppReducer';
import { RightStar } from './Stars/RightStar';
import { WrongStar } from './Stars/WrongStar';

const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  background: linear-gradient(-90deg, #0099ae 0%, #00bf82 100%);
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Year = styled.span`
  color: black;
  cursor: default;
  margin: 0 50px;
`;

const LogoContainer = styled.div`
  width: 80px;
  transition: all ease-in 0.3s;
  &:hover {
    transform: rotate(-30deg);
  }
`;

interface IContentContainer {
  isGameMode: boolean;
}

const ContentContainer = styled.div<IContentContainer>`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ isGameMode }): string => (isGameMode ? 'scale(0)' : 'scale(1)')};
`;

const ContainerForGuessed = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 55vw;
`;

const ContainerForMissed = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  position: absolute;
  right: 55vw;
`;

export const Footer = (): JSX.Element => {
  const gameStart = useSelector((store: IState) => store.isGameStart);
  const countRightAnswers = useSelector((store: IState) => store.rightAnswer);
  const countWrongAnswers = useSelector((store: IState) => store.wrongAnswer);

  return (
    <FooterContainer>
      <ContainerForMissed>
        {gameStart ? countWrongAnswers.map((elem, index) => <WrongStar key={getID()} index={index} />) : null}
      </ContainerForMissed>
      <ContentContainer isGameMode={gameStart}>
        <Link href="https://github.com/NewAlexey" target="_blank">
          NewAlexey
        </Link>
        <Year>2021</Year>
        <LogoContainer>
          <Link href="https://rs.school/js/" target="_blank">
            <img src="https://rs.school/images/rs_school_js.svg" alt="RSSchool" width="80px" height="30px" />
          </Link>
        </LogoContainer>
      </ContentContainer>
      <ContainerForGuessed>
        {gameStart ? countRightAnswers.map((elem, index) => <RightStar key={getID()} index={index} />) : null}
      </ContainerForGuessed>
    </FooterContainer>
  );
};
