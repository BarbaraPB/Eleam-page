import React, { Component } from 'react'
import Header from '../components/Header'
import CV from '../components/CV'
import Footer from '../components/Footer'
import '../styles/BlogPage.css'

export default class BlogPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <CV/>
                <Footer/>
            </div>
        )
    }
}
