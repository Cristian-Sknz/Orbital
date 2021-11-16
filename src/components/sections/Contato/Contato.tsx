import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import OrbitalSection from '../OrbitalSection'
import './Contato.css'

import { Email, Person, Message } from '@material-ui/icons'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


// validação
const validation = yup.object().shape({
    name: yup.string().required("O nome é obrigatório.").min(5, "O nome deve ter no mínimo 5 caracteres"),
    email: yup.string().required("O email é obrigatório.").email("Esse campo deve ser do tipo e-mail"),
    message: yup.string().required("A mensagem é obrigatória.").min(20, "A mensagem deve ter no mínimo 20 caracteres")
})


const Contato = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    });


    // UI validação
    const messagesVerification = () => {
        const invalidMessages = document.querySelectorAll('.invalid-message')

        invalidMessages.forEach(invalid => {


            if(invalid.innerHTML.length > 1) {
                invalid.setAttribute('style', 'display:block')
                setShowSuccessMessage('')
            } else {
                invalid.setAttribute('style', 'display:none')
            }
        })
    }

    const [ShowSuccessMessage, setShowSuccessMessage] = useState('')


    // show form data and succes message
    const onSubmit = (data: object) => {
        setShowSuccessMessage('show')
        console.table(data)
    };


    return (

        <OrbitalSection id={'contato'} title={'Contato'} showTitle={true} >

            <form onSubmit={handleSubmit(onSubmit)} onChange={messagesVerification}>
                <div className="form-group">
                    <div className="left">
                        <div className="form-section">
                            <label htmlFor="name"><Person style={{ verticalAlign: 'middle' }} /> Nome completo</label>
                            <input className='form-text' type="text" id="name" {...register('name')} />
                            <p className="form-message invalid-message">{errors.name?.message}</p>
                        </div>

                        <div className="form-section">
                            <label htmlFor="email"> <Email style={{ verticalAlign: 'middle' }} /> Endereço de email</label>
                            <input className='form-text' type="email" id="email" placeholder={`email@exemplo.com`} {...register('email')} />
                            <p className="form-message invalid-message">{errors.email?.message}</p>

                        </div>
                    </div>
                    <div className="right">
                        <div className="form-section" >
                            <label htmlFor="message"><Message style={{ verticalAlign: 'middle' }} /> Mensagem</label>
                            <textarea className='form-text' id="message" cols={30} rows={10} placeholder="Deixe sua mensagem!" {...register('message')} />
                            <p className="form-message invalid-message">{errors.message?.message}</p>
                        </div>

                    </div>
                </div>

                <button onClick={messagesVerification} className='form-btn btn' type="submit">Enviar</button>

                <p className={`form-message successful-message ${ShowSuccessMessage}`}>Mensagem enviada com sucesso! Em breve retornaremos!</p>
            </form>
        </OrbitalSection>

    )

}

export default Contato