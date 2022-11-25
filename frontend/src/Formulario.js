function Formulario({eventoTeclado}){

    return(
        <form>
            <input type='number' className='form-control' name='parkingSpotNumber' onChange={eventoTeclado} placeholder='Parking Spot number' />
            <input type='text' className='form-control' name='licensePlateCar' onChange={eventoTeclado} placeholder='Licence plate car' />
            <input type='text' className='form-control' name='brandCar' onChange={eventoTeclado} placeholder='Brand Car' />
            <input type='text' className='form-control' name='modelCar' onChange={eventoTeclado} placeholder='Model Car' />
            <input type='text' className='form-control' name='colorCar' onChange={eventoTeclado} placeholder='Color car' />
            <input type='text' className='form-control' name='responsibleName' onChange={eventoTeclado} placeholder='Responsible name' />
            <input type='number' className='form-control' name='apartment' onChange={eventoTeclado} placeholder='Apartment' />
            <input type='number' className='form-control' name='block' onChange={eventoTeclado} placeholder='Block' />
            <input type='button' value='Cadastrar' className='btn btn-primary' />
        </form>
    )

}

export default Formulario;