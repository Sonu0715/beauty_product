import React from 'react'

function SingleProduct({singleProduct,closeShow}) {
    return (
   
        <div style={{display:"flex"}}>
 

            {singleProduct?.map((single)=>{
return(<>
                <div className="product_image">
                    <img src={single.image_link} alt="img"/>
                </div>
                <div className="product_details">
                    <h2>{single.name}</h2>
                    <h3>{single.brand}</h3>
                    <p><span>Description: </span>{single.description}</p>
                    <div className="product_color">
                        {single.product_colors.map((colors)=>{
                            return(
                                <span style={{background:colors.hex_value,width:"50px",height:"50px",borderRadius:"50%",padding:"10px 20px",margin:"10px"}}>C</span>
                            )
                        })}
                    </div>
                    <div className="btn">
                        <button>Buy Now</button>
                        <button onClick={()=>window.location.reload()}>Back</button>
                    </div>
                </div>
                </>)
            })}
        </div>
       
    )
}

export default SingleProduct
