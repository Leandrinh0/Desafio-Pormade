import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Login = () => {
    return (
        <div className="w-full h-screen flex justify-center">
            <div className='flex flex-col w-4/12 tablet:w-6/12 cellphone:w-8/12'>
                <div className='flex flex-col items-center justify-start'>
                    <img className='w-3/4 m-3' src={logo} alt='Imagem da logo' />
                </div>
                <div className='flex flex-col justify-center h-2/4 -mb-5'>
                    <h1 className='text-5xl font-black text-white_pormade text-center'>Entrar</h1>
                </div>
                <div className='flex flex-col h-full justify-start mt-6'>
                    <label className='text-white_pormade m-1 font-bold	text-2xl'>Digite seu CPF</label>
                    <input 
                        className='w-full h-9 rounded-lg bg-grey_pormade outline-none text-white_pormade border border-green_pormade text-base ps-3' 
                        placeholder='Digite seu CPF' 
                    />
                    <div className='flex'>
                        <input type='checkbox' className='mr-2'/>
                        <p className='text-white_pormade my-2'>Manter-me Conectado</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <Link to='/home/1' className='text-white_pormade bg-light_green rounded-xl w-2/4 h-9 mt-2 text-2xl flex items-start justify-center tablet:w-2/3 cellphone:w-3/4'>Acessar</Link>
                        <button className='text-white_pormade mt-2'>Suporte</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login