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
                        <button className='button-options'>
                            <img src={phone} alt='phone'/>
                            <div className='info-header-options'>
                                <h3>Celular/WhatsApp</h3>
                                <h2>+569 6378572</h2>
                            </div>
                        </button>
                        <button className='button-options'>
                            <img src={mail} alt='Mail'/>
                            <div className='info-header-options'>
                                <h3>Correo electrónico</h3>
                                <h2>sta.ana088@gmail.com</h2>
                            </div>
                        </button>
                        <button className='button-options'>
                            <img src={map} alt='Ubicación'/>
                            <div className='info-header-options'>
                                <h3>Ubicación</h3>
                                <h2>Sta Ana 88, Rancagua, Chile</h2>
                            </div>
                        </button>
                        <button className='button-options'>
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
                    {/*
                    <Link to='/blog'>
                        <button className='button'><h3>Blog</h3></button>
                    </Link>
                    <Link to='/contacto'>
                        <button className='button'><h3>Contacto</h3></button>
                    </Link>
                    */}
                </div>
            </header>
        )
    }
}
