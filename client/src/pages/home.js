import { Link } from 'react-router-dom'
import harry from '../images/harry.jpg'
import '../scss/home.scss'
import { useState } from 'react'
import Header from '../components/header'


function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)



    const deskOut = () => {
        setIsMenuOpen(!isMenuOpen)

    }

    return (
        <div>
            {/* <button className='home__btn-desk' onClick={deskOut}></button>
            <Link to='/login'>
                <button>Login</button>
            </Link>
            <Link to='/register'>
                <button>Register</button>
            </Link> */}

            <Header deskOut={deskOut}></Header>

            <div className="home">


                <div
                    className={isMenuOpen ? "home__one" : "home__one close"} >
                    Aziz
                </div>

                <div className="home__two">

                    <div className='home__item'>
                        <img className='home__img' src={harry} />
                        <h6 className='home__title'>Harry potter</h6>
                        <a className='home__user-link' href="#">User Name</a>      
                         <button className='home__btn'>Add</button>
                    </div>

                    <div className='home__item'>
                        <img className='home__img' src={harry} />
                        <h6 className='home__title'>Harry potter</h6>
                        <a className='home__user-link' href="#">User Name</a>      
                         <button className='home__btn'>Add</button>
                    </div>

                    <div className='home__item'>
                        <img className='home__img' src={harry} />
                        <h6 className='home__title'>Harry potter</h6>
                        <a className='home__user-link' href="#">User Name</a>      
                         <button className='home__btn'>Add</button>
                    </div>

                    <div className='home__item'>
                        <img className='home__img' src={harry} />
                        <h6 className='home__title'>Harry potter</h6>
                        <a className='home__user-link' href="#">User Name</a>      
                         <button className='home__btn'>Add</button>
                    </div>


                    <div className='home__item'>
                        <img className='home__img' src={harry} />
                        <h6 className='home__title'>Harry potter</h6>
                        <a className='home__user-link' href="#">User Name</a>      
                         <button className='home__btn'>Add</button>
                    </div>


                    <div className='home__item'>
                        <img className='home__img' src={harry} />
                        <h6 className='home__title'>Harry potter</h6>
                        <a className='home__user-link' href="#">User Name</a>      
                         <button className='home__btn'>Add</button>
                    </div>


                    <div className='home__item'>
                        <img className='home__img' src={harry} />
                        <h6 className='home__title'>Harry potter</h6>
                        <a className='home__user-link' href="#">User Name</a>      
                         <button className='home__btn'>Add</button>
                    </div>


                    <div className='home__item'>
                        <img className='home__img' src={harry} />
                        <h6 className='home__title'>Harry potter</h6>
                        <a className='home__user-link' href="#">User Name</a>      
                         <button className='home__btn'>Add</button>
                    </div>



                    
                </div>
            </div>
        </div>
    )
}

export default Home;