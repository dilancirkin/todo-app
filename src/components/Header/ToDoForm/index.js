import React from "react";
import { Field, Formik, Form } from "formik";
import validationSchema from "./validations";
import { useTodo } from "../../../context/ToDoContext";

const ToDoForm = () => {
  const { addTodo } = useTodo();

  return (
    <Formik
      initialValues={{ text: "" }}
      onSubmit={(values, bag) => {
        console.log(values);
        addTodo(values.text);

        bag.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done"
          autoFocus
          id="text"
          name="text"
        />
      </Form>
    </Formik>
  );
};

export default ToDoForm;
