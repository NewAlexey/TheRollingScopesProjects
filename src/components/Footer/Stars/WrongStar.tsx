import styled from 'styled-components';

const LOSE_STAR = '/info/img/star.svg';

interface IWrongStar {
  index: number;
}

const Star = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
`;

export const WrongStar: React.FC<IWrongStar> = ({ index }) => {
  const style = {
    right: `${5 * index}%`,
  };
  return (
    <Star style={style}>
      <img src={LOSE_STAR} alt="star" width="50px" height="50px" />
    </Star>
  );
};
