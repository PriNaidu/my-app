import "./App.css";
import Greet from "./Components/Greet";
import Class from "./Components/Class";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import Users from "./Components/Users";
import Carousel from "./Components/Carousel";
import CustomCarousel from "./Components/CustomCarousel";
import ModalOpen from "./Components/ModalOpen";
// import DragAndDrop from "./Components/DragAndDrop";
import Button from "./Components/Button";
function App() {
  return (
    <div className="App">     
     {/* <DragAndDrop /> */}
     {/* <Greet/> */}
     {/* <Button/> */}
     {/* <Button>Click me!</Button> */}
     <ModalOpen/>     
    </div>
  );
}

export default App;
