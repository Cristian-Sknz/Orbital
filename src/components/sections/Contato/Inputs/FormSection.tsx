import React from "react";
import { Email, Person, Message } from "@material-ui/icons";

type FormSectionProps = {
  id: string;
  scheme: FormScheme;
  children: JSX.Element | JSX.Element[] | string;
  register(name: string): any;
  error?: {
    message: string;
  };
}

type SchemeType = 'person' | 'email' | 'message' | string;

type FormScheme = {
  type: SchemeType;
  props: InputProps | InputProps & TextAreaProps;
}

type InputProps = {
  className: string;
  placeholder: string;
  type: string;
}

type TextAreaProps = {
  cols: number;
  rows: number;
}

function getTypeElement(type: SchemeType) {
  const props = {style: {verticalAlign: "middle"}};
  if (type === 'person') {
    return React.createElement(Person, props);
  } else if (type === 'email') {
    return React.createElement(Email, props);
  }
  return React.createElement(Message, props);
}

function getInput(type: SchemeType, props: any) {
  if (type === 'message') {
    return React.createElement('textarea', props);
  }
  return React.createElement('input', props);
}

const FormSection: React.FC<FormSectionProps> = (props) => {
  const inputprops = props.scheme.props;
  return (
    <div className="form-section">
      <label htmlFor={props.id}>
        {getTypeElement(props.scheme.type)} {props.children}
      </label>
      {getInput(props.scheme.type, {...inputprops, ...props.register(props.id)})}
      {props.error && (
        <p className="form-message invalid-message">{props.error.message}</p>
      )}
    </div>
  );
};

export default FormSection;
