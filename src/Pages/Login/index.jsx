import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { useContext, useState } from 'react'
import { AuthenticateContext } from '../../Contexts/Authenticate'

const Login = () => {
    const [cpfInput, setCpfInput] = useState('')
    const {authenticate, saveData, setSaveData, user} = useContext(AuthenticateContext)

    const validateCPF = async (event) => {
        event.preventDefault();
        try {
            await authenticate(cpfInput, '/home/1')
        } catch (error) {
            console.log("Usuário ou senha inválidos")
        }

    }

    console.log(user)
    return (
        <div className="w-full h-screen flex justify-center">
            <div className='flex flex-col w-4/12 tablet:w-6/12 cellphone:w-8/12'>
                <div className='flex flex-col items-center justify-start'>
                    <img className='w-3/4 m-3' src={logo} alt='Imagem da logo' />
                </div>
                <div className='flex flex-col justify-center h-2/4 -mb-5'>
                    <h1 className='text-5xl font-black text-white_pormade text-center'>Entrar</h1>
                </div>
                <form className='flex flex-col h-full justify-start mt-6' onSubmit={validateCPF}>
                    <label className='text-white_pormade m-1 font-bold	text-2xl'>Digite seu CPF</label>
                    <input 
                        className='w-full h-9 rounded-lg bg-grey_pormade outline-none text-white_pormade border border-green_pormade text-base ps-3' 
                        placeholder='Digite seu CPF' 
                        type="text"
                        maxLength="11"
                        pattern="([0-9]{11})"
                        value={cpfInput}

                        onChange={(e) => setCpfInput(e.target.value)}
                    />
                    <div className='flex'>
                        <input type='checkbox' 
                            className='mr-2'
                            checked={saveData}
                            onChange={(e) => setSaveData(!saveData)}
                        />
                        <p className='text-white_pormade my-2'>Manter-me Conectado</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <button className='text-white_pormade bg-light_green rounded-xl w-2/4 h-9 mt-2 text-2xl flex items-start justify-center tablet:w-2/3 cellphone:w-3/4'>Acessar</button>
                        <button className='text-white_pormade mt-2'>Suporte</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login