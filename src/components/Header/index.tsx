import { Navbar } from "./styles";
import logo from '../../assets/aoop-squad-digital.svg';

export function Header() {
    return (
        <Navbar>
            <div className="topnav" id="myTopnav">
                <a href="/">
                    <img src={logo} className="img" alt="Squad Digital">
                    </img>
                </a>
                <div className="dropdown">
                    <button className="dropbtn">Regras
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <a href="/regras">Regras</a>
                        <a href="/preferencias">Preferências e instância</a>
                    </div>
                </div>
                <a href="/scan">Scan</a>
                <a href="/empresa">Empresa</a>
                <a href="/categorias">Categorias</a>
            </div>
        </Navbar>
    )
}