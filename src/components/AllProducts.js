import { useState, useEffect, createContext } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";

function AllProducts() {

    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [showSingle, setShowSingle] = useState(false);
    const [singleProduct, setSingleProduct] = useState([]);


    //creating context
    const SingleProductContext = createContext(null);

    useEffect(() => {
        setLoading(true);
        axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
            .then((res) => {
                setProduct(res.data)
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, [])

const handleShow=(id)=>{
const singleProduct=product.filter((single)=>single.id===id);
setSingleProduct(singleProduct);
setShowSingle(true)
}

const closeShow=(value)=>{
    setSingleProduct(value)
}

    return (
        <>
        { !showSingle && (<div>
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
                                <button onClick={()=>handleShow(beuty.id)}>Preview</button>

                            </div>
                        )
                    })}
                </div></>
            )}

        </div>)}
        {showSingle &&(
            <SingleProduct singleProduct={singleProduct} closeShow={closeShow}/>
        )}
        </>
    )
}

export default AllProducts
