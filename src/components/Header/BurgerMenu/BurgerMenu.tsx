import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../../redux/reducers/AppReducer';
import { BurgerCross } from './BurgerCross';
import { BurgerLine } from './BurgerLine';

interface IBurgerMenuProps {
  onClick(e: React.MouseEvent<HTMLDivElement>): void;
}

const BurgerContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
`;

export const BurgerMenu: React.FC<IBurgerMenuProps> = ({ onClick }) => {
  const isOpenSideMenu = useSelector((store: IState) => store.isOpenSideMenu);
  return (
    <>
      <BurgerContainer onClick={onClick}>{!isOpenSideMenu ? <BurgerLine /> : <BurgerCross />}</BurgerContainer>
    </>
  );
};
