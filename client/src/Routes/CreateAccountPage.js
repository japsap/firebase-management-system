import React, { useState } from "react";

import { createAccount, logAccount } from "../Hooks/fire";

import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { MdAlternateEmail, MdPassword, MdShortText } from "react-icons/md";

const CreateAccount = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();

    createAccount(data.email, data.password, data.username).catch((err) => {
      switch (err.message) {
        case "Firebase: Error (auth/email-already-in-use).":
          setError("Email already in use!");
          break;
      }
    });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();

    logAccount(data.email, data.password).catch((err) => {
      console.log(err.message);
      switch (err.message) {
        case "Firebase: Error (auth/wrong-password).":
          setError("Incorrect Credentials!");
          break;
        case "Firebase: Error (auth/user-not-found).":
          setError("Incorrect Credentials!")
      }
    });
  };

  return (
    <div className="createAccount-container">
      {hasAccount ? (
        <React.Fragment>
          <div className="background-image-register"></div>
          <form className="credentials-container" onSubmit={onSubmitRegister}>
            <div className="credetials-inner-container mt-20">
              <h1>Hello there, new user!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                veritatis modi incidunt ex dicta nemo doloribus provident illo
                sapiente temporibus.
              </p>
              <div className="input-container">
                <input
                  type="text"
                  name="username"
                  required
                  value={data.username}
                  onChange={onChangeHandler}
                />
                <MdShortText className="icon" />
                <label>Username</label>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  required
                  value={data.email}
                  onChange={onChangeHandler}
                />
                <MdAlternateEmail className="icon" />
                <label>Email</label>
              </div>
              <div className="input-container">
                <input
                  type="password"
                  name="password"
                  required
                  value={data.password}
                  onChange={onChangeHandler}
                />
                <MdPassword className="icon" />
                <label>Password</label>
              </div>
              <p className="check">Already have an account? <span className="orange" onClick={() => setHasAccount(prev => !prev)}>Log in</span></p>
              <button className="form-button">Register</button>
              {error && <p className="error-message">{error}</p>}
            </div>
          </form>
        </React.Fragment>
      ) : (
        <React.Fragment>
        <form className="credentials-container" onSubmit={onSubmitLogin}>
          <div className="credetials-inner-container mt-20">
            <h1>Ohh, we have met again <span className="orange">:D</span></h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              veritatis modi incidunt ex dicta nemo doloribus provident illo
              sapiente temporibus.
            </p>
            <div className="input-container">
              <input
                type="email"
                name="email"
                required
                value={data.email}
                onChange={onChangeHandler}
              />
              <MdAlternateEmail className="icon" />
              <label>Email</label>
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                required
                value={data.password}
                onChange={onChangeHandler}
              />
              <MdPassword className="icon" />
              <label>Password</label>
            </div>
            <p className="check">Dont have an account? <span className="orange" onClick={() => setHasAccount(prev => !prev)}>Register</span></p>
            <button className="form-button">Login</button>
            {error && <p className="error-message">{error}</p>}
          </div>
        </form>
        <div className="background-image-login"></div>
      </React.Fragment>
      )}
    </div>
  );
};

export default CreateAccount;
