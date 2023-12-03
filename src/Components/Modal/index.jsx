import { AiOutlineClose } from "react-icons/ai";


export default function Modal ({isOpen, closeModal, children}) {
    if (isOpen) return (

            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black flex justify-center items-center">
                <div className="w-2/3 h-5/6 bg-black_modal rounded-3xl border-2 border-light_green">
                <div className='w-full h-2 flex justify-end p-2'>
                    <AiOutlineClose
                        className='text-light_green w-8 h-8 cursor-pointer'
                        onClick={closeModal}
                    />
                </div>
                <div className='w-full h-full flex flex-col items-center'>
                    {children}
                </div>
                </div>
            </div>
    )
    return null
}
