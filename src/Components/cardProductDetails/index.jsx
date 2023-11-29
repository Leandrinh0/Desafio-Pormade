

export default function CardProductDetails () {
    return(
        <div className='w-5/12 h-2/5 bg-black_pormade border border-light_green rounded-2xl p-6 m-10'>
            <h1 className='font-bold text-2xl border-b border-light_green'>Product Name</h1>
            <div className="flex justify-between">
                <p className='font-bold text-2xl m-2'>ID do produto</p>
                <p className='font-bold text-2xl m-2'>09</p>
            </div>
            <div className="flex justify-between">
                <p className='font-bold text-2xl m-2'>valor</p>
                <p className='font-bold text-2xl m-2'>R$45,10</p>
            </div>
            <div className="flex justify-between">
                <p className='font-bold text-2xl m-2'>Quantidade</p>
                <p className='font-bold text-2xl m-2'>02</p>
            </div>
            <div className="flex">
                <p className='font-bold text-2xl m-2'>Descrição:</p>
                <p className='text-sm font-medium mt-3 ml-3'>Caderno de 10 matérias com a maravilhosa capa de portas Pormade</p>
            </div>

        </div>
    )
}