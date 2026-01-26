import Listing from './components/Listing';
import items from './data/etsy.json';

function App() {
  return (
    <div className="container">
      <Listing items={items} />
    </div>
  );
}

export default App;
