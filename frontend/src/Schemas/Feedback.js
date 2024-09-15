import Yup from "yup";

export const feedBackSchema = Yup.object({
  name: Yup.string().required("Enter your full name"),
  email: Yup.string()
    .email()
    .matches(
      /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
    ),
  number: Yup.string().required("Enter your mobile number").min(10).max(12),
  message: Yup.string()
    .min(10, "Text should contain at least 10 characters")
    .required("Enter feedback message"),
});
