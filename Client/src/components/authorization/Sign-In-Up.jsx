import arrowImg from "./resource/arrow.svg"
import React from "react";
import "./animate.css"
import {RequestHandler} from "../../handlers/authorization-handler.js";

const SignUp = ({SelectAuthorization}) => {
    const [value,setValue] = React.useState({
        login:"",
        password:"",
        rePassword:""
    })
    const [fio,setFio] = React.useState({
        surname:"",
        name:"",
        patronymic:""
    })
    const [loading,setLoading] = React.useState(false)
    const HandlerInputs = (textInput,nameValue) =>{
        setValue({
            ...value,
            [nameValue]:textInput
        })
    }
    const animateTest =() =>{
        const card = document.getElementById("SignUpCard")
        setTimeout(()=>{
            card.style.transform = "translateX(0px)"
        },400)
    }
    React.useEffect(()=>{
        animateTest()
    },[])
    return (
        <>
            <div className="flex flex-col bg-white font-koulen min-w-96 h-3/4 p-10 justify-between rounded-3xl transition-transform ease-in-out duration-1000"
                style={{transform:"translateX(-100vw)"}}
                 id={"SignUpCard"}
            >
                <h1 className="text-36Font font-bold w-full text-center">SIGN UP</h1>
                <div className="flex flex-col gap-5 z-10" 
                    onMouseLeave={()=>{
                        const dropWindow = document.getElementById('DropInputs')
                        const surnameInput = document.getElementById("surnameInput")
                        const nameInput = document.getElementById("name")
                        const patronimycInput = document.getElementById("patronimyc")
                        dropWindow.style.maxHeight = "0px"
                        setTimeout(() => {
                            dropWindow.style.paddingBottom = "0px"
                            console.log(fio)
                            const value = `${fio.surname.replace(/[^а-яА-Яa-zA-Z]+/g, '')} ${fio.name.replace(/[^а-яА-Яa-zA-Z]+/g, '')} ${fio.patronymic.replace(/[^а-яА-Яa-zA-Z]+/g, '')}`;
                            surnameInput.value = value === "  " ? null : value
                            nameInput.value = null;
                            patronimycInput.value = null;
                        },600)

                    }}
                >
                    <div
                        className="authorization-input indent-0 bg-white relative "
                        onClick={()=>{
                            const dropWindow = document.getElementById('DropInputs')
                            dropWindow.style.maxHeight = "440px"
                            dropWindow.style.paddingBottom = "20px"
                        }}
                    >
                        <input
                            className="authorization-input z-20 relative focus:outline-none"
                            type="text"
                            id="surnameInput"
                            placeholder={'Фамилия'}
                            onFocus={(el) => {
                                el.target.placeholder = ''
                            }}
                            onBlur={(el) => {
                                el.target.placeholder = 'Фамилия'
                            }}
                            onInput={(el)=>{
                                setFio({
                                    ...fio,
                                    surname:el.target.value
                                })
                            }}
                        />

                        <div className="min-w-full max-h-0 overflow-hidden z-20 bg-inputs absolute px-4 -mt-3 rounded-b-2xl"
                            style={{transition:"max-height 1s linear"}}
                            id="DropInputs"
                        >
                            
                            <input
                            className="authorization-input bg-white my-5 z-10"
                            type="text"
                            id={"name"}
                            placeholder={'Имя'}
                            onFocus={(el) => {
                                el.target.placeholder = ''
                            }}
                            onBlur={(el) => {
                                el.target.placeholder = 'Имя'
                            }}
                            onInput={(el)=>{
                                setFio({
                                    ...fio,
                                    name:el.target.value
                                })
                            }}
                            />

                            <input
                            className="authorization-input bg-white"
                            type="text"
                            id="patronimyc"
                            placeholder={'Отчество'}
                            onFocus={(el) => {
                                el.target.placeholder = ''
                            }}
                            onBlur={(el) => {
                                el.target.placeholder = 'Отчество'
                            }}
                            onInput={(el)=>{
                                setFio({
                                    ...fio,
                                    patronymic:el.target.value
                                })
                            }}
                            />
                        </div>
                    </div>
                    
                    <input
                        className="authorization-input"
                        type="text"
                        placeholder={"Логин"}
                        value={value.login}
                        onFocus={(el) => {
                            el.target.placeholder = ''
                        }}
                        onBlur={(el) => {
                            el.target.placeholder = 'Логин'
                        }}
                        onInput={(el)=>{
                            HandlerInputs(el.target.value,"login")
                        }}
                    />
                    <input
                        className="authorization-input"
                        type="text"
                        value={value.password}
                        placeholder={'Пароль'}
                        onFocus={(el) => {
                            el.target.placeholder = ''
                        }}
                        onBlur={(el) => {
                            el.target.placeholder = 'Пароль'
                        }}
                        onInput={(el)=>{
                            HandlerInputs(el.target.value,"password")
                        }}
                    />
                    <input
                        className="authorization-input"
                        type="text"
                        value={value.rePassword}
                        placeholder={'Повтор пароля'}
                        onFocus={(el) => {
                            el.target.placeholder = ''
                        }}
                        onBlur={(el) => {
                            el.target.placeholder = 'Повтор пароля'
                        }}
                        onInput={(el)=>{
                            HandlerInputs(el.target.value,"rePassword")
                        }}
                    />
                </div>
                <button className="h-14 bg-black-button text-white rounded-2xl text-24Font"
                    onClick={() =>{
                        setLoading(true)
                        RequestHandler('post','/authorization/register',{
                            names:{
                            surname:fio.surname,name:fio.name,patronymic:fio.patronymic
                            },
                            login:value.login,
                            password:value.password
                        })
                    }}
                >{!loading ? "Регистрация" : "Загрузка"}</button>
            </div>
            <button style={{
                position: "absolute",
                right: "30px",
                animationName: "isShow",
                animationDuration: "0.7s",
                animationFillMode: "forwards"
            }}
                    className="opacity-0"
                    onClick={(el) => {
                        el.currentTarget.style.animationName = "isHidden";
                            const card = document.getElementById("SignUpCard")
                            card.style.transform = "translateX(-100vw)"
                            SelectAuthorization()
                        }}
                ><img className="hover:translate-x-2 transform transition-transform duration-500" src={arrowImg} alt=""/></button>
        </>
    )
}
const SignIn = ({SelectAuthorization}) => {
    const animateTest = () => {
        const card = document.getElementById("SignInCard")
        setTimeout(() => {
            card.style.transform = "translateX(0px)"
        }, 400)
    }
    React.useEffect(() => {
        animateTest()
    }, [])
    return (
        <>
            <div className="flex flex-col bg-white font-koulen min-w-96 h-3/4 p-10 justify-between rounded-3xl ease-in-out duration-1000"
                     style={{transform:"translateX(100vw)"}}
                     id={"SignInCard"}
                >
                    <h1 className="text-36Font font-bold w-full text-center">SIGN IN</h1>
                    <div className="flex flex-col gap-5 -mt-40">
                        <input
                            className="authorization-input"
                            type="text"
                            placeholder={"Логин"}
                            onFocus={(el) => {
                                el.target.placeholder = ''
                            }}
                            onBlur={(el) => {
                                el.target.placeholder = 'Логин'
                            }}
                        />
                        <input
                            className="authorization-input"
                            type="text"
                            placeholder={'Пароль'}
                            onFocus={(el) => {
                                el.target.placeholder = ''
                            }}
                            onBlur={(el) => {
                                el.target.placeholder = 'Пароль'
                            }}
                        />
                    </div>
                    <button className="h-14 bg-black-button text-white rounded-2xl text-24Font">Войти</button>
                </div>
                <button style={{position: "absolute", left: "30px",transform:"rotateZ(180deg)",animationName:"isShow",animationDuration:"0.7s",animationFillMode:"forwards"}}
                        className="opacity-0 "
                        onClick={(el) => {
                            el.currentTarget.style.animationName = "isHidden";
                            const card = document.getElementById("SignInCard")
                            card.style.transform = "translateX(100vw)"
                            SelectAuthorization()

                        }}
                ><img className="hover:translate-x-2 transform transition-transform duration-500" src={arrowImg} alt=""/></button>

        </>
    )
}

export {SignUp, SignIn}