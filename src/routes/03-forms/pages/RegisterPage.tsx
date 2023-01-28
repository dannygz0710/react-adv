import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';



export const RegisterPage = () => {

  const { name, email, password1, password2, formData, onChange, resetForm, isValidEmail} = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''

 })



    const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
       e.preventDefault();
       console.log( formData)
       resetForm();
    }

  return (
    <div>
      <h1> Register Page</h1>
      <form 
      noValidate
      onSubmit={ onSubmit }
      >

        <input
           name="name"
           type="text" 
           value={ name }
           onChange={ onChange }
           placeholder="Name"
           className={ `${ name.trim().length <= 0 &&  'has-error' }`}
            />
           { name.trim().length <= 0 && <span>Este campo es necesario</span> }

         <input
           name="email"
           type="email" 
           value={ email }
           onChange={ onChange }
           placeholder="Email" 
           className={ `${ !isValidEmail(email)  && 'has-error' }`}
           /> 
           { !isValidEmail(email)  && <span>Invalid Email</span> }

         <input 
           name="password1"
           type="password1" 
           value={ password1 }
           onChange={ onChange }
           placeholder="Password"
           className={ `${ password1.trim().length <= 0 &&  'has-error' }`}
            />
             { password1.trim().length <= 0 && <span>Este campo es necesario</span> }
             { password1.trim().length <= 6 && password1.trim().length > 0 && <span>La contrasena debe de tener 6 caracteres</span> }

          <input
           name="password2"
           type="password2" 
           value={ password2 }
           onChange={ onChange }
           placeholder=" Repeat Password" 
           />
            { password2.trim().length <= 0 && <span>Este campo es necesario</span> }
            { password2.trim().length > 0 && password2.trim() !== password1.trim()  && <span>password must be to equal</span> }

           <button type="submit">Create</button>
           <button type="button" onClick={ resetForm } >Reset form</button>
  
      </form>
    </div>
  );
};
