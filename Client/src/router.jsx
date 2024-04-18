import React from "react";
import {Route,Routes,Navigate,BrowserRouter} from "react-router-dom"

// Elements
import Authorization from "./routes/authorization";
const Router = () =>{
    const [isAuth,setAuth] = React.useState(false)

    React.useEffect(()=>{
        setAuth(localStorage.getItem('access'))
    },[])

    if (isAuth){
        return(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path={"/main"} element={<h1>УРА УРА ВХОД</h1>} />
                        <Route path={"*"} element={<Navigate to={"/main"} />}></Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }else {
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
}
export default Router