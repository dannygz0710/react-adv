import { Form, Formik } from "formik";
import { MySelectInput, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";
import * as Yup from 'yup'


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value

  if( !input.validations) continue;

  let schema = Yup.string()

  for (const rule of input.validations) {
    if( rule.type === 'required'){
       schema = schema.required('field required')
    }
    if( rule.type === 'minLength'){
       schema = schema.min((rule as any ).value || 2 , `Minimun ${ (rule as any ).value || 2 } characters` )
    }
    if( rule.type === 'email'){
       schema = schema.email()
    }
  }
  requiredFields[input.name] = schema;
}

const validationsSchema = Yup.object({ ...requiredFields })


export const DinamicsForms = () => {
  return (
    <div>
      <h1>Dinamics Forms</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={ validationsSchema }
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form noValidate>

            {
              formJson.map(({ type, name, placeholder, label, options }) => {
                if (type === 'input' || type === 'password' || type === 'email') {

                  return <MyTextInput
                    key={ name }
                    type={ (type as any) }
                    name={ name }
                    label={ label }
                    placehholder={ placeholder }
                  />

                } else if (type === 'select') {
                  return (
                    <MySelectInput
                      key={ name }
                      label={ label }
                      name={ name }
                    >
                      <option value=""> Select an option</option>
                      {
                        options?.map(({ id, label }) => (
                          <option value={ id } key={ id }>{ label }</option>

                        ))
                      }
                    </MySelectInput>
                  )
                }


                throw new Error(`El type: ${ type }, no es soportado`);
              })}

            <button type="submit">submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
};
