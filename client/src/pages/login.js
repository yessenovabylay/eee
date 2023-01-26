import '../scss/input.scss'
import {Link} from 'react-router-dom'
import {useState} from 'react' 
import {END_POINT} from '../config/end_point'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/header'


function Login () {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({  
        phoneNumber: "",
        password: "",
    })

    const onChange = e => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const login = async() => {
      try{
        const res =await axios.post(`${END_POINT}/api/user/login`, formData)
        navigate('/')
      }catch (error){

        alert("не правильный логин или пароль ")

      }
    }



    return(
        <div>
        <Header></Header>
        <div className="login">

      
            <div className="login__box">
             
                <h6 className="login__title-one">Welcome back</h6>
                <h3 className="login__title-two">Login to your account</h3>
                <h6 className="login__info">Number</h6>
                <input value={formData.phoneNumber} onChange={onChange} name="phoneNumber" className="login__input" placeholder='000-000-00-00' type="tel" />
                <h6 className="login__info">Password</h6>
                <input value={formData.password}    onChange={onChange} name="password" className="login__input" placeholder='password' type='password'/>
                <div className="login__rememberBox">
                    <input className='login__remember' type='checkbox' /> Remember me
                   <Link> <h6 className='login__forgot'>Forgot password?</h6> </Link>
                </div>
                <button onClick={login} className="login__btn"> Login now</button>
            </div>
        </div>

    </div>
    )
}


export default Login