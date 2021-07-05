import styled from 'styled-components';

const LineFirst = styled.div`
  width: 30px;
  border: 1px solid black;
  margin: 5px;
  transform: rotate(-45deg);
  position: relative;
  top: 5px;
`;

const LineSecond = styled.div`
  width: 30px;
  border: 1px solid black;
  margin: 5px;
  transform: rotate(45deg);
  position: relative;
  top: -7px;
`;

export const BurgerCross: React.FC = () => (
  <>
    <LineFirst />
    <LineSecond />
  </>
);
