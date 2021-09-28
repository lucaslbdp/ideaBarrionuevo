import Header from './components/common/Header';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import "../src/styles/App.css";

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}

export default App;
