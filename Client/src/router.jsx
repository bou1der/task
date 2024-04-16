import React from "react";
import {Route,Routes,Navigate,BrowserRouter} from "react-router-dom"
const Router = () =>{

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/authorization"}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router