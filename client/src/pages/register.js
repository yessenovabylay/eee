import '../scss/input.scss'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {useState} from 'react' 
import {END_POINT} from '../config/end_point'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header'


function Register () {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
        
    })  

    const onChange = e => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const register = async() => {
      try{

       

          const res =await axios.post(`${END_POINT}/api/user/registration`, formData)
          navigate('/login')

       

      }catch (error){

        console.log(error)

      }
    }




    return(
      <div>
            <Header></Header>
        <div className="login">

            <div className="login__box">
            
                <h3 className="login__title-two">Registration</h3>
                <input value={formData.lastName} onChange={onChange} name="lastName" className="login__input" placeholder='Фамилия' required />
                <input value={formData.firstName} onChange={onChange} name="firstName" className="login__input" placeholder='Имя' required />
                {/* <input value={formData.IIN} onChange={onChange} name="IIN" className="login__input" placeholder='ИИН' type="tel" /> */}
                <input value={formData.phoneNumber} onChange={onChange} name="phoneNumber" className="login__input" placeholder='телефон' type="tel" required />
                <input value={formData.password} onChange={onChange} name="password" className="login__input" placeholder='пароль' type='password' required />
                {/* <input value={formData.password2} onChange={onChange} name="password2" className="login__input" placeholder='введите пароль повторно' type='password'/> */}
                <button onClick={register} className="login__btn"> Зарегистрироваться</button>
            </div>
        </div>
      </div>
    )
}


export default Register