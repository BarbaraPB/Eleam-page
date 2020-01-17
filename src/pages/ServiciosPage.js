import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Curriculum from '../components/CV'
import '../styles/ServiciosPage.css'

import head from '../assets/images/headServicios.png'
import clock from '../assets/icons/clock.png'
import doc from '../assets/icons/doc.png'
import food from '../assets/icons/food.png'
import medicine from '../assets/icons/medicine.png'
import visit from '../assets/icons/visit.png'
import art from '../assets/icons/art.png'

import { Helmet } from "react-helmet";

export default class ServiciosPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Nuestros servicios - Casa de reposo Rancagua</title>
                </Helmet>
                <Header/>
                <div className='servicios-container'>
                    <div style={{width:'100vw'}}>
                        <img src={head} alt='Tipos de servicios' className='servicios-head'/>
                    </div>
                    <div className='servicios-fondo'>
                        <div className='alinear'>
                            <div className='servicios-title'>
                                <h1>Atención domiciliaria del adulto mayor</h1>
                                <h2>La atención a domicilio le ofrece a las personas la comodidad de que en su propio hogar obtengan un apoyo para realizar sus actividades vitales diarias, tales como bañarse, vestirse, usar el inodoro, trasladarse, mantener la continencia y/o alimentarse.</h2>
                            </div>
                            <div className='info-servicios'>
                                <div className='info-servicios-part1'>
                                    <div className='icon1'>
                                        <img src={clock} alt='Horario de atención'/>
                                        <h3>Asistencia 12 hrs</h3>
                                        <h4>El profesional acude al domicilio para satisfacer las actividades de la vida diaria del adulto mayor.</h4>
                                    </div>
                                    <div className='icon1'>
                                        <img src={doc} alt='Profesionales'/>
                                        <h3>Profesional</h3>
                                        <h4>Técnico en enfermería  realiza chequeos tales como signos vitales, presión arterial, etc.</h4> 
                                    </div>
                                    <div className='icon1'>
                                        <img src={food} alt='Alimentación'/>
                                        <h3>Alimentación</h3>
                                        <h4>Alimentación balanceada según el tipo de régimen indicado.</h4>
                                    </div>
                                    <div className='icon'>
                                        <img src={medicine} alt='Medicamentos'/>
                                        <h3>Medicamentos</h3>
                                        <h4>Administración básica de medicamentos.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='hr'/>
                        <div className='alinear'>
                            <div className='servicios-title'>
                                <h1>Casa de cuidado del adulto mayor</h1>
                                <h2>Nuestra casa de reposo consta con la participación de distintos especialistan para nuestros residentes, los cuales brindan seguridad, apoyo y los cuidados necesarios para que el adulto mayor sienta la comodidad y una grata estancia.</h2>
                            </div>
                            <div className='info-servicios'>
                                <div className='info-servicios-part2'>
                                    <div className='icon2'>
                                        <img src={clock} alt='Horario de atención'/>
                                        <h3>Asistencia 24 hrs</h3>
                                        <h4>Personal capacitado para dar asistencia y confort a nuestros residentes.</h4>
                                    </div>
                                    <div className='icon2'>
                                        <img src={doc} alt='Profesionales'/>
                                        <h3>Profesional</h3>
                                        <h4>Terapeuta ocupacional, kinesiólogo, técnico en enfermería, doctor, etc.</h4> 
                                    </div>
                                    <div className='icon'>
                                        <img src={food} alt='Alimentación'/>
                                        <h3>Alimentación</h3>
                                        <h4>Alimentación balanceada según el tipo de régimen indicado.</h4>
                                    </div>
                                </div>
                                <div className='info-servicios-part2'>
                                    <div className='icon2'>
                                        <img src={medicine} alt='Medicamentos'/>
                                        <h3>Medicamentos</h3>
                                        <h4>Administración básica de medicamentos.</h4>
                                    </div>
                                    <div className='icon2'>
                                        <img src={visit} alt='Visitas'/>
                                        <h3>Visitas</h3>
                                        <h4>Horario de visitas todos los días de la semana desde las 10:00 hrs hasta las 20:30 hrs.</h4>
                                    </div>
                                    <div className='icon'>
                                        <img src={art} alt='Actividades'/>
                                        <h3>Actividades recreativas</h3>
                                        <h4>Estimulación de la memoria, integración social, jardinería, manualidades, etc.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <Curriculum/>
                <Footer/>
            </div>
        )
    }
}
