import {useState,useEffect} from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then((res)=>setProduct(res.data))
    .catch((err)=>console.log(err))

  },[])
  
    return (

    <div className="App">
      {product.map((beuty)=>{
        return(
        <div className="beauty">
          <img src={`${beuty.image_link}`} alt="beauty pic"/>
          <p>{beuty.name}</p>
          <p>price: Rs.{beuty.price}/-</p>

          </div>
      )})}
    </div>
  );
}

export default App;
