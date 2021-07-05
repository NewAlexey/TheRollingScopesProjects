import styled from 'styled-components';

interface ITableRow {
  currNumber: number;
  category: string;
  word: string;
  translation: string;
  clickTrainMode: number;
  clickGameMode: number;
  errorClick: number;
  percentOfCorrectAnswer: number;
}

const Tr = styled.tr`
  &:nth-child(2n) {
    background-color: #ececd2;
  }
  &:hover {
    background-color: #fff600;
  }
  cursor: pointer;
`;

const Td = styled.td`
  text-align: center;
  border: 1px solid #79792b;
  padding: 4px 1em;
  text-transform: capitalize;
`;

export const TableRow: React.FC<ITableRow> = ({
  currNumber,
  category,
  word,
  translation,
  clickTrainMode,
  clickGameMode,
  errorClick,
  percentOfCorrectAnswer,
}): JSX.Element => (
  <Tr>
    <Td>{currNumber}</Td>
    <Td>{category}</Td>
    <Td>{word}</Td>
    <Td>{translation}</Td>
    <Td>{clickTrainMode}</Td>
    <Td>{clickGameMode}</Td>
    <Td>{errorClick}</Td>
    <Td>{percentOfCorrectAnswer}</Td>
  </Tr>
);
