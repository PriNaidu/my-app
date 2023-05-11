import "./App.css";
import Greet from "./Components/Greet";
import Class from "./Components/Class";
function App() {
  return (
    <div className="App">
      <h1>Functional Components example</h1>
      <Greet name="Priyanka" heroName="Wonder WoMan">
        <p>Hello this is priyanka.</p>
      </Greet>
      <Greet name="Sarvesh" heroName="Bat Man">
        <button>Click me</button>
      </Greet>
      <Greet name="Aniket" heroName="Rod Man">
        <div>
          <p>This is a paragraph</p>
          <span>Span tooo</span>
          <button>And a button also</button>
        </div>
      </Greet>
      <h1>Class Components examples</h1>
      <Class name="Priyanka" heroName="Wonder WoMan">
        Hello
      </Class>
      <Class name="Sarvesh" heroName="Iron Man" />
      <Class name="Aniket" heroName="Pagal Man"/>

    </div>
  );
}

export default App;
