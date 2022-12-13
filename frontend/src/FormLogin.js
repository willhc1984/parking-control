function FormLogin({eventoTecladoLogin, obj, auth}){

    return (
        <div>            
            <form>
                <h1>Login</h1>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Login</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" name='login' onChange={eventoTecladoLogin} value={obj.login} id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Senha</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" name='senha' onChange={eventoTecladoLogin} value={obj.senha} id="inputPassword3" />
                    </div>
                </div>
                
                <button type="button" className="btn btn-primary" onClick={auth}>Entrar</button>
            </form>
        </div>
        
    )

}

export default FormLogin;