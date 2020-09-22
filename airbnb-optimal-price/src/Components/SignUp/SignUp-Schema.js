import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({

   name: yup
      .string() 
      .required('Username is required')
      .min(5, 'Must be 5 characters or longer'),

   email: yup
      .string()
      .email('Must be a valid email')
      .required('Email is required'),

   phone: yup
      .string()
      .min(10, 'Must be 10 numbers')
      .matches(phoneRegExp, 'Phone number is not valid'),
   
   password: yup
      .string()
      .required('Need password')
      .min(8, 'Minimum 8 characters'),

   termStatus: yup
      .boolean()
      .oneOf([true], 'Please agree to term of use') // If it's true (checked), validation will pass, if not, the message 'Must be checked' will be pop out.

})

export default schema