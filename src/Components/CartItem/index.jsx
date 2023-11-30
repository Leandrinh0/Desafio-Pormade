import { TiPlus, TiMinus  } from "react-icons/ti";


export default function CartItem() {
    return (
        <div className='w-5/6 h-1/4 bg-black_pormade border-2 border-light_green rounded-xl p-5 m-2'>

            <div className='flex justify-between h-full'>
                <div className='w-2/6 h-fullflex flex-col justify-between'>
                    <div className='w-full h-full flex flex-col '>
                        <h1 className='font-bold text-2xl border-b-2 border-b-light_green mb-1'>Product Name</h1>
                        <div className='flex flex-col justify-between w-full h-full'>
                            <p className=''>Descricao</p>
                            <button className='bg-red_button_cart text-white h-8 w-24 rounded-xl hover:bg-red_button'>Excluir</button>
                        </div>
                    </div>
                </div>

                <div className=' w- full h-full flex justify-center'>
                    <div className='flex h-full w-full justify-center '>
                        <div className='mr-12 text-center'>
                            <h1 className='mb-6 font-semibold text-2xl'>Quantidade</h1>
                            <div className='flex justify-center items-center'>
                                <TiPlus className='w-8 h-8 text-white'/>
                                <p className='px-4 py-1 rounded-lg border border-light_green bg-black font-semibold text-2xl'>4</p>
                                <TiMinus className='w-8 h-8 text-white'/>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className='mb-8 font-semibold text-2xl'>Valor Total</h1>
                            <h1 className='font-semibold text-2xl'>R$97,00</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}