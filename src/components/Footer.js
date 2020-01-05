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
                        <button className='wtsp'>
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
                        <button className='map'>
                            <img src={map} alt='Ubicación' className='logo'/>
                            <div className='info'>
                                <h2>Ubicación</h2>
                                <h3>Sta Ana 88, Rancagua, Chile</h3>
                            </div>
                        </button>
                        <button className='face'>
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
