import * as React from 'react';
import { useForm } from 'react-hook-form';
import OrbitalSection from '../OrbitalSection'
import './Contato.css'

const Contato = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (

        <OrbitalSection id={'contato'} title={'Contato'} showTitle={true} >

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <div className="left">
                        <div className="form-section">
                            <label htmlFor="name">Nome completo</label>
                            <input className='form-text' type="text" id="name" {...register('name')} />
                        </div>

                        <div className="form-section">
                            <label htmlFor="email">Endereço de email</label>
                            <input className='form-text' type="email" id="email" placeholder="email@exemplo.com" {...register('email')} />
                        </div>
                    </div>
                    <div className="right">
                        <div className="form-section">
                            <label htmlFor="message">Mensagem</label>
                            <textarea className='form-text' id="message" cols={30} rows={10} placeholder="Deixe sua mensagem!" {...register('message')} />
                        </div>
                    </div>
                </div>

                <button className='form-btn btn' type="submit">Enviar</button>
            </form>

        </OrbitalSection>

    )

}


export default Contato