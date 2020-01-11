import React, { Component } from 'react'
import '../styles/Header.css'

import { Link } from'react-router-dom'

import logo from '../assets/icons/logo.png'
import phone from '../assets/icons/rrss/phone.png'
import mail from '../assets/icons/rrss/mail.png'
import map from '../assets/icons/rrss/map.png'
import face from '../assets/icons/rrss/face.png'

export default class Header extends Component {
    render() {
        return (
            <header className='header-container'>
                <div className='header-top'>
                    <img src={logo} alt='Santa ana' className='header-logo'/>
                    <div className='header-options'>
                        <button className='button-options' onClick={() => window.open("https://api.whatsapp.com/send?phone=56963378572&text=&source=&data=","_blank")}>
                            <img src={phone} alt='phone'/>
                            <div className='info-header-options'>
                                <h3>Celular/WhatsApp</h3>
                                <h2>+569 63378572</h2>
                            </div>
                        </button>


                            <button className='button-options'>
                                <img src={mail} alt='Mail'/>
                                <div className='info-header-options'>
                                    <h3>Correo electrónico</h3>
                                    <h2>sta.ana088@gmail.com</h2>
                                </div>
                            </button>
                        

                        <button className='button-options' onClick={() => window.open("https://www.google.cl/maps/place/Sta+Ana+88,+Rancagua,+O'Higgins/@-34.1780563,-70.7353722,3a,75y,200.52h,84.89t/data=!3m7!1e1!3m5!1sDx9tS3fmVMdeyNdRe4yDcg!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DDx9tS3fmVMdeyNdRe4yDcg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D238.39772%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x966343466d8f3631:0x9193ec2225edfe73!8m2!3d-34.1781128!4d-70.7354574","_blank")}>
                            <img src={map} alt='Ubicación'/>
                            <div className='info-header-options'>
                                <h3>Ubicación</h3>
                                <h2>Sta Ana 88, Rancagua, Chile</h2>
                            </div>
                        </button>
                        <button className='button-options' onClick={() => window.open("https://www.facebook.com/casa.reposos","_blank")}>
                            <img src={face} alt='Facebook'/>
                        </button>
                    </div>
                </div>
                <div className='header-button'>
                    <Link to='/'>
                        <button className='button'><h3>Inicio</h3></button>
                    </Link>
                    <Link to='/servicios'>
                        <button className='button'><h3>Tipos de servicios</h3></button>
                    </Link>
                    <Link to='/residencia'>
                        <button className='button'><h3>Residencia</h3></button>
                    </Link>
                    <Link to='/nosotros'>
                        <button className='button'><h3>Sobre nosotros</h3></button>
                    </Link>
                    <Link to='/blog'>
                        <button className='button'><h3>Blog</h3></button>
                    </Link>
                    <Link to='/contacto'>
                        <button className='button'><h3>Contacto</h3></button>
                    </Link>
                </div>
            </header>
        )
    }
}
