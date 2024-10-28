import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

// authenticate function
export const autheticate = async (email) => {
  try {
    return await axios.post("/authenticate", { email });
  } catch (error) {
    return { error: "Username does not exist..." };
  }
};

//get user details
export const getUser = async ({ email }) => {
  try {
    const { data } = await axios.get(`/user/${email}`);
    return data;
  } catch (error) {
    return { error: "Password does not match" };
  }
};

//register user
export const registerUser = async (credentials) => {
  try {
    const {
      data: { message },
      status,
    } = await axios.post(`/register`, credentials);
    let { email } = credentials;
    //send email
    if (status == 201) {
      await axios.post(`/registerMail`, {
        username: "Big Boss",
        userEmail: email,
        text: message,
      });
    }
    return Promise.resolve(message);
  } catch (error) {
    return Promise.reject({ error });
  }
};

//login user
export const verifyPassword = async ({ email, password }) => {
  try {
    if (email) {
      const { data } = await axios.post("/login", { email, password });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password does not match" });
  }
};

//update user profile
export const updateUser = async (response) => {
  try {
    const token = await localStorage.getItem("token");
    const data = await axios.put("/updateUser", response, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Could not update profile...!" });
  }
};

//generate OTP
export const generateOTP = async (email) => {
  try {
    const {
      data: { code },
      status,
    } = await axios.get(`/generateOTP`, { params: { email } });
    //send mail with OTP
    if (status === 201) {
      let {
        data: { email },
      } = await getUser({ email });
      let text = `Your password recovery OTP is ${code}. Verify and recover your password.`;
      await axios.post(`/registerMail`, {
        username: "Big Boss",
        userEmail: email,
        text,
        subject: "Password Recovery OTP",
      });
    }
    return Promise.resolve(code);
  } catch (error) {
    return Promise.reject({ error });
  }
};

//verify OTP
export const verifyOTP = async ({ email, code }) => {
  try {
    const { data, status } = await axios.get(`/verifyOTP`, {
      params: { username, code },
    });
    return { data, status };
  } catch (error) {
    return Promise.reject({ error });
  }
};

//reset password
export const resetPassword = async ({ email, password }) => {
  try {
    const { data, status } = await axios.put(`/resetPassword`, {
      email,
      password,
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
};
