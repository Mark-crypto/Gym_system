import { toast } from "react-toastify";
import { authenticate } from "./helper";

export const usernameValidate = async (values) => {
  const errors = usernameVerify({}, values);

  if (values.email) {
    const { status } = await authenticate(values.email);
    if (status !== 200) {
      errors.exist = toast.error("User does not exist");
    }
  }
  return errors;
};
