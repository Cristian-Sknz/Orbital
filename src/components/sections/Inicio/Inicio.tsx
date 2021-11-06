import * as React from 'react';
import OrbitalSection from '../OrbitalSection';
import './inicio.css'

const Inicio = () => {


    return (
        <OrbitalSection id={'inicio'} title='title'>

            <div className="inicio-content">

                <div className="home-img">
                        <img src="./images/home.svg" alt="Estudante Orbital" />
                </div>
                {/* home-img */}

                <div className="home-texts">
                    <div className="home-title">
                        <img alt="logo" />
                    </div>

                    <div className="home-subtitle">Inovando e mudando órbitas</div>
                </div>
                {/* home-texts */}

                <a href="#contato" className='home-btn'>Mude sua órbita!</a>

            </div>
            {/* inicio-content */}


        </OrbitalSection>
    )

}


export default Inicio;