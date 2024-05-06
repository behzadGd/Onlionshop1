import React, { useContext } from "react";
import { ProductContext } from "../Libes/Context";
// import CardI from "./CardItem";
import CardItem from "./CardItem";
function Modal() {
   
  const {data}=useContext(ProductContext);
  // console.log('modalLOG',data)
  const nothing = {1:'1',
                  2:'2'
}
  return (
       
<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <div>
      {Object.entries(data.cardList || nothing ).map(([key,value])=>{
  
       return <CardItem {...value}/>
      })}
      {/* {Object.entries(data.cardList || {}).map(([key,value])=>{
        return <CardItem {...key}/>
      })} */}
    </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
      );
}

export default Modal;