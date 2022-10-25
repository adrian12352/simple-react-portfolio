import { useForm } from "../hooks/useForm";
import Loader from "../Loader/Loader";
import Message from "../Message";
import "./contact.scss";

const initialForm = {
  name: "",
  email: "",
  comments: "",
};

const validationForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido ";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido ";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido ";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  return errors;
};
let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const Contact = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationForm);

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name..."
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
          {errors.name && <p style={styles}>{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Email..."
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {errors.email && <p style={styles}>{errors.email}</p>}

          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="Message..."
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
          ></textarea>
          {errors.comments && <p style={styles}>{errors.comments}</p>}
          <input className="send" type="submit" value="Enviar" />
          {loading && <Loader />}
          {response && (
            <Message msg="Los datos han sido enviados" bgColor="#198754" />
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
