import * as React from 'react';
import OrbitalSection from '../OrbitalSection';
import './sobre.css'

const Sobre = () => {
    return (
        <OrbitalSection id={'sobre'} title='Sobre' showTitle={true}>
            <div className="sobre-content">

                <div className="sobre-image">
                    <img src="./images/building-websites.svg" alt="ilustração da equipe desenvolvendo a página" />
                </div>

                <div className="sobre-texts">
                    <p>A <strong>Orbital</strong> é uma equipe composta por <strong>oito estudantes</strong> de programação, cada um com seus próprios princípios e valores, unidos apenas por sua <strong>insaciável sede por conhecimento</strong>.</p>
                    <p>Já datando meses, a origem do grupo se deu por conta da <strong>fusão de múltiplas squads</strong> do programa <strong>#TeuFuturo 2021</strong>, fator que atuou na contrução da diversidade hoje apresentada pela equipe.</p>
                    <p>Em geral <strong>criativos e motivados</strong>, os integrantes do grupo estão preparados para mudar o mundo. <strong>Nos deixe mudar a sua órbita!</strong></p>
                </div>

            </div>
        </OrbitalSection>
    )
}


export default Sobre