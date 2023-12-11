import { FaSearch, FaPlus } from "react-icons/fa";
import { MdDeleteForever, MdOutlineAdminPanelSettings } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import '../../index.css'
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../Contexts/MenuContext";
import { CgList } from "react-icons/cg";
import ModalEditUser from "../../ComponentsAdmin/ModalEditUser";
import { useParams } from "react-router-dom";
import ItemTable from "../../Components/ItemTable(cellphone)";
import api from "../../http/api";
import { AuthenticateContext } from "../../Contexts/Authenticate";
import ModalNewUser from "../../ComponentsAdmin/ModalNewUser";
import Pagination from "../../Components/pagination";
import PaginationMobile from "../../Components/paginationMobile";
import ProtectedComponent from "../ProtectedComponent";







export default function EditUser() {

    const {newUser, setNewUser} = useContext(MenuContext)
    const [userData, setUserData] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const {deletar, setDeletar} = useContext(MenuContext)
    const [openEditModal, setOpenEditModal] = useState(false)
    const {user} = useContext(AuthenticateContext)
    const params = useParams()
    const convertedParams = parseInt(params.id)
    const [search, setSearch] = useState('')

    const fetchData = (async() => {
        await api.post(`pessoas/lista/?pagina=${parseInt(params.id)-1}&&itens=8`,{
            cpf:user.cpf
        })
        .then(response => setUserData(response.data.persons))

        await api.post(`pessoas/lista`, {
            cpf: user.cpf
        })
        .then((response) => setAllUsers(response.data.persons))
    })
    
    useEffect(() => {
        fetchData()
    }, [])

    const [editName, setEditName] = useState('')
    const [editCpf, setEditCpf] = useState('')
    const [editAdmin, setEditAdmin] = useState(false)


    function AddInfoEditForm(item) {
        setEditName(item.name)
        setEditCpf(item.cpf)
        setEditAdmin(item.admin)

        setOpenEditModal(!openEditModal)

    }

    const lowerSearch = search.toLowerCase()
    const filterUser = userData.filter((user) => user.name.toLowerCase().startsWith(lowerSearch))

    if(user.admin) return (
        <div className='w-full h-full flex flex-col items-center'>
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
                    <input 
                        placeholder='Pesquisar...' 
                        className='w-10/12 h-full outline-none text-white bg-black_modal text-lg' 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className='w-6 h-6 text-light_green' />
                </div>
            </div>
            <div 
                className='w-10/12 bg-black h-5/6 border-2 border-light_green rounded-2xl flex flex-col justify-between tablet:ml-14 almostCellphone:ml-0 
                almostCellphone:w-11/12 almostCellphone:border-none almostCellphone:p-2 almostCellphone:justify-start almostCellphone:h-full'
            >
                <table className='w-full text-center mb-48 almostCellphone:hidden'>
                    <thead className='bg-light_green rounded-tl-lg rounded-tr-3xl'>
                        <tr>
                            <td className='rounded-tl-lg border-r-2 border-black text-bold text-2xl'>ID</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>Nome Completo</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>CPF</td>
                            <td className='rounded-tr-lg text-bold text-2xl'>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {filterUser.map((item, index) => {
                                return(
                                    <tr>
                                    <td className='border-r border-t border-b px-2 border-light_green text-xl'>{index+1}</td>
                            <td 
                                className='border border-light_green text-xl py-2'
                                >
                                <div className='flex items-center justify-between px-2 h-2'>
                                {item.name}
                                <MdOutlineAdminPanelSettings className={`w-10 h-10 text-yellow my-3 cursor-pointer ${item.admin? "" : "hidden"}`} />
                                </div>
                            </td>
                            <td className='border border-light_green text-xl py-2'>{item.cpf}</td>
                            <td
                                className='border border-light_green text-xl py-2'
                            >
                                <div className='flex justify-between items-center mx-3'>
                                    <div className='flex justify-around w-2/6 items-center tablet:w-3/5 tablet:justify-between'>
                                        <CgList className='w-10 h-10'/>
                                        <ImPencil 
                                            className='w-8 h-8 cursor-pointer tablet:mr-1'
                                            onClick={() => AddInfoEditForm(item)}
                                        />
                                    </div>
                                    <MdDeleteForever 
                                        className='w-10 h-10 text-red-700 cursor-pointer'
                                        onClick={() => setDeletar(!deletar)}
                                    />
                                </div>
                            </td>
                            </tr>
                                )
                            })}
                        
                    </tbody>
                </table>
                <Pagination
                    convertedParams={convertedParams} params={params} 
                    fetchData={fetchData} 
                    ItemData={userData} setItemData={setUserData} 
                    allItems={allUsers} setAllItems={setAllUsers}
                    urlNavigate={"editarUsuarios"} urlRequest={"pessoas"}
                />


                {/* Para mobile -> */}
                <div className='hidden justify-center p-2 almostCellphone:flex almostCellphone:h-10/12'>
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
                {userData.map((item) => {
                    return <ItemTable secondRowItem={"CPF"} secondRowValue={"Usuário666"} 
                                openModalProp={openEditModal} setOpenModalProp={setOpenEditModal}
                                id={item.id}
                                name={item.name}
                                cpf={item.cpf}

                            />
                })}
            </div>

            {/* Celular -> */}
            <PaginationMobile 
                convertedParams={convertedParams} params={params} 
                fetchData={fetchData} 
                ItemData={userData} setItemData={setUserData} 
                allItems={allUsers} setAllItems={setAllUsers}
                urlNavigate={"editarUsuarios"} urlRequest={"pessoas"}
            />


            <ModalEditUser 
                modal={openEditModal} setModal={setOpenEditModal}
                name={editName} setName={setEditName} 
                cpf={editCpf} setCpf={setEditCpf} 
                admin={editAdmin} setAdmin={setEditAdmin}
                fetchData={fetchData}
            
            
            />
            <ModalNewUser fetchData={fetchData}/>

        </div>
    )

    return <ProtectedComponent/>
}