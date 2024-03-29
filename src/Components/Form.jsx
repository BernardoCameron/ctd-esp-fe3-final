
import { useState } from "react";
import FormStyle from "../styles/Form.module.css";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);
  const [showSend, setShowSend] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 5 && !name.startsWith(' ') && email.length > 5 && email.includes('@') && email.includes('.')) {
      setShowSend(true);
      setShowError(false);
    } else {
      setShowError(true);
      setShowSend(false);
    }

  };


  return (
    <div className={FormStyle.pagContainer}>
      <form onSubmit={handleSubmit}>
        <div className={FormStyle.formContainer}>
          <input className={FormStyle.inputs} type="text" placeholder="Ingrese su nombre" onChange={(e) => setName(e.target.value)} />
          <input className={FormStyle.inputs} type="text" placeholder="Ingrese su email" onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className={FormStyle.buttonContainer}>
          {
            showError && <p className={FormStyle.error}>Verifique los datos ingresados</p>
          }
          {
            showSend && <p className={FormStyle.send}>Formulario enviado con éxito</p>
          }
          <button className={FormStyle.sendButton}>Enviar</button>

        </div>


      </form>
    </div>
  );
};

export default Form;
