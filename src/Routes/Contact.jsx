import Form from '../Components/Form'
import FormStyle from '../styles/Form.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className={FormStyle.pagContainer}>

      <div className={FormStyle.textContainer}>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>

      <div>
        <Form />
      </div>


    </div>
  )
}

export default Contact