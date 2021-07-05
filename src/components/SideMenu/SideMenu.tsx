import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import './style.scss';
import gameCategory from '../../utils/game-category';

interface ISideMenuProps {
  menuOnScreen?: boolean;
}

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: space-between;
  height: fit-content;
  margin: 50px 0 50px 0;
`;

const Li = styled.li`
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;

const NavLinkActive = styled(NavLink)`
  &.active {
    color: #0042ff;
  }
`;

export const SideMenu: React.FC<ISideMenuProps> = ({ menuOnScreen }) => (
  <nav className={menuOnScreen ? 'side-menu-open' : 'side-menu-close'}>
    <Ul className="ul-header">
      <Li>
        <NavLinkActive exact to="/main">
          Main Page
        </NavLinkActive>
      </Li>
      {gameCategory.map((category) => (
        <Li key={category.id}>
          <NavLinkActive exact to={category.categoryPath}>
            {category.categoryName}
          </NavLinkActive>
        </Li>
      ))}
      <Li>
        <NavLinkActive exact to="/statistic">
          Statistic Page
        </NavLinkActive>
      </Li>
    </Ul>
  </nav>
);
