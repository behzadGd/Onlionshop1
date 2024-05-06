import react, { useState } from "react";
import LoginForm from "../Componenets/LoginForm";
import RejesterForm from "../Componenets/RejesterForm";
function LoginPage(){
    const[tab,setTab]=useState('login');

    return(
        <div className="flex flex-col items-center">
            <div className="my-5">
                <button className="border-solid border-black border-2 w-20" onClick={(e)=>{
                    setTab('login')
                }}>Login</button>
                <button className="border-solid border-yellow-800 border-2 w-20 ml-2" onClick={(e)=>{
                    setTab('rejester')
                }}>Rejester</button>
            </div>
            <div className="border-solid border-yellow-950 border-4 w-80 h-80 flex justify-center items-center">
                {tab === 'login'?<LoginForm/>:<RejesterForm/>}
            </div>
        </div>
    )
}
export default LoginPage;