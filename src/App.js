import Home from "./Home";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useGlobalContext } from "./context";

function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;
