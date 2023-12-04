import "../../index.css"
import { AiOutlineClose } from "react-icons/ai";
import CardHistoric from "../CardHistoric";
import { useContext } from "react";
import { MenuContext } from "../../Contexts/MenuContext";


const ModalHistoric = () => {

    const{historic, setHistoric} = useContext(MenuContext)

    const close = () => {
        setHistoric(false)
    }

    return (
        <>
        <div className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20 duration-200 justify-center items-center ${historic ? "flex" : "hidden"}`}>
                <div className="w-10/12 h-4/5 bg-black_modal rounded-3xl border-2 border-light_green tablet:h-5/6 almostCellphone:w-5/6">
                    <div className='w-full flex justify-end p-4'>
                        <AiOutlineClose
                            className='text-light_green w-8 h-8 cursor-pointer'
                            onClick={close}
                        />
                </div>
                <div className='w-full h-full flex flex-col items-center '>

                    <div className="flex flex-row justify-between flex-wrap w-5/6 h-5/6 almostCellphone:flex-col almostCellphone:flex-nowrap almostCellphone:w-full almostCellphone:px-2">

                    <CardHistoric />
                    <CardHistoric />
                    <CardHistoric />
                    <CardHistoric />
   
                    </div>

                </div>
                </div>
        </div>

        </>
    )
}


export default ModalHistoric