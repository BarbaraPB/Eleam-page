import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Curriculum from '../components/CV'
import '../styles/HomePage.css'

import { Link } from'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='home-container'>
                    <div className='home-fondo'>
                        <div className='tipos-servicios'>
                            <div className='tipos-servicios-title'>
                                <h2>Los servicios que tenemos para ofrecerte</h2>
                                <h3>Servicio integral de cuidado al adulto mayor dependiente o semivalente, tanto en aspectos físicos como cognitivos y/o enfermedades propias de la tercera edad.</h3>
                            </div>
                            <div className='buttons-tipos-servicios'>
                                <Link to='' style={{flex:1}}>
                                    <button className='button-home1'>
                                        <h6>Establecimiento de larga estadia para adultos mayores</h6>
                                    </button>
                                </Link>
                                <Link to='' style={{flex:1}}>
                                    <button className='button-home2'>
                                        <h6>Atención domiciliaria para adultos mayores</h6>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <hr className='hr'/>
                        <Link to='/nosotros'style={{flex:1, marginLeft: 40, marginRight: 40}}>
                            <button className='button-home3'>
                                <h1>¡Conócenos!</h1>
                            </button>
                        </Link>
                    </div>
                </div> 
                <Curriculum/>
                <Footer/>
            </div>
        )
    }
}
