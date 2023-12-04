import { FaSearch, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import ModalDelete from "../../ComponentsAdmin/ModalDelete/indes";
import { useContext, useState } from "react";
import { MenuContext } from "../../Contexts/MenuContext";
import { CgList } from "react-icons/cg";
import ModalEditUser from "../../ComponentsAdmin/ModalEditUser";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ItemTable from "../../Components/ItemTable(cellphone)";






export default function EditUser() {

    const {newUser, setNewUser} = useContext(MenuContext)
    const {deletar, setDeletar} = useContext(MenuContext)
    const [openEditModal, setOpenEditModal] = useState(false)


    return (
        <div className='w-screen h-screen flex flex-col items-center'>
            <div className='flex w-full h-14 justify-around mt-6 '>
                <button
                    className='text-white_pormade bg-light_green  hover:bg-green_button rounded-lg w-1/6 h-9 text-2xl flex justify-center items-center tablet:w-1/5 tablet:ml-8'
                    onClick={() => setNewUser(!newUser)}
                >
                    <div className='flex justify-center w-full items-center'>
                        <FaPlus className='text-white mr-4' />
                        <p>Cadastrar</p>
                    </div>
                </button>
                <div className='w-2/6 h-2/3 flex justify-evenly items-center bg-black_modal border-2 border-light_green rounded-md tablet:w-2/5'>
                    <input placeholder='Pesquisar...' className='w-10/12 h-full outline-none text-white bg-black_modal text-lg' />
                    <FaSearch className='w-6 h-6 text-light_green' />
                </div>
            </div>
            <div 
                className='w-10/12 bg-black h-5/6 border-2 border-light_green rounded-2xl flex flex-col justify-between tablet:ml-14 almostCellphone:ml-0 
                almostCellphone:w-11/12 almostCellphone:border-none almostCellphone:p-2 almostCellphone:justify-normal'
            >
                <table className='w-full text-center almostCellphone:hidden'>
                    <thead className='bg-light_green rounded-tl-lg rounded-tr-3xl'>
                        <tr>
                            <td className='rounded-tl-lg border-r-2 border-black text-bold text-2xl'>ID</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>Nome Completo</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>CPF</td>
                            <td className='rounded-tr-lg text-bold text-2xl'>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-r border-t border-b px-2 border-light_green text-xl'>01</td>
                            <td className='border border-light_green text-xl py-2'>adsdsa</td>
                            <td className='border border-light_green text-xl py-2'>adsdasd</td>
                            <td
                                className='border border-light_green text-xl py-2'
                            >
                                <div className='flex justify-between items-center mx-3'>
                                    <div className='flex justify-around w-2/6 items-center tablet:w-3/5 tablet:justify-between'>
                                        <CgList className='w-10 h-10'/>
                                        <ImPencil 
                                            className='w-8 h-8 cursor-pointer tablet:mr-1'
                                            onClick={() => setOpenEditModal(!openEditModal)}
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
                <div className=' justify-center mt-4 tablet:ml-16 flex items-center mb-10 almostCellphone:hidden'>
                    <IoIosArrowBack className='w-9 h-9 text-white_pormade cursor-pointer' />
                    <div>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>1</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>2</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>3</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>...</Link>
                        <Link className='text-4xl text-white_pormade hover:bg-green_pormade px-2'>9</Link>
                    </div>
                    <IoIosArrowForward className='w-9 h-9 text-white_pormade cursor-pointer' />
                </div>


                {/* Para mobile -> */}
                <div className='hidden justify-center p-2 almostCellphone:flex'>
                <button
                    className='text-white_pormade bg-light_green rounded-xl  h-10 text-2xl flex justify-center items-center w-full'
                    onClick={() => setNewUser(!newUser)}
                >
                    <div className='flex justify-center w-full items-center'>
                        <FaPlus className='text-white mr-4' />
                        <p>Cadastrar</p>
                    </div>
                </button>
                </div>
                <ItemTable secondRowItem={"Nome"} secondRowValue={"Usuário666"} openModalProp={openEditModal} setOpenModalProp={setOpenEditModal}/>
                <ItemTable secondRowItem={"Nome"} secondRowValue={"Usuário666"}/>
                <ItemTable secondRowItem={"Nome"} secondRowValue={"Usuário666"}/>
            </div>

            {/* Celular -> */}
            <div className=' justify-center hidden mt-2 items-center mb-2 almostCellphone:flex'>
                <IoIosArrowBack className='w-6 h-6 text-white_pormade cursor-pointer' />
                <div>
                    <Link className='text-2xl text-white_pormade hover:bg-green_pormade px-2'>1</Link>
                    <Link className='text-2xl text-white_pormade hover:bg-green_pormade px-2'>2</Link>
                    <Link className='text-2xl text-white_pormade hover:bg-green_pormade px-2'>3</Link>
                    <Link className='text-2xl text-white_pormade hover:bg-green_pormade px-2'>...</Link>
                    <Link className='text-2xl text-white_pormade hover:bg-green_pormade px-2'>9</Link>
                </div>
                <IoIosArrowForward className='w-6 h-6 text-white_pormade cursor-pointer' />
            </div>


            <ModalEditUser user={openEditModal} setUser={setOpenEditModal}/>
        </div>
    )
}