import { CgList } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { ImPencil } from "react-icons/im";
import { MdDeleteForever } from "react-icons/md";
import { MenuContext } from "../../Contexts/MenuContext";
import { useContext, useState } from "react";
import ModalDelete from "../../ComponentsAdmin/ModalDelete/indes";
import ModalEditUser from "../../ComponentsAdmin/ModalEditUser";


export default function ItemTable({secondRowItem, secondRowValue}) {

    const {newUser, setNewUser} = useContext(MenuContext)
    const {deletar, setDeletar} = useContext(MenuContext)
    const [openEditModal, setOpenEditModal] = useState(false)



    return (
        <>
            <div className='w-full h-1/3 bg-black_pormade p-2 rounded-md hidden almostCellphone:flex almostCellphone:flex-col mb-2'>
                <div className='w-full flex justify-between items-center border-b-2 border-light_green mb-2'>
                    <h1 className='font-bold text-xl'>Nome do peão</h1>
                    <CgList className=' text-white w-8 h-8' />
                </div>
                <div className='w-full flex justify-between'>
                    <p className='font-semibold text-base mb-0.5'>ID</p>
                    <p className='font-semibold text-base mb-0.5'>01</p>
                </div>
                <div className='w-full flex justify-between'>
                    <p className='font-semibold text-base'>{secondRowItem}</p>
                    <p className='font-semibold text-base'>{secondRowValue}</p>
                </div>
                <div className='w-full h-2/5 flex justify-between items-center'>
                    <div className='flex '>
                        <CgList className='w-7 h-7 text-white mr-2' />
                        <ImPencil
                            className='w-6 h-6 text-white cursor-pointer tablet:mr-1'
                            onClick={() => setOpenEditModal(!openEditModal)}
                        />
                    </div>
                    <MdDeleteForever
                        className='w-7 h-7 text-red-700 cursor-pointer'
                        onClick={() => setDeletar(!deletar)}
                    />
                </div>
            </div>
            <ModalDelete word='usuário' />
            <ModalEditUser user={openEditModal} setUser={setOpenEditModal}/>
        </>
    )
}