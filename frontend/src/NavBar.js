import { FaParking } from 'react-icons/fa';
import {reactLocalStorage} from 'reactjs-localstorage';

function NavBar({logout, session}){

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <FaParking />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                        {reactLocalStorage.get('session') &&
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Registration
                        </a>}
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item" href="/">Parking Spot</a></li>
                            <li><a className="dropdown-item" href="/">Users</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">                        
                            {reactLocalStorage.get('session') && <a className="nav-link" aria-current="page" onClick={logout} href="/">Logout</a>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;
