import NavBar from './components/common/NavBar';
import CartContext from "./context/Context";
import "../src/styles/App.css";
import Cart from './components/items/Cart';

function App() {
  return (
    <CartContext>
      <NavBar />
      <Cart />
    </CartContext>
  );
}

export default App;
