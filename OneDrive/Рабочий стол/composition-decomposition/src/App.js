import Header from './components/Header/Header';
import NewsList from './components/News/NewsList';
import Search from './components/Search/Search';
import Banner from './components/Banner/Banner';
import Widget from './components/Widget/Widget';

function App() {
  return (
    <div className="app">
      <div className="block header">
        <Header />
      </div>

      <div className="block">
        <NewsList />
        <Search />
      </div>

      <div className="block">
        <Banner />
      </div>

      <div className="main">
        <div className="content">
          <div className="block">
            <p>Основной контент</p>
          </div>
        </div>

        <div className="sidebar">
          <div className="block">
            <Widget title="Погода">
              <p>+18°C</p>
            </Widget>
          </div>

          <div className="block">
            <Widget title="Посещаемое">
              <ul>
                <li>Недвижимость</li>
                <li>Маркет</li>
                <li>Авто</li>
              </ul>
            </Widget>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
