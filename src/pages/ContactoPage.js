import React, { Component } from 'react'
import Header from '../components/Header'
import Curriculum from '../components/CV'
import Footer from '../components/Footer'
import '../styles/ContactoPage.css'

import head from '../assets/images/headContacto.png'


export default class ContactoPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className='contacto-contaier'>
                    <div style={{maxWidth:'100vw'}}>
                        <img src={head} alt='Contacto' className='servicios-head'/>
                    </div>
                    <div className='servicios-fondo'>
                        
                    </div>
                </div>
                <Curriculum/>
                <Footer/>
            </div>
        )
    }
}
