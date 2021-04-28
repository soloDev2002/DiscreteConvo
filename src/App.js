import ChildNavigationBar from "./componenets/ChildNavigationBar";
import Form from "./componenets/Form";
import Header from "./componenets/Header";
import ParentNavigationBar from "./componenets/ParentNavigationBar";
function App() {
  return (
    <div className="App">
      <Header />
      <ParentNavigationBar />
      <ChildNavigationBar />
      <Form />
    </div>
  );
}

export default App;
