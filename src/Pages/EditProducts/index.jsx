import { FaSearch, FaPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { ImPencil } from "react-icons/im";
import ModalDelete from "../../ComponentsAdmin/ModalDelete/indes";
import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../../Contexts/MenuContext";
import { CgList } from "react-icons/cg";
import ModalEditProducts from "../../ComponentsAdmin/ModalEditProducts";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import ItemTable from "../../Components/ItemTable(cellphone)";
import api from "../../http/api";






export default function EditProducts() {


    const { deletar, setDeletar } = useContext(MenuContext)
    const { newProduct, setNewProduct } = useContext(MenuContext)
    const [openEditForm, setOpenEditForm] = useState(false)
    const params = useParams()
    const [allProduts, setAllProducts] = useState([])

    const [productData, setProductData] = useState([])
    const navigate = useNavigate()

    const fetchData = (async() => {
        await api.get(`/produtos/lista?pagina=${params.id-1}&&itens=8`)
            .then(response => setProductData(response.data.products))
            
        await api.get('/produtos/lista')
        .then(response => setAllProducts(response.data.products))
    })

    useEffect(() => {
        fetchData()
    }, [])

    const convertedParams = parseInt(params.id)
    const [firstNav, setFirstNav] = useState(convertedParams)
    const [secondNav, setSecondNav] = useState(convertedParams+1)
    const [thirdNav, setThirdNav] = useState(convertedParams+2)
    const lastPage = Math.round(allProduts.length/8)

    const nextPage = () => {
        if (parseInt(params.id) < Math.round(allProduts.length/8)) {
            navigate(`/editarProdutos/${convertedParams+1}`)
            api.get(`/produtos/lista?pagina=${(convertedParams)}&&itens=8`)
            .then(response => setProductData(response.data.products))
            .then(setFirstNav(convertedParams+1), setSecondNav(convertedParams+2), setThirdNav(convertedParams+3))
        }
    }

    const previousPage = () => {
        if (parseInt(params.id) > 1) {
            navigate(`/editarProdutos/${convertedParams-1}`)
            api.get(`/produtos/lista?pagina=${(convertedParams-2)}&&itens=8`)
            .then(response => setProductData(response.data.products))
            .then(setFirstNav(convertedParams-1), setSecondNav(convertedParams), setThirdNav(convertedParams+1))
        }
    }
    const NavigateLastPage = () => {
        if(convertedParams !== lastPage){
            navigate(`/editarProdutos/${lastPage}`)
            api.get(`/produtos/lista?pagina=${(convertedParams+lastPage-2)}&&itens=8`)
            .then(response => setProductData(response.data.products))
            .then(setFirstNav(convertedParams+(lastPage - 1)), setSecondNav(convertedParams+lastPage), setThirdNav(convertedParams+lastPage))
        }

    }


    const [editName, setEditName] = useState('')
    const [editValue, setEditValue] = useState('')
    const [editDescription, setEditDescription] = useState('')

    function AddInfoEditForm(item) {
        setOpenEditForm(!openEditForm)
        setEditName(item.name)
        setEditValue(item.value)
        setEditDescription(item.description)
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center'>
            <div className='flex w-full h-14 justify-around mt-6 '>
                <button
                    className='text-white_pormade bg-light_green  hover:bg-green_button rounded-lg w-1/6 h-9 text-2xl flex justify-center items-center tablet:w-1/5 tablet:ml-8'
                    onClick={() => setNewProduct(!newProduct)}
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
            <div className='w-10/12 bg-black h-5/6 border-2 border-light_green rounded-2xl flex flex-col justify-between tablet:ml-14 almostCellphone:ml-0 
                almostCellphone:w-11/12 almostCellphone:border-none almostCellphone:p-2 almostCellphone:justify-normal'>
                <table className='w-full text-center almostCellphone:hidden'>
                    <thead className='bg-light_green rounded-tl-lg rounded-tr-3xl'>
                        <tr>
                            <td className='rounded-tl-lg border-r-2 border-black text-bold text-2xl'>ID</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>Produto</td>
                            <td className='border-r-2 border-black text-bold text-2xl'>Preço</td>
                            <td className='rounded-tr-lg text-bold text-2xl'>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                            {productData.map((item) => {
                                return (
                                    <tr>
                                        <td className='border-r border-t border-b border-light_green text-2xl'>{item.id}</td>
                                        <td className='border border-light_green text-2xl py-2'>{item.name}</td>
                                        <td className='border border-light_green text-2xl py-2'>R${item.value}</td>
                                        <td
                                            className='border border-light_green text-2xl py-2'
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
                <div className=' justify-center mt-4 tablet:ml-16 flex items-center mb-10 almostCellphone:hidden'>
                <IoIosArrowBack 
                        className='w-9 h-9 text-white_pormade cursor-pointer' 
                        onClick={() => previousPage()}
                    />
                    <div>
                        <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${firstNav === parseInt(params.id)? "bg-light_green" : ""}`}>{firstNav}</Link>
                        <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${secondNav === parseInt(params.id)? "bg-light_green" : ""} ${secondNav > lastPage? "hidden" : ""}`} onClick={() => nextPage()} >{secondNav}</Link>
                        <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2 ${thirdNav === parseInt(params.id)? "bg-light_green" : ""} ${secondNav > lastPage? "hidden" : ""}`} onClick={() => nextPage()}>{thirdNav}</Link>
                        <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2`}>...</Link>
                        <Link className={`text-4xl text-white_pormade hover:bg-green_pormade px-2`} onClick={() => NavigateLastPage()}>{Math.round(allProduts.length/8)}</Link>
                    </div>
                    <IoIosArrowForward 
                        className='w-9 h-9 text-white_pormade cursor-pointer' 
                        onClick={() => nextPage()}
                    />
                </div>

                {/* Mobile */}
                <div className='hidden justify-center p-2 almostCellphone:flex'>
                    <button
                        className='text-white_pormade bg-light_green rounded-xl  h-10 text-2xl flex justify-center items-center w-full'
                        onClick={() => setNewProduct(!newProduct)}
                    >
                        <div className='flex justify-center w-full items-center'>
                            <FaPlus className='text-white mr-4' />
                            <p>Cadastrar</p>
                        </div>
                    </button>
                </div>
                <ItemTable secondRowItem={"Preço"} secondRowValue={"R$10,00"} openModalProp={openEditForm} setOpenModalProp={setOpenEditForm} />
                <ItemTable secondRowItem={"Preço"} secondRowValue={"R$10,00"} openModalProp={openEditForm} setOpenModalProp={setOpenEditForm} />
                <ItemTable secondRowItem={"Preço"} secondRowValue={"R$10,00"} openModalProp={openEditForm} setOpenModalProp={setOpenEditForm} />
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



            <ModalEditProducts newProduct={openEditForm} setNewProduct={setOpenEditForm} name={editName} setName={setEditName} value={editValue} setValue={setEditValue} description={editDescription} setDescription={setEditDescription}/>
            <ModalDelete word='produto' />

        </div>
    )
}