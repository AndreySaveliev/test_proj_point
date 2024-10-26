import "./App.css";
import PageOne from "./Components/PageOne/PageOne";
import PageThree from "./Components/PageThree/PageThree";
import PageTwo from "./Components/PageTwo/PageTwo";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="content">
        <PageOne />
        <PageTwo />
        <PageThree />
      </div>
    </div>
  );
}

export default App;
