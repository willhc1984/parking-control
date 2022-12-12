function FormLogin(){

    return (
        <div>            
            <form>
                <h1>Login</h1>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Senha</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
        </div>
        
    )

}

export default FormLogin;