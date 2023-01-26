import '../scss/header.scss'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'

function Header (props) {

    return(
     <div className="header">
       {props.deskOut && <button className='btn-desk' onClick={props.deskOut}></button>}
        <Link to="/"><img className='logo' src={logo}/></Link>

        <div>
        <input className="header__search" type="search" placeholder='Поиск' /><button className="header__btn-search">Поиск</button>
        </div>

        <div>
        <Link to='/login'><button className='header__login'>Логин</button></Link><Link to='/register'><button className='header__register'>Регистрация</button></Link>    
        </div>         
     </div>
    )
}


export default Header 
