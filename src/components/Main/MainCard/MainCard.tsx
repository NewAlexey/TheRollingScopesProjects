import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { IState } from '../../../redux/reducers/AppReducer';

const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 280px;
  margin: 3vw;
  border-radius: 0 0 15px 15px;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 7px 5px rgba(34, 60, 80, 0.2);
  }
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 130px;
  background: linear-gradient(180deg, #0099ae 0%, #00bf82 100%);
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 125px;
  text-align: center;
`;

const Img = styled.img`
  border-radius: 50%;
  border: 10px solid #ffffff;
  object-fit: cover;
  position: absolute;
  top: 15%;
  left: 17%;
`;

const CategoryName = styled.p`
  font-size: 25px;
  position: relative;
  top: 75%;
`;

interface IGameMode {
  gameMode: boolean;
}

const GameMode = styled.div<IGameMode>`
  width: 70px;
  height: 30px;
  background-color: #fff600;
  position: absolute;
  text-align: center;
  left: 35%;
  line-height: 30px;
  transition: all 0.4s ease;
  border-radius: 0 0 15px 15px;
  top: ${({ gameMode }): string => (gameMode ? '0px' : '-30px')};
`;

interface IGameCardProps {
  categoryPath: string;
  imgPath: string;
  categoryName: string;
}

export const MainCard: React.FC<IGameCardProps> = ({ categoryPath, imgPath, categoryName }): JSX.Element => {
  const history = useHistory();
  const goToCategory = (): void => {
    history.push(`${categoryPath}`);
  };
  const onTrainMode = useSelector((store: IState) => store.onTrainMode);
  return (
    <>
      <CardContainer onClick={goToCategory}>
        <BackgroundContainer>
          <GameMode gameMode={!onTrainMode}>PLAY</GameMode>
        </BackgroundContainer>
        <ContentContainer>
          <Img src={imgPath} alt={categoryName} width="150px" height="150px" />
          <CategoryName>{categoryName}</CategoryName>
        </ContentContainer>
      </CardContainer>
    </>
  );
};
