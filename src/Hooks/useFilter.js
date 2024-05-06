import React from "react";
import { useSearchParams } from "react-router-dom";

export default function useFilter(){
const [search,setSearch]=useSearchParams();
                          // console.log(useSearchParams())
                          console.log(window.location.search)
const AND_SIGN ='&';
const EQUAL_SIGN = '=';
const Array_Seperator='+';

const parsUrl=(url)=>{
  if(!url) return{};
  return url
  ?.slice(1)
  ?.split(AND_SIGN)
  ?.reduce((acc,curr,index)=>{
    const seperated =curr?.split(EQUAL_SIGN);
    return{...acc,[seperated?.[0]]:seperated?.[1]?.split(Array_Seperator),}
  },{})
}
const stringfyUrl =(data)=>{
  // const data = parsUrl();
  return Object.entries(data).reduce((acc,curr,index)=>{
    const isAtEnd = index+1 === Object.keys(data)?.length;

    return acc+
    curr[0]+
    EQUAL_SIGN+
    curr[1]?.join(Array_Seperator)+
    (!isAtEnd?AND_SIGN:"")
  },'?')
}
const onChangeFilter =(name,value)=>{
 const url = window.location.search;
 const parsedUrl = parsUrl(url||'');

 if(value !== ''){
  parsedUrl[name]=[value]
 } else{
  delete parsedUrl[name]
 }
 setSearch(stringfyUrl(parsedUrl))

}

return{parsUrl,stringfyUrl,onChangeFilter}
}