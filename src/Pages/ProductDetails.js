import React, { useContext, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import useAsync from "../Hooks/useAsync";
import AsyncHOC from "../HOC/AsyncHOC";
import { ProductContext } from "../Libes/Context";
function ProductDetials() {
    const{productId}=useParams()
    // console.log(productId);
    // console.log(location);
    const location = useLocation()
    const {data,getData,loading,error}=useAsync(`products/${productId}`)
    // const data2=useContext(ProductContext);
    // console.log('product detils',data2)
    const {data:productData,dispatch}=useContext(ProductContext);
    useEffect(()=>{
        getData('')
    },[])

    const LoadingComponenet = () => {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  };

                          // console.log('this is handel ',productData.cardList[data?.data?.id])
  const handelAddToCard=()=>{
    if(productData.cardList[data?.data?.id]){
      dispatch({
        cardList:{
          ...productData.cardList,[data?.data?.id]:{
            ...productData.cardList[data?.data?.id],
            count:productData.cardList[data?.data?.id].count+1 || 0
          }
        }
      })
    }else{
      dispatch({
        cardList:{
          ...productData.cardList,[data?.data?.id]:{
            ...data?.data,
          count :1
          }
        }
      })
    }
  }


const Rating = ({ratingNum}) => {
    const ratingList = Array.from(Array(5));
    return (<div className="rating">
        {ratingList.map((item,index) => {
          // console.log(index);
          return (<input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked={index+1 === parseInt(ratingNum)?true:false}/>);})}</div>);};
   
   
                              // console.log('productData',productData)
   
          return (
        <div>
            <AsyncHOC loading={loading} LoadingComponenet={LoadingComponenet} data={data}>
            <img className="w-48 m-4 border-solid border-4 border-yellow-400" src={data?.data?.image}/>
            {/* <checkRate myRate={data?.data?.rating?.rate}/> */}
            <Rating ratingNum={data?.data?.rating?.rate} />
            <p>{data?.data?.description}</p>
            <h1 className="font-extrabold text-black ml-5"> Price : {data?.data?.price} $</h1>
            <button className="btn btn-primary my-2" onClick={()=>{
             handelAddToCard()
            }}>Buy NoW!!!!</button>
            </AsyncHOC>
        </div>
    )
}


export default ProductDetials;








