import {SignUp,SignIn} from "../components/authorization/Sign-In-Up.jsx";
import React from "react";

const Authorization = ({}) =>{
    const [testState,setState] = React.useState(false)

    const handleAnimateTransition = () =>{
        const bg = document.getElementById("bg-authorization")
        !testState ? bg.style.backgroundColor = "#164e63" : bg.style.backgroundColor = "#0f766e"
        setTimeout(()=>{
            setState(!testState)
        },600)
    }
    return(
        <>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-teal-700 transition-colors duration-700"
                id={"bg-authorization"}
            >
                {testState ?
                    <SignUp SelectAuthorization={handleAnimateTransition}/>
                    :
                    <SignIn SelectAuthorization={handleAnimateTransition}/>
                }
            </div>
        </>
    )
}
export default Authorization