import { Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";
import { MyTextInput, MySelectInput, MyCheckbox  } from "../components";


export const FormikAbstract = () => {


  return (
    <div>
      <h1> Formik Abstract</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: ""
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, '15 must be 10 characters or less')
            .required('required'),
          lastName: Yup.string()
            .max(15, '15 must be 10 characters or less')
            .required('required'),
          email: Yup.string()
            .email()
            .required('required'),
          terms: Yup.boolean()
            .oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opción no es permitida.')
            .required('Requerido')
        })}
      >

        {
          (formik) => (

            <Form>
              <MyTextInput name={ "firstName" }  label={ "First Name" } />
              <MyTextInput name={ "lastName" }  label={ "Last Name" } />
              <MyTextInput name={ "email" }  label={ "Email" } />


            
              <MySelectInput name="jobType" label="Job Type">
                <option value="">Pick something</option>
                <option value="developer">Develper</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </MySelectInput>
              {/* { touched.jobType && errors.jobType && <span>{ errors.jobType }</span> } */}

              
                <MyCheckbox name="terms"  label="Terms and Condition"/>
          
            
              {/* { touched.terms && errors.terms && <span>{ errors.terms }</span> } */}

              <button type="submit">submit</button>
            </Form>


          )


        }

      </Formik>


    </div>
  );
};
