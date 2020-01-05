import React, { Component } from 'react'
import '../styles/CV.css'

import { Link } from'react-router-dom'

export default class Curriculum extends Component {
    render() {
        return (
            <div className='cv-container'>
                <div className='a'>
                </div>
                <div className='cv-info'>
                    <div className='cv-title'>
                        <h2>¡Trabaja con nosotros!</h2>
                        <h5>ESTAMOS CRECIENDO ¿QUIERES SER PARTE DE NUESTRO EQUIPO?</h5>
                        <h4>Buscamos personas responsables, con gran motivación y compromiso que apuesten por el trabajo en equipo para lograr un objetivo común. Así que si quieres unirte a nuestro equipo y te identificas con nuestro proposito, envíanos tu CV.</h4>
                    </div>
                    <div className='cv-button'>
                        <Link to='/curriculum'>
                            <button><h6>VER MÁS</h6></button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
