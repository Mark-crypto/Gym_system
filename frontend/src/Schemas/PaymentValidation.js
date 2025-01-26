import * as Yup from "yup";

const PaymentValidation = Yup.object({
  name: Yup.string().required("Enter your full name"),
  email: Yup.string().email().required("Enter email address"),
  number: Yup.string().required("Enter your mobile number").min(10).max(12),
  amount: Yup.number().required("Enter the amount").min(300).max(1000000),
  packages: Yup.string().required("Select a package"),
  period: Yup.string().required("Select a period"),
});
export default PaymentValidation;
