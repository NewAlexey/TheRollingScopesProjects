import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { ACTIONS } from '../../redux/constants';
import { IState } from '../../redux/reducers/AppReducer';
import { getStatisticDataFromLocalStorage, IElementOfStatistic } from '../../utils/create-local-storage';
import getRepeatWordsData from '../../utils/get-filtered-arr';
import { ModalConfirmReset } from '../Modals/ModalConfirmReset';
import { TableRow } from './TableRow';

const StatisticContainer = styled.main`
  width: 100%;
  height: fit-content;
  min-height: 500px;
  margin: 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TableContainer = styled.div`
  max-width: 100%;
  width: 850px;
  margin: 0 auto 30px auto;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  overflow: auto;
  @media (max-width: 920px) {
    box-shadow: 0px 5px 15px 5px rgba(34, 60, 80, 0.8);
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

const Thead = styled.thead`
  height: 50px;
  background: linear-gradient(180deg, #0099ae 0%, #00bf82 100%);
`;

const Th = styled.th`
  padding: 0 10px;
  border: 1px solid #79792b;
  min-width: 40px;
  cursor: pointer;
`;

const Tr = styled.tr`
  &:nth-child(2n) {
    background-color: #79792b;
  }
`;

const ButtonsContainer = styled.div`
  max-width: 100%;
  width: 850px;
  height: fit-content;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: fit-content;
  height: 30px;
  padding: 0 15px;
  font-size: 17px;
`;

const sortData = (arr: IElementOfStatistic[], value: string, sortDirection: boolean): IElementOfStatistic[] => {
  const sortedArr = [...arr];
  sortedArr.sort((a, b) => {
    if (sortDirection) {
      return a[value] < b[value] ? -1 : 1;
    }
    return a[value] < b[value] ? 1 : -1;
  });

  return sortedArr;
};

export const Statistic = (): JSX.Element => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const gameStatistic = useSelector((store: IState) => store.statisticData);
  const sortDirection = useSelector((store: IState) => store.sortDirection);
  const sortByHeaderTable = useSelector((store: IState) => store.sortBy);

  const closeSideMenu = (value: boolean): void => {
    dispatch({ type: ACTIONS.CLOSE_SIDE_MENU, value });
  };

  useEffect(() => {
    closeSideMenu(false);
    const statisticDataFromLocalStorage = getStatisticDataFromLocalStorage();
    const statisticData = sortData(statisticDataFromLocalStorage, sortByHeaderTable, !sortDirection);
    dispatch({ type: ACTIONS.ADD_STATISTIC_DATA, statisticData });
  }, []);

  const sortByNameColumn = (value: string): void => {
    const sortBy = value;
    const statisticData = sortData(gameStatistic, sortBy, sortDirection);
    dispatch({ type: ACTIONS.ADD_STATISTIC_DATA, statisticData });
    dispatch({ type: ACTIONS.SORT_BY, sortBy });
    dispatch({ type: ACTIONS.SORT_DIRECTION });
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const goRepeatWord = (): void => {
    const sortedArr = sortData(gameStatistic, 'errorClick', false);
    const getEightCards = sortedArr.slice(0, 8);
    const filteredArr = getEightCards.filter((elem) => elem.errorClick !== 0);
    const repeatWords = getRepeatWordsData(filteredArr);
    if (repeatWords.length !== 0) {
      dispatch({ type: ACTIONS.ADD_REPEAT_WORDS, repeatWords });
    }
    history.push('/repeat-words');
  };

  return (
    <StatisticContainer onClick={(): void => closeSideMenu(false)}>
      {isModalOpen ? <ModalConfirmReset closeModal={closeModal} /> : null}
      <ButtonsContainer>
        <Button onClick={openModal}> Reset result</Button>
        <Button onClick={goRepeatWord}> Repeat difficult words</Button>
      </ButtonsContainer>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>№</Th>
              <Th onClick={(): void => sortByNameColumn('category')}>Category</Th>
              <Th onClick={(): void => sortByNameColumn('word')}>Word</Th>
              <Th onClick={(): void => sortByNameColumn('translation')}>Translation</Th>
              <Th onClick={(): void => sortByNameColumn('clickTrainMode')}>TrainClick</Th>
              <Th onClick={(): void => sortByNameColumn('clickGameMode')}>PlayClick</Th>
              <Th onClick={(): void => sortByNameColumn('errorClick')}>Error</Th>
              <Th onClick={(): void => sortByNameColumn('percents')}>Right %</Th>
            </Tr>
          </Thead>
          <tbody>
            {gameStatistic.map((elem, index) => {
              const currNumber = index + 1;
              return (
                <TableRow
                  key={elem.id}
                  currNumber={currNumber}
                  category={elem.category}
                  word={elem.word}
                  translation={elem.translation}
                  clickTrainMode={elem.clickTrainMode}
                  clickGameMode={elem.clickGameMode}
                  errorClick={elem.errorClick}
                  percentOfCorrectAnswer={elem.percents}
                />
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    </StatisticContainer>
  );
};
