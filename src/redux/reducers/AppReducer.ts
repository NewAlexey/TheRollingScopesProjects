import { ICards, IElementOfStatistic } from '../../utils/create-local-storage';
import { ACTIONS } from '../constants';

export interface IState {
  onTrainMode: boolean;
  isGameStart: boolean;
  isOpenSideMenu: boolean;
  rightAnswer: number[];
  wrongAnswer: number[];
  repeatWords: ICards[];
  statisticData: IElementOfStatistic[];
  sortBy: string;
  sortDirection: boolean;
}

interface IActionInterface {
  type: string;
  onTrainMode: boolean;
  isGameStart: boolean;
  isOpenSideMenu: boolean;
  rightAnswer: number[];
  wrongAnswer: number[];
  repeatWords: ICards[];
  statisticData: IElementOfStatistic[];
  sortBy: string;
  sortDirection: boolean;
}

const defaultState: IState = {
  onTrainMode: true,
  isGameStart: false,
  isOpenSideMenu: false,
  rightAnswer: [],
  wrongAnswer: [],
  repeatWords: [],
  statisticData: [],
  sortBy: 'section',
  sortDirection: true,
};

export function appReducer(state = defaultState, action: IActionInterface): IState {
  switch (action.type) {
    case ACTIONS.CHANGE_APP_TYPE: {
      return { ...state, onTrainMode: !state.onTrainMode };
    }
    case ACTIONS.CLICK_BURGER_MENU: {
      return { ...state, isOpenSideMenu: !state.isOpenSideMenu };
    }
    case ACTIONS.CLOSE_SIDE_MENU: {
      return { ...state, isOpenSideMenu: action.isOpenSideMenu };
    }
    case ACTIONS.IS_GAME_START: {
      return { ...state, isGameStart: action.isGameStart };
    }
    case ACTIONS.RIGHT_ANSWER: {
      const newRightAnswer = state.rightAnswer;
      newRightAnswer.push(1);
      return { ...state, rightAnswer: [...newRightAnswer] };
    }
    case ACTIONS.WRONG_ASNWER: {
      const newWrongAnswer = state.wrongAnswer;
      newWrongAnswer.push(1);
      return { ...state, wrongAnswer: [...newWrongAnswer] };
    }
    case ACTIONS.CLEAR_ANSWERS: {
      const clearRightAnswerArr = state.rightAnswer;
      clearRightAnswerArr.length = 0;
      const clearWrongAnswerArr = state.wrongAnswer;
      clearWrongAnswerArr.length = 0;
      return { ...state };
    }
    case ACTIONS.ADD_REPEAT_WORDS: {
      return { ...state, repeatWords: [...action.repeatWords] };
    }
    case ACTIONS.ADD_STATISTIC_DATA: {
      return { ...state, statisticData: [...action.statisticData] };
    }
    case ACTIONS.SORT_BY: {
      return { ...state, sortBy: action.sortBy };
    }
    case ACTIONS.SORT_DIRECTION: {
      return { ...state, sortDirection: !state.sortDirection };
    }
    default:
      return state;
  }
}
