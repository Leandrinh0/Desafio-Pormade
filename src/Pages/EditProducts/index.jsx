import { FaSearch, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import ModalDelete from "../../ComponentsAdmin/ModalDelete/indes";
import { useContext, useState } from "react";
import ModalEditUser from "../../ComponentsAdmin/ModalNewUser";
import { MenuContext } from "../../Contexts/MenuContext";
import { CgList } from "react-icons/cg";
import ModalEditProducts from "../../ComponentsAdmin/ModalEditProducts";






export default function EditProducts() {

    const {newUser, setNewUser} = useContext(MenuContext)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const {deletar, setDeletar} = useContext(MenuContext)
    const {newProduct, setNewProduct} = useContext(MenuContext)
    const [openEditForm, setOpenEditForm] = useState(false)

    return (
        <div className='w-screen h-screen flex flex-col items-center'>
            <div className='flex w-full h-14 justify-between mt-6'>
                <button
                    className='text-white_pormade bg-light_green rounded-lg w-1/6 h-9 text-2xl flex justify-center ml-36'
                    onClick={() => setNewProduct(!newProduct)}
                >
                    <div className='flex justify-center w-full items-center'>
                        <FaPlus className='text-white mr-4' />
                        <p>Cadastrar</p>
                    </div>
                </button>
                <div className='w-2/6 h-2/3 flex justify-evenly items-center bg-black_modal border-2 border-light_green rounded-md'>
                    <input placeholder='Pesquisar...' className='w-10/12 h-full outline-none text-white bg-black_modal text-lg' />
                    <FaSearch className='w-6 h-6 text-light_green' />
                </div>
            </div>
            <div className='w-10/12 bg-black h-5/6 border-2 border-light_green rounded-2xl'>
                <table className='w-full text-center'>
                    <thead className='bg-light_green rounded-tl-lg rounded-tr-3xl'>
                        <tr>
                            <td className='rounded-tl-lg border-r-2 border-black text-bold text-2xl'>ID</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>Produto</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>Preço</td>
                            <td className='rounded-tr-lg text-bold text-2xl'>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-r border-t border-b border-light_green text-2xl'>Iaasdasd</td>
                            <td className='border border-light_green text-2xl py-2'>adsdsa</td>
                            <td className='border border-light_green text-2xl py-2'>adsdasd</td>
                            <td
                                className='border border-light_green text-2xl py-2'
                            >
                                <div className='flex justify-between items-center mx-3'>
                                    <div className='flex justify-around w-2/6 items-center'>
                                        <CgList className='w-10 h-10'/>
                                        <ImPencil
                                            onClick={() => setOpenEditForm(!openEditForm)} 
                                            className='w-8 h-8 cursor-pointer'
                                        />
                                    </div>
                                    <MdDeleteForever 
                                        className='w-10 h-10 text-red-700 cursor-pointer'
                                        onClick={() => setDeletar(!deletar)}
                                    />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ModalDelete word='produto'/>
            <ModalEditProducts newProduct={openEditForm} setNewProduct={setOpenEditForm}/>
            
        </div>
    )
}