import { Navigate, useNavigate } from "react-router-dom";


function ProductComponenet({price,image,decsraption,title,id}) {
  const navigateMe =useNavigate()
    return ( 
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-3 border-black border-4 flex-col justify-center">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{decsraption}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>{
        navigateMe(`${id}`)
      }}>{price}</button>
      
    </div>
  </div>
</div>
     );
}

export default ProductComponenet;