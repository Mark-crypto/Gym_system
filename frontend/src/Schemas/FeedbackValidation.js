import * as Yup from "yup";

export const FeedbackValidation = Yup.object({
  name: Yup.string().required("Enter your full name"),
  email: Yup.string().email(),
  number: Yup.string().required("Enter your mobile number").min(10).max(12),
  message: Yup.string()
    .min(10, "Text should contain at least 10 characters")
    .required("Enter feedback message"),
});
