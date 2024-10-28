export const localVariables = (req, res, next) => {
  req.app.locals = {
    resetSession: false,
    OTP: null,
  };
  next();
};
