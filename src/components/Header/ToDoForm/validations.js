import * as Yup from 'yup';

const validations =Yup.object().shape({
    text:Yup.string().required("Teaxt is a required field")
})

export default validations;