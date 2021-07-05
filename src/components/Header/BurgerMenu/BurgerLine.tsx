import styled from 'styled-components';

const Line = styled.div`
  width: 30px;
  border-top: 2px solid black;
  margin: 5px;
`;

export const BurgerLine: React.FC = () => (
  <>
    <Line />
    <Line />
    <Line />
  </>
);
