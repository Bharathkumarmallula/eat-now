import React from "react";
import './Products.css';

export const Products = (props) => {
  const foodData = props.foodData;

  return (
    <div>
    <div className="row">
        {foodData.map(data =>  
        <div className="col-md-3" >
            <div class="card" style={{"width": "18rem"}}>
            <img class="card-img-top food-img" src={data.recipe.image} alt="Card image cap" />
            <div class="card-body">
            <center>
                <h5 class="card-title">{data.recipe.label}</h5>
                <p class="card-text">Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
                <a href="#" class="btn btn-primary">Buy</a>
                </center>
            </div>
            </div>
        </div>
        )}
    </div>
</div>
  );
};

export default Products;
