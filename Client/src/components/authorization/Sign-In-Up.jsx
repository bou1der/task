import arrowImg from "./resource/arrow.svg"
import React from "react";
import "./animate.css"

const SignUp = ({SelectAuthorization}) => {
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
                <div className="flex flex-col gap-5">
                    <div
                        className="authorization-input"
                    ></div>
                    {/*<input*/}
                    {/*    className="authorization-input"*/}
                    {/*    type="text"*/}
                    {/*    placeholder={'ФИО'}*/}
                    {/*    onFocus={(el) => {*/}
                    {/*        el.target.placeholder = ''*/}
                    {/*    }}*/}
                    {/*    onBlur={(el) => {*/}
                    {/*        el.target.placeholder = 'ФИО'*/}
                    {/*    }}*/}
                    {/*/>*/}
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
                    <input
                        className="authorization-input"
                        type="text"
                        placeholder={'Повтор пароля'}
                        onFocus={(el) => {
                            el.target.placeholder = ''
                        }}
                        onBlur={(el) => {
                            el.target.placeholder = 'Повтор пароля'
                        }}
                    />
                </div>
                <button className="h-14 bg-black-button text-white rounded-2xl text-24Font">Войти</button>
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