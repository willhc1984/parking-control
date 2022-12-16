import styles from './Formulario.module.css';

function Formulario({eventoTeclado, cadastrar, botao, obj, remover, cancelar, alterar}){

    return(
        <form className={styles.form}>
            <h1>Register</h1>
            <input type='number' className='form-control' name='parkingSpotNumber' value={obj.parkingSpotNumber}  onChange={eventoTeclado} placeholder='Parking Spot number' />
            <input type='text' className='form-control' name='licensePlateCar' value={obj.licensePlateCar}  onChange={eventoTeclado} placeholder='License plate car' />
            <input type='text' className='form-control' name='brandCar' value={obj.brandCar}  onChange={eventoTeclado} placeholder='Brand Car' />
            <input type='text' className='form-control' name='modelCar'value={obj.modelCar}  onChange={eventoTeclado} placeholder='Model Car' />
            <input type='text' className='form-control' name='colorCar' value={obj.colorCar} onChange={eventoTeclado} placeholder='Color car' />
            <input type='text' className='form-control' name='responsibleName' value={obj.responsibleName} onChange={eventoTeclado} placeholder='Responsible name' />
            <input type='number' className='form-control' name='apartment' value={obj.apartment} onChange={eventoTeclado} placeholder='Apartment' />
            <input type='number' className='form-control' name='block' value={obj.block} onChange={eventoTeclado} placeholder='Block' />
            
            {
                botao
                ?
                <input type='button' className='btn btn-primary' onClick={cadastrar} value='Save'  />
                :
                <div>
                    <input type='button' className='btn btn-warning' onClick={alterar} value='Edit'  />
                    <input type='button' className='btn btn-danger' onClick={remover} value='Delete'  />
                    <input type='button' className='btn btn-secondary' onClick={cancelar} value='Cancel'  />
                </div>
            }
        </form>
        
    )

}

export default Formulario;