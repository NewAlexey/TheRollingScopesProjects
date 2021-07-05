import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { ACTIONS } from '../../redux/constants';
import { IState } from '../../redux/reducers/AppReducer';
import { BurgerMenu } from './BurgerMenu';
import { Switcher } from './Switcher';

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #0099ae 0%, #00bf82 100%);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const HeaderContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Header = (): JSX.Element => {
  const isOpenSideMenu = useSelector((store: IState) => store.isOpenSideMenu);
  const dispatch = useDispatch();

  const clickBurgerMenu = (): void => {
    dispatch({ type: ACTIONS.CLICK_BURGER_MENU });
  };

  const closeSideMenu = (): void => {
    if (isOpenSideMenu) {
      const value = false;
      dispatch({ type: ACTIONS.CLOSE_SIDE_MENU, value });
    }
  };

  return (
    <>
      <HeaderContainer onClick={closeSideMenu}>
        <HeaderContent>
          <BurgerMenu onClick={clickBurgerMenu} />
          <Switcher />
        </HeaderContent>
      </HeaderContainer>
    </>
  );
};
