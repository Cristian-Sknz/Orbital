import * as React from 'react';
import './projetos.css'
import Projeto from './Projeto';
import OrbitalSection from '../OrbitalSection';

import * as json from './projetos.json'


const Projetos = () => {

    const projects = json.projects

    return (
        <OrbitalSection id={'projetos'} title={'Projetos'} showTitle={true}>
            <ul className="project-row">
                {projects.map((project, index) => {
                    return (
                        <Projeto
                            title={project.title}
                            author={project.author}
                            src={project.image}
                            link={project.link}
                            key={index}
                        />
                    )
                })}
            </ul>
        </OrbitalSection>
    )
}

export default Projetos