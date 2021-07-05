import cards from './cards';

export const LOCAL_STORAGE_NAME = 'NewAlexeyStatisticEnglishForKids';

interface IKey {
  [key: string]: string | number;
}

export interface IElementOfStatistic extends IKey {
  category: string;
  word: string;
  translation: string;
  id: number;
  clickTrainMode: number;
  clickGameMode: number;
  errorClick: number;
  percents: number;
}

export interface ICards {
  category: string;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

export const createStatisticData = (arr: ICards[]): IElementOfStatistic[] => arr.map((elem, index) => {
  const elementOfStatistic = {} as IElementOfStatistic;
  elementOfStatistic.category = elem.category;
  elementOfStatistic.id = index;
  elementOfStatistic.translation = elem.translation;
  elementOfStatistic.word = elem.word;
  elementOfStatistic.clickGameMode = 0;
  elementOfStatistic.clickTrainMode = 0;
  elementOfStatistic.errorClick = 0;
  elementOfStatistic.percents = 0;

  return elementOfStatistic;
});

export const createStatisticInLocalStorage = (): void => {
  const { localStorage } = window;
  const statistic = localStorage.getItem(LOCAL_STORAGE_NAME);
  if (!statistic) {
    const statisticData = createStatisticData(cards);
    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(statisticData));
  }
};

export const clearStatisticInLocalStorage = (): void => {
  const { localStorage } = window;
  const statisticData = createStatisticData(cards);
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(statisticData));
};

export const getStatisticDataFromLocalStorage = (): IElementOfStatistic[] => {
  const statisticDataJSON = window.localStorage.getItem(LOCAL_STORAGE_NAME) as string;
  const statisticData = JSON.parse(statisticDataJSON) as IElementOfStatistic[];

  return statisticData;
};
