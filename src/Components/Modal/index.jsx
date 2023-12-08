import { AiOutlineClose } from "react-icons/ai";

export default function Modal ({isOpen, closeModal, children}) {
    if (isOpen) return (

            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black flex justify-center items-center">
                <div className="w-2/3 h-5/6 bg-black_modal rounded-3xl border-2 border-light_green almostCellphone:w-11/12">
                <div className='w-full h-2 flex justify-end p-2 almostCellphone:mb-5'>
                    <AiOutlineClose
                        className='text-light_green w-8 h-8 cursor-pointer'
                        onClick={closeModal}
                    />
                </div>
                <div className='h-full pt-3 flex flex-col items-center
                    tablet:pb-0 tablet:pt-5
                    almostCellphone:pt-0 almostCellphone:pb-8
                '
                >
                    {children}
                </div>
                </div>
            </div>
    )
    return null
}
