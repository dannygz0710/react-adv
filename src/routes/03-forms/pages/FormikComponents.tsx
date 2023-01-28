import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";



export const FormikComponents = () => {


  return (
    <div>
      <h1> Formik Components</h1>

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
          ({ touched, errors }) => (

            <Form>

              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" type="text" />
              { touched.firstName && errors.firstName && <span>{ errors.firstName }</span> }

              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" type="text" />
              { touched.lastName && errors.lastName && <span>{ errors.lastName }</span> }

              <label htmlFor="email">Email Address</label>
              <Field name="email" type="email" />
              { touched.email && errors.email && <span>{ errors.email }</span> }


              <label htmlFor="jobType">Job Type</label>
              <Field name="jobType" as="select">
                <option value="">Pick something</option>
                <option value="developer">Develper</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </Field>
              { touched.jobType && errors.jobType && <span>{ errors.jobType }</span> }

              <label>
                <Field name="terms" type="checkbox" />
                Terms and conditions
              </label>
              { touched.terms && errors.terms && <span>{ errors.terms }</span> }

              <button type="submit">submit</button>
            </Form>


          )


        }

      </Formik>


    </div>
  );
};
