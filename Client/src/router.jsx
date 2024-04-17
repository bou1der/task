import React from "react";
import {Route,Routes,Navigate,BrowserRouter} from "react-router-dom"

// Elements
import Authorization from "./routes/authorization";
const Router = () =>{

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/authorization"} element={<Authorization/>} />
                    <Route path={"*"} element={<Navigate to={"/authorization"} />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router