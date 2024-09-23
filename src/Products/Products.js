import React from "react";
import './Products.css';

export const Products = (props) => {
  const foodData = props.foodData;

  return (

    <div className="food-box">
        {foodData.map(data =>  
            <div className="food-card">
            <img src={data.recipe.image} alt="Card image cap" className="food-img" />
            <div >
            <center>
                <h5 >{data.recipe.label}</h5>
                <p >Total Amount Of Calories : {Math.round(data.recipe.calories)}</p>
               <p> <a href="#" className="buy-btn">Buy</a> <a href="" className="buy-btn">Add to cart</a></p>
                </center>
            </div>
            
        </div>
        )}
    </div>

  );
};

export default Products;
