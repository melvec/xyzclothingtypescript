import React from 'react'

import { useParams } from "react-router-dom"




 export function  ProductDetails(){
     const {id} = useParams()
    return (
        <div>
          hi {id}
        </div>
    )
};

export default ProductDetails;


 