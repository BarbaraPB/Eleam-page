import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/CurriculumPage.css'

import head from '../assets/images/headCurriculum.png'
import unete from '../assets/images/trabajaConNosotros.png'
import mail from '../assets/images/mailCurriculum.png'

export default class Curriculum extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='curriculum-container'>
                    <div style={{maxWidth:'100vw'}}>
                        <img src={head} alt='Residencia' className='residencia-head'/>
                    </div>
                    <div className='curriculum-fondo'>
                        <h1 className='info-curriculum-title'>TITULO</h1>
                        <div className='info-curriculum-text'>
                            <div className='info-detallada'>
                                <h2>¿Qué necesitamos?</h2>
                                <h3>En nuestra residencia necesitamos gente comprometida tanto con nuestros habitantes como con los demas trabajadores, nos esmeramos en tener un grato ambiente acogedor para poder llevar una mejor convivencia y estabilidad tanto física como emosional.</h3>
                                <img src={unete} alt='Unete' className='unete'/>
                            </div>
                            <div className='info-detallada'>
                                <h2>¿Qué debes hacer?</h2>
                                <h3>Sólo debes enviarnos a nuestro correo tu curriculum vitae y en la sección de 'asunto' indicar el puesto al que quieres postular, luego de eso solo debes esperar nuestro correo en donde te responderemos aa.</h3>
                                <img src={mail} alt='Indicaciones' className='mail-curriculum'/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
