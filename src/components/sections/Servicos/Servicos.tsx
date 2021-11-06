import * as React from 'react';
import OrbitalSection from '../OrbitalSection';
import './servicos.css'

import Activity from './Activity';
// import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome';
import { faCode, faPencilRuler, faPoll } from '@fortawesome/free-solid-svg-icons'


const Servicos = () => {

    const activities = [
        { name: 'Desenvolvimento Web', icon: faCode },
        { name: 'Design Web', icon: faPencilRuler },
        { name: 'Marketing Digital', icon: faPoll },
    ]

    return (
        <OrbitalSection id={'servicos'} title={'Serviços'} showTitle={true}>
            <div className="activities">
                {activities.map((activity, index) => <Activity icon={activity.icon} key={index} title={activity.name} />
                )}
            </div>
        </OrbitalSection>
    )
}


export default Servicos