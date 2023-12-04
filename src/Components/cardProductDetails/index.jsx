import "./styles.css"

function CardProductDetails () {
    return(
        <div className='w-5/12 h-2/5 bg-black_pormade border-2 border-light_green rounded-2xl mt-8 mx-8 p-3 px-5 tablet:w-11/12 tablet:mx-0 tablet:mt-6 tablet:h-1/3 almostCellphone:p-1'>
            <h1 className='font-bold text-2xl border-b border-light_green almostCellphone:text-base'>Product Name</h1>
            <div className="flex justify-between">
                <p className='font-bold text-xl m-0.5 tablet:mb-1.5 almostCellphone:text-sm'>ID do produto</p>
                <p className='font-bold text-xl m-0.5 tablet:mb-1.5 almostCellphone:text-sm'>09</p>
            </div>
            <div className="flex justify-between">
                <p className='font-bold text-xl tablet:-mb-1 almostCellphone:text-sm'>valor</p>
                <p className='font-bold text-xl tablet:-mb-1 almostCellphone:text-sm'>R$45,10</p>
            </div>
            <div className="flex justify-between">
                <p className='text-grey_text almostCellphone:text-xs'>Valor unitário</p>
                <p className='text-grey_text almostCellphone:text-xs'>R$10,12</p>
            </div>
            <div className="flex justify-between">
                <p className='font-bold text-xl m-0.5 tablet:mb-1.5 almostCellphone:text-sm'>Quantidade</p>
                <p className='font-bold text-xl m-0.5 tablet:mb-1.5 almostCellphone:text-sm'>02</p>
            </div>
            <div className="flex items-start">
                <p className='font-bold text-xl m-0.5 tablet:mb-1.5 almostCellphone:text-sm'>Descrição:</p>
                <p className='text-sm font-medium mt-2 ml-2 almostCellphone:text-xs almostCellphone:mt-1'>Caderno de 10 matérias com a maravilhosa capa de portas Pormade</p>
            </div>

        </div>
    )
}

export default CardProductDetails