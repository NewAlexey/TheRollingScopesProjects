import { Provider } from 'react-redux';
import { AppRouter } from './components/AppRouter';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { store } from './redux/store';

function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <Header />
        <AppRouter />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
