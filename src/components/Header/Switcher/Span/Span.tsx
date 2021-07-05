import styled from 'styled-components';

interface ITextProps {
  gameMode: boolean;
}

interface ISpanProps {
  gameMode: boolean;
  text: string;
}

const Text = styled.span<ITextProps>`
  position: relative;
  left: ${({ gameMode }): string => (gameMode ? '44px' : '17px')};
  top: 29px;
  color: black;
  z-index: 1;
  cursor: default;
`;

export const Span: React.FC<ISpanProps> = ({ text, gameMode }) => <Text gameMode={gameMode}>{text}</Text>;
