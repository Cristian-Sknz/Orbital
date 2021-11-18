import React from "react";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import OrbitalSection from "../OrbitalSection";
import { useReveal } from "~/lib/hooks";

import Inputs from './Inputs/schemes.json';
import FormSection from './Inputs/FormSection';

import "./Contato.css";

// validação
const validation = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório.")
    .min(5, "O nome deve ter no mínimo 5 caracteres"),
  email: yup
    .string()
    .required("O email é obrigatório.")
    .email("Esse campo deve ser do tipo e-mail"),
  message: yup
    .string()
    .required("A mensagem é obrigatória.")
    .min(20, "A mensagem deve ter no mínimo 20 caracteres"),
});

const Contato = () => {
  const [ShowSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const left = useReveal<HTMLDivElement>('left', { width: 968, origin: 'top' });
  const right = useReveal<HTMLDivElement>('right', { width: 968, origin: 'bottom' });
  const button = useReveal<HTMLButtonElement>('bottom');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validation),
  });

  // show form data and succes message
  const onSubmit = (data: any) => {
    setShowSuccessMessage(true);
    console.table(data);
  };

  return (
    <OrbitalSection id={"contato"} title={"Contato"} showTitle={true}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <div className="left" ref={left}>
            <FormSection scheme={Inputs[0]} 
              register={register}
              id={'name'}
              error={errors?.name}>
              Nome Completo
            </FormSection>

            <FormSection scheme={Inputs[1]} 
              register={register}
              id={'email'}
              error={errors?.email}>
              Endereço de email
            </FormSection>
          </div>

          <div className="right" ref={right}>
          <FormSection scheme={Inputs[2]} 
              register={register}
              id={'message'}
              error={errors?.message}>
              Mensagem
            </FormSection>
          </div>
        </div>

        <button className="form-btn btn" type="submit" ref={button}>Enviar</button>
        {ShowSuccessMessage && (
          <p className={`form-message successful-message`}>
            Mensagem enviada com sucesso! Em breve retornaremos!
          </p>
        )}
      </form>
    </OrbitalSection>
  );
};

export default Contato;
