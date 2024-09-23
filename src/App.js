import { useState } from "react";
import "./App.css";
import Products from "./Products/Products";


function App() {
  const YOUR_APP_ID='d98865eb';
  const YOUR_APP_KEY='cc8a3af564b9ce8d1ec776f57e333004';
  const [search, setSearch] = useState("");
  const [foodData, setFoodData]=useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${'biryani'}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`)
    .then(response=>response.json())
    .then(data=>setFoodData(data.hits)) 
  };

  return (
    <div>
      <h4 className="Apptitle">Food Recipe App</h4>
      <form action="" className="foodForm" onSubmit={submitHandler}>
        <input className="search-box" placeholder="search here.."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />{" "}
      
        <input type="submit" value="search" className="submit-btn"/>
      </form>
      {foodData.length>1 ? <Products foodData={foodData}/> : null}
    </div>
  );
}

export default App;
