import cards from './cards';
import { ICards, IElementOfStatistic } from './create-local-storage';

const getRepeatWordsData = (filteredArr: IElementOfStatistic[]): ICards[] => {
  const repeatWords = [];
  for (let i = 0; i < cards.length; i += 1) {
    for (let j = 0; j < filteredArr.length; j += 1) {
      if (cards[i].translation === filteredArr[j].translation) {
        repeatWords.push(cards[i]);
      }
    }
  }
  return repeatWords;
};

export default getRepeatWordsData;
