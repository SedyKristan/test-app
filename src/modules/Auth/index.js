import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

import Button from "@components/Elements/Button";
import Container from "@components/Elements/Container";
import styles from "./utils/auth.module.css";
import logo from "@images/auth__logo.png";
import Message from "@components/Elements/Message";
import { validationSchema } from "./services/validationSchema";
import { authPasswordValidation } from "./utils/authPasswordValidation";
import { isEmptyObject } from "src/services/general";

const Auth = ({ formFields, module, ctaText }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLoginDisabled, setIsLoginDisabled] = useState(false);
  const [errors, setErrors] = useState({});
  const [startErrorReading, setStartErrorReading] = useState(false);

  useEffect(() => {
    if (module === "Sign Up" && startErrorReading) {
      const errors = validationSchema({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      setErrors(errors);
    }
  }, [module, startErrorReading, name, email, password, confirmPassword]);

  const handleStartErrorReading = () => {
    if (!startErrorReading) {
      setStartErrorReading(true);
    } else {
      setStartErrorReading(false);
    }
  };

  const handleChange = (e, fieldType, fieldLabel) => {
    const value = e.target.value;

    if (fieldType === "email") {
      setEmail(value);
    } else if (fieldType === "password" && fieldLabel === "Password") {
      setPassword(value);
    } else if (fieldType === "text") {
      setName(value);
    } else if (fieldType === "password" && fieldLabel === "Confirm Password") {
      setConfirmPassword(value);
    }
  };

  const togglePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };

  const handleFormSubmit = (e) => {
    if (module === "Sign In") {
      if (email === "test@example.com" && password === "Testpassw0rd1") {
        handleSuccessLogin(e);
      } else {
        handleFailedLogin(e);
      }
    } else {
      handleSignUp(e);
    }
  };

  const handleSignUp = (e) => {
    if (!isEmptyObject(errors)) {
      alert("Invalid Information, try again!");
      return;
    }
    e.preventDefault();
    router.push("/");
  };

  const handleSuccessLogin = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    router.push("/");
  };

  const handleFailedLogin = (e) => {
    e.preventDefault();
    const updatedLoginAttempts = loginAttempts + 1;
    setLoginAttempts(updatedLoginAttempts);
    if (isLoginDisabled) {
      alert("Login is disabled. Please try again later.");
      return;
    }

    if (loginAttempts >= 2) {
      setIsLoginDisabled(true);
      setTimeout(() => {
        setIsLoginDisabled(false);
        setLoginAttempts(0);
      }, 60000);
    }
    alert("Invalid email or password");
  };

  const handleForgotPassword = () => {
    const popup = window.open(
      "https://www.google.com",
      "ForgotPasswordPopup",
      "width=600,height=400"
    );
    if (popup) {
      popup.focus();
    }
  };

  return (
    <Container customClassName={styles.auth_container}>
      <div className={classNames(styles.image_wrapper)}>
        <div className={classNames(styles.image_box)}>
          <Image
            layout="responsive"
            objectFit="contain"
            src={logo}
            alt="Brand logo"
            objectPosition="center"
          />
        </div>
      </div>
      <h1 className={classNames(styles.auth_title)}>
        {module === "Sign In" ? (
          <>
            Hello!
            <br />
            Welcome Back
          </>
        ) : (
          <>
            <br />
            Welcome
          </>
        )}
      </h1>
      <div className={classNames(styles.auth_card)}>
        <form onSubmit={(e) => handleFormSubmit(e)}>
          {formFields.map((field, index) => (
            <div className={classNames(styles.auth_email_wrapper)} key={index}>
              <input
                type={
                  field.label === "Password"
                    ? isShowPassword
                      ? "text"
                      : "password"
                    : field.label === "Confirm Password"
                    ? isShowConfirmPassword
                      ? "text"
                      : "password"
                    : field.type
                }
                id={field.label}
                name={field.label}
                value={
                  field.type === "email"
                    ? email
                    : field.type === "password" && field.label === "Password"
                    ? password
                    : field.type === "text" && field.label === "Name"
                    ? name
                    : field.type === "password" &&
                      field.label === "Confirm Password"
                    ? confirmPassword
                    : ""
                }
                onChange={(e) => handleChange(e, field.type, field.label)}
                onBlur={handleStartErrorReading}
                required
                className="label"
                placeholder=""
              />
              <label htmlFor={field.label}>{field.label}</label>
              {field.type === "password" && field.label === "Password" && (
                <ul className={classNames("tiny", styles.error_text)}>
                  {authPasswordValidation.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
              {field.type === "password" && field.label === "Password" ? (
                <span
                  className={classNames(
                    "material-symbols-rounded",
                    styles.auth_icon
                  )}
                  onClick={togglePasswordVisibility}
                >
                  {isShowPassword ? "visibility_off" : "visibility"}
                </span>
              ) : field.type === "password" &&
                field.label === "Confirm Password" ? (
                <span
                  className={classNames(
                    "material-symbols-rounded",
                    styles.auth_icon
                  )}
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {isShowConfirmPassword ? "visibility_off" : "visibility"}
                </span>
              ) : (
                <span
                  className={classNames(
                    "material-symbols-rounded",
                    styles.auth_icon
                  )}
                >
                  expand_more
                </span>
              )}
            </div>
          ))}
          {!isEmptyObject(errors) && <Message errors={errors} />}
          <div className={classNames(styles.auth_links_wrapper)}>
            {module === "Sign In" && (
              <a
                id="link"
                className={classNames(styles.auth_link)}
                onClick={handleForgotPassword}
              >
                Forgot Password
              </a>
            )}
            <Button
              label={ctaText}
              type="submit"
              className={styles.auth_button}
              isDisabled={isLoginDisabled}
            />
            {module === "Sign In" && (
              <Link href={"/account/sign-up"} legacyBehavior>
                <a id="link" className={classNames(styles.auth_link)}>
                  Sign up
                </a>
              </Link>
            )}
            {module === "Sign Up" && (
              <p className={classNames("label", styles.auth_sublink)}>
                Already have an account?{" "}
                <strong onClick={() => router.push("sign-in")}>Sign in</strong>
              </p>
            )}
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Auth;
