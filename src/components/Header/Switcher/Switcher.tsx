import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { ACTIONS } from '../../../redux/constants';
import { Span } from './Span';
import { IState } from '../../../redux/reducers/AppReducer';
import './style.scss';

const SwitcherContainer = styled.div`
  margin-bottom: 18px;
`;

export const Switcher = (): JSX.Element => {
  const onTrainMode = useSelector((store: IState) => store.onTrainMode);

  const dispatch = useDispatch();
  const changeAppType = (): void => {
    dispatch({ type: ACTIONS.CHANGE_APP_TYPE });
    const isGameStart = false;
    dispatch({ type: ACTIONS.IS_GAME_START, isGameStart });
  };

  return (
    <SwitcherContainer>
      <Span gameMode={onTrainMode} text={onTrainMode ? 'TRAIN' : 'GAME'} />
      <input type="checkbox" id="toggle" onChange={changeAppType} />
      <label htmlFor="toggle"> </label>
    </SwitcherContainer>
  );
};
