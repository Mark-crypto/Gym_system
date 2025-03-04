import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../model/user.js";
import crypto from "crypto";

export default passport.use(
  new LocalStrategy({ usernameField: email }, (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: "User not found" });
      //hash password with crypto

      const hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, "sha512");
      if (!crypto.timingSafeEqual(hash, user.password)) {
        return done(null, false, { message: "Invalid password" });
      }
      if (!user.comparePassword(password))
        return done(null, false, { message: "Invalid password" });
      return done(null, user);
    });
  })
);
