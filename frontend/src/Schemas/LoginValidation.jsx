import * as Yup from "yup";

export const LoginValidation = Yup.object({
  email: Yup.string()
    .min(3)
    .email("Enter a valid email")
    .required("Please enter email address"),
  password: Yup.string().min(8).required("Please enter password"),
});
//.matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain at least one special character')
//.matches(/\d/, 'Must contain at least one number');
// .matches(/[0-9]/, 'Password requires a number')
//     .matches(/[a-z]/, 'Password requires a lowercase letter')
//     .matches(/[A-Z]/, 'Password requires an uppercase letter')
//.matches(/[^\w]/, 'Password requires a symbol'),
