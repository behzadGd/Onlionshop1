import React from "react";
export default function AsyncHOC({data,loading,children,LoadingComponenet}){
    if(loading)return <LoadingComponenet/>
    return <>
    {children}
    </>
}
