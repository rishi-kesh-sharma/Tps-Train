import "./App.css";
import Train from "./components/Train";
import Bottom from "./components/Bottom";

function App() {
  return (
    <div className="App grid grid-cols-1 gap-[1rem]">
      <Train />

      <Bottom />
    </div>
  );
}

export default App;
