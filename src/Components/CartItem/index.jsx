import { useContext } from "react";
import { TiPlus, TiMinus  } from "react-icons/ti";
import { MenuContext } from "../../Contexts/MenuContext";

console.log(window.screen.width)

export default function CartItem({name, description, value}) {

    const {setRemove} = useContext(MenuContext)

    return (
        <div className='w-5/6 h-1/4 bg-black_pormade border-2 border-light_green rounded-xl p-5 m-2 tablet:p- almostCellphone:border-none almostCellphone:w-11/12 almostCellphone:p-2 almostCellphone:h-1/5 almostCellphone:my-1'>
            <div className='flex justify-between h-full'>
                <div className='w-2/6 h-fullflex flex-col justify-between tablet:w-3/5 almostCellphone:w-5/12'>
                    <div className='w-full h-full flex flex-col '>
                        <h1 className='font-bold text-2xl border-b-2 border-b-light_green mb-1 tablet:text-xl almostCellphone:text-base almostCellphone:border-none'>{name}</h1>
                        <div className='flex flex-col justify-between w-full h-full'>
                            <p className='tablet:text-base almostCellphone:text-sm almostCellphone:text-grey_text'>{description}</p>
                            <button className='bg-red_button_cart text-white h-8 w-24 rounded-xl bg-red_button' onClick={() => setRemove(true)}>Excluir</button>
                        </div>
                    </div>
                </div>

                <div className=' h-full flex justify-center tablet:mr-4 almostCellphone:w-8/12 almostCellphone:ml-6'>
                    <div className='flex h-full w-full justify-center tablet:flex-col tablet:items-center tablet:justify-start almostCellphone:flex-row almostCellphone:justify-between almostCellphone:items-start almostCellphone:mt-1'>
                        <div className='mr-12 text-center flex flex-col tablet:mr-0'>
                            <h1 
                                className='mb-6 font-semibold text-2xl tablet:text-lg tablet:mb-1 almostCellphone:text-base almostCellphone:mb-5'
                                >{window.screen.width < 530? "Qtd:": "Quantidade"}
                            </h1>
                            <div className='flex justify-center items-center tablet:mb-2'>
                                <TiPlus className='w-8 h-8 text-white tablet:w-5 tablet:h-5 almostCellphone:w-4 almostCellphone:h-4'/>
                                <p className='px-4 py-1 rounded-lg border border-light_green bg-black font-semibold text-2xl tablet:px-2 tablet:py-0 tablet:mx-1 tablet:text-lg almostCellphone:text-base almostCellphone:border-none'>4</p>
                                <TiMinus className='w-8 h-8 text-white tablet:w-5 tablet:h-5 almostCellphone:w-4 almostCellphone:h-4'/>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='mb-8 font-semibold text-2xl tablet:text-lg tablet:mb-0.5 almostCellphone:text-base almostCellphone:mb-5'>{window.screen.width < 530? "Valor": "Valor Total"}</h1>
                            <h1 className='font-bold text-2xl almostCellphone:text-base tablet:text-lg tablet:text-center'>R${value}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}