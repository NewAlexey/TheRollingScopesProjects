import { IElementOfStatistic, LOCAL_STORAGE_NAME } from './create-local-storage';

const getImgName = (audioSrc: string): string => audioSrc.split('/').reverse()[0].split('.')[0];
const getLocalStorageData = (): IElementOfStatistic[] => {
  const { localStorage } = window;
  let statisticData = {} as IElementOfStatistic[];
  statisticData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME) as string);

  return statisticData;
};

const updateStatisticDataTrainMode = (audioSrc: string, dataArr: IElementOfStatistic[]): IElementOfStatistic[] => dataArr.map((elem) => {
  if (elem.word === audioSrc) {
    const updatedValue = elem;
    updatedValue.clickTrainMode += 1;

    return updatedValue;
  }

  return elem;
});

const calcPercents = (clickGame: number, clickError: number): number => Math.round((clickGame / (clickError + clickGame)) * 100);

const updateStatisticDataGameMode = (
  audioSrc: string,
  dataArr: IElementOfStatistic[],
  isGuessed: boolean,
): IElementOfStatistic[] => {
  if (isGuessed) {
    return dataArr.map((elem) => {
      if (elem.word === audioSrc) {
        const updatedValue = elem;
        updatedValue.clickGameMode += 1;
        updatedValue.percents = calcPercents(updatedValue.clickGameMode, updatedValue.errorClick);

        return updatedValue;
      }

      return elem;
    });
  }
  return dataArr.map((elem) => {
    if (elem.word === audioSrc) {
      const updatedValue = elem;
      updatedValue.errorClick += 1;
      updatedValue.percents = calcPercents(updatedValue.clickGameMode, updatedValue.errorClick);

      return updatedValue;
    }

    return elem;
  });
};

const updateLocalStorage = (arr: IElementOfStatistic[]): void => {
  const { localStorage } = window;
  localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(arr));
};

export const updateTrainClick = (audioSrc: string): void => {
  updateLocalStorage(updateStatisticDataTrainMode(getImgName(audioSrc), getLocalStorageData()));
};

export const updateGameClick = (audioSrc: string, isGuessed: boolean): void => {
  updateLocalStorage(updateStatisticDataGameMode(getImgName(audioSrc), getLocalStorageData(), isGuessed));
};
