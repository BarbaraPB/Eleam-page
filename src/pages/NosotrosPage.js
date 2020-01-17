import React, { Component } from 'react'
import Header from '../components/Header'
import Curriculum from '../components/CV'
import Footer from '../components/Footer'
import '../styles/NosotrosPage.css'

import head from '../assets/images/headNosotros.png'
import enfermera from '../assets/icons/enfermera.png'
import enfermero from '../assets/icons/enfermero.png'
import doctor from '../assets/icons/doctor.png'
import doctora from '../assets/icons/doctora.png'
import kine1 from '../assets/icons/kine1.png'
import kine2 from '../assets/icons/kine2.png'
import terapia1 from '../assets/icons/terapia1.png'
import terapia2 from '../assets/icons/terapia2.png'

import { Helmet } from "react-helmet";

export default class NosotrosPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Nuestro personal - Casa de reposo Rancagua</title>
                </Helmet>
                <Header/>
                <div className='nosotros-container'>
                    <div style={{maxWidth:'100vw'}}>
                        <img src={head} alt='Nosotros' className='nosotros-head'/>
                    </div>
                    <div className='nosotros-fondo'>
                        <div className='nosotros-domicilio'>
                            <div className='nosotros-title'>
                                <h1>Atención domiciliaria del adulto mayor</h1>
                            </div>
                            <div className='nosotros-info'>
                                <img src={enfermera} alt='Técnico en enfermería'/>
                                <img src={enfermero} alt='Técnico en enfermería'/>
                                <div className='nosotros-info-text'>
                                    <h4>Técnico en enfermería</h4>
                                    <h5>Sus servicios se asocian a la provisión de servicios básicos de enfermería. Esto incluye monitoreo de signos vitales, administración de medicamentos orales, tratamiento inyectable (intramuscular y subcutáneo), curaciones de heridas, entre otras ocupasiones. También sus servicios se relacionan al cuidado personal del paciente a nivel de higiene, asistencia con alimentación, vestimenta y movilización. Todo lo anterior les capacita para proveer sus servicios a pacientes de mediana y alta complejidad.</h5>
                                </div>
                            </div>
                        </div>
                        <hr className='hr'/>
                        <div className='nosotros-casa'>
                            <div className='nosotros-title'>
                                <h1>Casa de cuidado del adulto mayor</h1>
                            </div>
                            <div className='nosotros-info'> 
                                <img src={enfermera} alt='Técnico en enfermería'/>
                                <img src={enfermero} alt='Técnico en enfermería'/>
                                <div className='nosotros-info-text'>
                                    <h4>Técnico en enfermería</h4>
                                    <h5>Sus servicios se asocian a la provisión de servicios básicos de enfermería. Esto incluye monitoreo de signos vitales, administración de medicamentos orales, tratamiento inyectable (intramuscular y subcutáneo), curaciones de heridas, entre otras ocupasiones. También sus servicios se relacionan al cuidado personal del paciente a nivel de higiene, asistencia con alimentación, vestimenta y movilización. Todo lo anterior les capacita para proveer sus servicios a pacientes de mediana y alta complejidad.</h5>
                                </div>
                            </div>
                            <div className='nosotros-info'>
                                <img src={doctor} alt='Doctor'/>
                                <img src={doctora} alt='Doctor'/>
                                <div className='nosotros-info-text'>
                                    <h4>Doctor</h4>
                                    <h5>Examina a los pacientes, supervisa el contacto estrecho con la familia y sobre todo con el cuidador principal, les permite preservar su funcionalidad física y mental y disminuir la velocidad de declinación a medida que envejecen. Hay una mejoría importante en la satisfacción de la familia y reduce la posibilidad de hospitalización.</h5>
                                </div>
                            </div>
                            <div className='nosotros-info'>
                                <img src={kine1} alt='Kinesiólogo'/>
                                <img src={kine2} alt='Kinesiólogo'/>
                                <div className='nosotros-info-text'>
                                    <h4>Kinesiólogo</h4>
                                    <h5>El rol del kinesiólogo es proteger la funcionalidad y aumentar la independencia del paciente, lo que ayuda a una mejor calidad de vida, además influye en la forma en que se puede enfrentar una enfermedad, ya que retarda y combate los procesos degenerativos del organismo.</h5>
                                </div>
                            </div>
                            <div className='nosotros-info'>
                                <img src={terapia1} alt='Terapeuta ocupacional'/>
                                <img src={terapia2} alt='Terapeuta ocupacional'/>
                                <div className='nosotros-info-text'>
                                    <h4>Terapeuta ocupacional</h4>
                                    <h5>El terapeuta ocupacional parte de la valoración de las capacidades físicas, mentales y sociales de la persona mayor para ver con qué actividades de la vida diaria debe trabajar. Una vez detectadas las necesidades,trabaja con la persona de manera individual, adaptándose a sus capacidades, con el objetivo de prevenir la pérdida, mantener, o mejorar la autonomía funcional.</h5>
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
