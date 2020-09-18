import React, { Component } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer/Footer'
import RandomPairs from '../RandomPairs/RandomPairs'

import styles from './Duets.module.css'

class Duets extends Component {
    render() {
        return (
            <div className={styles.Duets}>
                <Header />
                <main className={styles.Main}>
                    <RandomPairs></RandomPairs>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Duets