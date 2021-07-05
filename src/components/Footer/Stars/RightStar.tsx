import styled from 'styled-components';

const WIN_STAR = '/info/img/star-win.svg';

interface IRightStar {
  index: number;
}

const Star = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
`;

export const RightStar: React.FC<IRightStar> = ({ index }) => {
  const style = {
    left: `${5 * index}%`,
  };
  return (
    <Star style={style}>
      <img src={WIN_STAR} alt="star" width="50px" height="50px" />
    </Star>
  );
};
