import axios from "axios";
import { useState } from "react";
import { Base_Url } from "../Libes/Constans";

function useAsync(url,mehtod="GET") {
   let[data,setData]=useState(undefined);
   let[loading,setLoading]=useState(false);
   let[error,setError]=useState(undefined);

   function getData(params){
    setLoading(true)
    axios({
        url:`${Base_Url}${url}${params}`,
        method:mehtod,
    }).then((res)=>{
        setLoading(false)
        setData(res)
    }).catch((err)=>{
        setError(err)
    })
   }
    return {data,getData,loading,error}
}

export default useAsync;