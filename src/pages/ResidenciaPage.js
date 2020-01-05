import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Curriculum from '../components/CV'
import '../styles/ResidenciaPage.css'

import head from '../assets/images/headResidencia.png'
import collage from '../assets/images/collage.png'

export default class ResidenciaPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='residencia-container'>
                    <div style={{maxWidth:'100vw'}}>
                        <img src={head} alt='Residencia' className='residencia-head'/>
                    </div>
                    <div className='residencia-fondo'>
                        <div className='residencia-title'>
                            <h1>Nuestro objetivo</h1>
                            <h2> Nuestra misión es entregar a nuestros residentes las atenciones y cuidados necesarios para su seguridad y bienestar físico, cognitivo y emocional. A través de la prestación de nuestros servicios, se les mantiene activos mediante la promoción de sus potencialidades, la recreación y la disminución de riesgos, velando también por el bienestar de sus familias.</h2>
                            <h2>Nuestra visión es ser sinónimo de calidad en la prestación de servicios personalizados, así como brindar todo el apoyo necesario para la familia y su entorno, propiciando un ambiente favorable, de salud física, mental y emocional, tanto para el adulto mayor como para su familia, y nuestros colaboradores a cargo del cuidado de ellos.</h2>
                        </div>
                        <div className='collage-residencia'>
                            <img src={collage} alt='Collage de nuestra residencia' />
                        </div>
                    </div>
                </div>
                <Curriculum/>
                <Footer/>
            </div>
        )
    }
}
