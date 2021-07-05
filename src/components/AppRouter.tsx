import { useSelector } from 'react-redux';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import { Game } from './Game';
import { SideMenu } from './SideMenu';
import { Main } from './Main/Main';
import { IState } from '../redux/reducers/AppReducer';
import { Statistic } from './Statistic/Statistic';
import { RepeatWords } from './RepeatWords/RepeatWords';

export const AppRouter = (): JSX.Element => {
  const isOpenSideMenu = useSelector((storeApp: IState) => storeApp.isOpenSideMenu);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/statistic">
            <Statistic />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/repeat-words">
            <RepeatWords />
          </Route>
        </Switch>
        <SideMenu menuOnScreen={isOpenSideMenu} />
      </BrowserRouter>
    </>
  );
};
