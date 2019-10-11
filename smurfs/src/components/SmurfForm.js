import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";


const initalForm = {
    name: "",
    height: "",
    age: ""
}
export const SmurfForm = ({postSmurf}) => {
    const onSubmit = (formValues, actions) => {
        const newSmurf = {
            name: formValues.name,
            age: formValues.age,
            height: formValues.height,
            id: Date.now(),
        }

        postSmurf(newSmurf)
        actions.resetForm()
    }
    return(
        <Formik
            initialValues= {initalForm}
            onSubmit={onSubmit}
            render = { props => {
                return(
                    <Form>
                        <label>Name
                            <Field name="name" type="text" placeholder="Name" />
                        </label>
                        <label>Height
                            <Field name="height" type="text" placeholder="Height" />
                        </label>
                        <label>Age
                            <Field name="age" type="text" placeholder="Age" />
                        </label>
                        <button type='submit'>Add Smurf</button>
                    </Form>
                )
            }}
        >

        </Formik>
    );
}

export default connect(state => state, actionCreators)(SmurfForm)