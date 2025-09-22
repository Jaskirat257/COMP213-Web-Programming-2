import "./App.css";
import Card from "./components/card";

function App() {

return(
<>
   <h1>Resorts Lite</h1>
   <div className="main-container"> 
    <Card
  image="src/assets/images/1.jpg"
  country="Seychelles"
  hotel="Mahé, Seychelles"
  rating={4.2}
  price={589}
/>
<Card
  image="src/assets/images/2.jpg"
  country="Indonesia"
  hotel="Bali, Indonesia"
  rating={4.8}
  price={829}
  sale={true}
/>
<Card
  image="src/assets/images/3.jpg"
  country="US Virgin Islands"
  hotel="St. Thomas, USVI"
  rating={3.5}
  price={485}
/>
<Card
  image="src/assets/images/4.jpg"
  country="Bahamas"
  hotel="Nassau, Bahamas"
  rating={4.5}
  price={721}
/>
<Card
  image="src/assets/images/5.jpg"
  country="Mauritius"
  hotel="Port Louis, Mauritius"
  rating={4.3}
  price={877}
/> 
<Card
  image="src/assets/images/6.jpg"
  country="Bermuda"
  hotel="Hamilton, Bermuda"
  rating={3.2}
  price={365}
/>



   </div>
</>
);

}
  
export default App;
