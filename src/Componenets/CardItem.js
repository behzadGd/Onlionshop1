import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Libes/Context";
function CardItem (value){
    const {data,dispatch}=useContext(ProductContext);
    const [count,setCount]=useState(value.count)

    useEffect(()=>{
        setCount(value.count)
    },[value.count])

    const handelRemoveItem=()=>{
        const {cardList}=data;
        delete cardList[value.id]
        dispatch({...cardList})
    }
// const tryCod =dispatch({cardList:{...cardList,[value.id]: {...cardList[value.id],count: val,},},});
//     console.log('valueid',cardList)
//     delete cardList[value.id];
    // console.log(tryCod)
    // console.log('cardlist',CardList);

    const handelDecreaseProductCount=(val)=>{
        const {cardList}=data;
        if(val===0){
            handelRemoveItem()
        }else{
            setCount(val);
            // dispatch({cardList:{...cardList,[value.id]:{...cardList[value.id],count:value}}})
               dispatch({cardList:{...cardList,[value.id]: {...cardList[value.id],count: val,},},});
        }
    }
    return(
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={value.image} alt='name'/></figure>
  <div className="card-body">
    <h2 className="card-title">{value.title}</h2>
    <p><span>price :{value.price}</span>{" "}
    <input type="number" value={count} onChange={(e)=>{
        // console.log('productnumber',e.target.value)
        handelDecreaseProductCount(parseInt(e.target.value))
    }}/></p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handelRemoveItem}>remove</button>
    </div>
  </div>
</div>
    )
}
export default CardItem;


// import { useContext, useEffect, useState } from "react";
// import { ProductContext } from "../Libes/Context";


// function CardItem(value) {
//   const { data, dispatch } = useContext(ProductContext);
//   const [count, setCount] = useState(value.count);

//   useEffect(() => {
//     setCount(value.count);
//   }, [value.count]);

// const handleRemoveItem=()=>{
//   const { cardList } = data;
//   delete cardList[value.id];
//   dispatch({ ...cardList });
// }

//   const handleDecreaseProductCount = (val) => {
//     const { cardList } = data;
//     if (val === 0) {
//       // handleRemoveItem()
//       // alert('vhehh')
//     } else {
//       setCount(val);
//       dispatch({cardList: {...cardList,[value.id]: {...cardList[value.id],count: val,},},});
//     }
//   };

//   return (
//     <div className="card card-side bg-base-100 shadow-xl">
//       <figure>
//         <img className="w-24 h-24" src={value.image} />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{value.title}</h2>
//         <p>
//           <span>price: {value.price}</span>{" "}
//           <input
//             type="number"
//             value={count}
//             onChange={(e) => {
//               handleDecreaseProductCount(parseInt(e.target.value));
//             }}
//           />
//         </p>
//         <div className="card-actions justify-end">
//           <button className="btn btn-primary" onClick={handleRemoveItem}>remove</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CardItem;