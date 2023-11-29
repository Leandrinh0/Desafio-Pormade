import { useState, useContext } from "react"
import "../../index.css"
import image from "../../assets/images/seta.png"
import { MenuContext } from "../../Contexts/MenuContext"

const MenuLateral = () => {

    const {show, setShow} = useContext(MenuContext)

    const close = () => {
        setShow(false)
    }

    return (
        <aside className={`h-full bg-black_modal fixed top-0 left-0 overflow-hidden border-x-4 border-solid border-light_green duration-200 block ${show ? 'w-1/4' : "w-0"}`}>
            <div className="w-full h-24  ">
                <img src={image }className="w-14 ml-24 hover:cursor-pointer hover:w-16" onClick={close}/>
            </div>
        <button className="w-3/5 h-16 bg-light_green ml-32 rounded-lg font-bold text-2xl text-white mb-5 hover:bg-green_button">Usuários</button>
        <button className="w-3/5 h-16 bg-light_green ml-32 rounded-lg font-bold text-2xl text-white hover:bg-green_button">Produtos</button>

        </aside>
    )
}

export default MenuLateral