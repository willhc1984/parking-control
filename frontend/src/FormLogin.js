import styles from './Formulario.module.css';
import { RiParkingBoxFill } from 'react-icons/ri';

function FormLogin({eventoTecladoLogin, obj, auth}){

    return (
        <div>            
            <form className={styles.form}>
                <RiParkingBoxFill className={styles.logo} />
                <h1 className="h3 mb-3 fw-normal">Parking Control</h1>
                <p>Parking Control System</p>
                <div className="form-floating">
                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" 
                    name='login' onChange={eventoTecladoLogin} value={obj.login} />
                <label for="floatingInput">Login</label>
                </div>
                <div className="form-floating">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" 
                    name='senha' onChange={eventoTecladoLogin} value={obj.senha} />
                <label for="floatingPassword">Password</label>
                </div>
                <button type="button" className="btn btn-primary" onClick={auth}>Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2022 - Login: admin - Password: 123</p>
    
            </form>
        </div>
        
    )

}

export default FormLogin;