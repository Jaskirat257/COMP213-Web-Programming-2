import "./App.css";
import Clicker from "./Components/Clicker";
import ClickerWithProps from "./Components/ClickerWithProps";  
import EmptyForm from "./Components/Emptyform";
import ListingContainer from "./Components/ListingContainer";
import data from "./data/data";


function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <ListingContainer items={data} />
      <br />
      <Clicker />
       <EmptyForm />
       <ClickerWithProps
        message="This is a prop"
        btnText="Click me to display message"
      />
      <ClickerWithProps
        message= {" This is another message for another clicker component"}
        btnText= {"Clicker 2"}
      />
      
    </>
  );
}

export default App;
