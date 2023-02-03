import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput, } from "../components";


export const RegisterFormikPage = () => {

  

  return (
    <div>
      <h1> Register Formik Page</h1>

      <Formik
        initialValues={{
          firstName: "",
          email: "",
          password1: "",
          password2: "",
          
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={ 
          Yup.object({
          firstName: Yup.string()
            .max(12, '15 must be 10 characters or less')
            .min(2, 'Must be almost 2 chacarcters')
            .required('required'),
          email: Yup.string()
            .email()
            .required('required'),
          password1: Yup.string()
          .min(6, 'Password must be 8 characters long')
          .matches(/[0-9]/, 'Password requires a number')
          .matches(/[a-z]/, 'Password requires a lowercase letter')
          .matches(/[A-Z]/, 'Password requires an uppercase letter')
          .matches(/[^\w]/, 'Password requires a symbol'),
          password2: Yup.string()
          .oneOf([Yup.ref('password1'), null], 'Must match "password" field value'),
        })}
      >

        {
          ({ handleReset }) => (

            <Form>
              <MyTextInput name={ "firstName" }  label={ "First Name" } type="text" />
              <MyTextInput name={ "email" }  label={ "Email" }  type="email"/>
              <MyTextInput name={ "password1" }  label={ "Password" }  type="password" />
              <MyTextInput name={ "password2" }  label={ "Repeat Password"  }  type="password"/>

              <button type="submit">submit</button>
              <button type="button" onClick={ handleReset } >Reset form</button>
            </Form>


          )


        }

      </Formik>


    </div>
  );
};
