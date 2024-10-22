import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="w-11/12 m-auto">
      <Navbar></Navbar>
      <Main></Main>
    </div>
  );
}

export default App;
