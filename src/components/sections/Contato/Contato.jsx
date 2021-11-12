import * as React from 'react';
import { useForm } from 'react-hook-form';
import OrbitalSection from '../OrbitalSection'
import './Contato.css'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




// validação
const validation = yup.object().shape({
    name: yup.string().required("O nome é obrigatório.").min(5, "O nome deve ter no mínimo 5 caracteres"),
    email: yup.string().required("O email é obrigatório.").email("Esse campo deve ser do tipo e-mail"),
    message: yup.string().required("A mensagem é obrigatória.").min(20, "A mensagem deve ter no mínimo 20 caracteres")
})


// UI validação
const messagesVerification = () => {
    const invalidMessages = document.querySelectorAll('.invalid-message')
    const successfulMessage = document.querySelector('.successful-message')

    invalidMessages.forEach(invalid => {
        if (invalid.innerText.length > 1) {
            invalid.style.display = 'block'
            successfulMessage.style.display = 'none'
        } else {
            invalid.style.display = 'none'
        }

    })
}

const successMessage = () => {
    const message = document.querySelector('.successful-message')
    message.style.display = 'block'
}


const Contato = () => {



    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    });

    const onSubmit = (data) => {
        console.log(data)
        successMessage()
    }
        ;




    return (

        <OrbitalSection id={'contato'} title={'Contato'} showTitle={true} >

            <form onSubmit={handleSubmit(onSubmit)} onChange={messagesVerification}>
                <div className="form-group">
                    <div className="left">
                        <div className="form-section">
                            <label htmlFor="name">Nome completo</label>
                            <input className='form-text' type="text" id="name" {...register('name')} />
                            <p className="form-message invalid-message">{errors.name?.message}</p>
                        </div>

                        <div className="form-section">
                            <label htmlFor="email">Endereço de email</label>
                            <input className='form-text' type="email" id="email" placeholder="email@exemplo.com" {...register('email')} />
                            <p className="form-message invalid-message">{errors.email?.message}</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="form-section" >
                            <label htmlFor="message">Mensagem</label>
                            <textarea className='form-text' id="message" cols={30} rows={10} placeholder="Deixe sua mensagem!" {...register('message')} />
                            <p className="form-message invalid-message">{errors.message?.message}</p>
                        </div>

                    </div>
                </div>


                <button onClick={messagesVerification} className='form-btn btn' type="submit">Enviar</button>

                <p className="form-message successful-message">Mensagem enviada com sucesso! Em breve retornaremos!</p>

            </form>

        </OrbitalSection>

    )

}


export default Contato