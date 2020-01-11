import React, { Component } from 'react'
import '../styles/Footer.css'

import { Link } from'react-router-dom'

import logo from '../assets/icons/logo.png'
import wtsp from '../assets/icons/rrss/wtspFoot.png'
import mail from '../assets/icons/rrss/mailFoot.png'
import map from '../assets/icons/rrss/mapFoot.png'
import face from '../assets/icons/rrss/faceFoot.png'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='contactanos'>
                    <h1>¡CONTÁCTANOS YA!</h1>
                </div>
                <div className='info-page'>
                    <img src={logo} alt='Santa ana' className='logo-casa'/>
                    <div className='menu'>
                        <Link to='/'>
                            <button><h6>INICIO</h6></button>
                        </Link>
                        <Link to='/servicios'>
                            <button><h6>TIPOS DE SERVICIOS</h6></button>
                        </Link>
                        <Link to='/residencia'>
                            <button><h6>RESIDENCIA</h6></button>
                        </Link>
                        <Link to='/nosotros'>
                            <button><h6>SOBRE NOSOTROS</h6></button>
                        </Link>
                        <Link to='/blog'>
                            <button><h6>BLOG</h6></button>
                        </Link>
                        <Link to='/contacto'>
                            <button><h6>CONTACTO</h6></button>
                        </Link>
                    </div>
                    <div className='rrss'>
                        <button className='wtsp' onClick={() => window.open("https://api.whatsapp.com/send?phone=56963378572&text=&source=&data=","_blank")}>
                            <img src={wtsp} alt='WhatsApp' className='logo'/>
                            <div className='info'>
                                <h2>Celular/WhatsApp</h2>
                                <h3>+569 63378572</h3>
                            </div>
                        </button>
                        
                        
                        
                        <button className='mail'>
                            <img src={mail} alt='Correo electrónico' className='logo'/>
                            <div className='info'>
                                <h2>Mail</h2>
                                <h3>sta.ana088@gmail.com</h3>
                            </div>
                        </button>


                        
                        <button className='map' onClick={() => window.open("https://www.google.cl/maps/place/Sta+Ana+88,+Rancagua,+O'Higgins/@-34.1780563,-70.7353722,3a,75y,200.52h,84.89t/data=!3m7!1e1!3m5!1sDx9tS3fmVMdeyNdRe4yDcg!2e0!6s%2F%2Fgeo2.ggpht.com%2Fcbk%3Fpanoid%3DDx9tS3fmVMdeyNdRe4yDcg%26output%3Dthumbnail%26cb_client%3Dmaps_sv.tactile.gps%26thumb%3D2%26w%3D203%26h%3D100%26yaw%3D238.39772%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m5!3m4!1s0x966343466d8f3631:0x9193ec2225edfe73!8m2!3d-34.1781128!4d-70.7354574","_blank")}>
                            <img src={map} alt='Ubicación' className='logo'/>
                            <div className='info'>
                                <h2>Ubicación</h2>
                                <h3>Sta Ana 88, Rancagua, Chile</h3>
                            </div>
                        </button>
                        <button className='face' onClick={() => window.open("https://www.facebook.com/casa.reposos","_blank")}>
                            <img src={face} alt='Facebook' className='logo'/>
                            <div className='info'>
                                <h2>Facebook</h2>
                                <h3>Casa de reposo</h3>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='foot'>
                </div>
            </div>
        )
    }
}
