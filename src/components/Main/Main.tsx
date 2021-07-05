import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';

import { MainCard } from './MainCard/MainCard';
import gameCategory from '../../utils/game-category';
import { ACTIONS } from '../../redux/constants';
import { createStatisticInLocalStorage } from '../../utils/create-local-storage';

const MainContainer = styled.main`
  margin-top: 50px;
  width: 100%;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Main = (): JSX.Element => {
  const dispatch = useDispatch();

  const closeSideMenu = (value: boolean): void => {
    dispatch({ type: ACTIONS.CLOSE_SIDE_MENU, value });
  };

  useEffect(() => {
    closeSideMenu(false);
    createStatisticInLocalStorage();
  }, []);

  return (
    <>
      <MainContainer onClick={(): void => closeSideMenu(false)}>
        {gameCategory.map((category) => (
          <MainCard
            key={category.id}
            categoryPath={category.categoryPath}
            imgPath={category.imgPath}
            categoryName={category.categoryName}
          />
        ))}
      </MainContainer>
    </>
  );
};
