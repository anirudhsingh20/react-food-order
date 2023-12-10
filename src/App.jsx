import { useRef } from "react";
import Header from "./Components/Header";
import Items from "./Components/Items";
import Modal from "./Components/Modal";
import MealContextProvider from "./Store/meals-context";
import PlaceOrder from "./Components/PlaceOrder";
import Cart from "./Components/Cart";
function App() {
  const cartModalRef = useRef();
  const orderModalRef = useRef();

  function handleClick() {
    cartModalRef.current.open();
  }

  function openPlaceOrder() {
    cartModalRef.current.close();
    orderModalRef.current.open();
  }

  return (
    <MealContextProvider>
      <Header handleClick={handleClick} />
      <Items />
      <Modal ref={cartModalRef}>
        <Cart openPlaceOrder={openPlaceOrder} />
      </Modal>
      <Modal ref={orderModalRef}>
        <PlaceOrder  />
      </Modal>
    </MealContextProvider>
  );
}

export default App;
