import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then((res) => {
        setProduct(res.data)
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [])



  return (


    <div className="App">
      {loading ? (<div style={{ display: "flex", justifyContent: "center" }}>
        <img src="/image/loader.gif" alt="Loading . . ." />
      </div>) : (<>
      <div className="search">
        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="product">
          {product.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).map((beuty) => {
            return (
              <div className="beauty">
                  <img src={`${beuty.image_link}`} alt="beauty pic" />
                  <p>{beuty.name}</p>
                  <p>price: Rs.{beuty.price}/-</p>

              </div>
              )
})}
</div></>
      )}
    </div>
  );
}

export default App;
