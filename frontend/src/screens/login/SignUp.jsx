import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <form
        className="signIn__form"
        onSubmit={(e) => {
          e.preventDefault();
          setProcessing(true);
          if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
          ) {
            alert("Please fill all the fields");
            setProcessing(false);
            return;
          } else if (name === "") {
            alert("Please fill username field");
            setProcessing(false);
            return;
          } else if (email === "") {
            alert("Please fill email field");
            setProcessing(false);
            return;
          } else if (password === "") {
            alert("Please fill password field");
            setProcessing(false);
            return;
          } else {
            console.log("name", name, "email", email, "password", password);
            axios
              .post("http://localhost:9000/api/users/register", {
                name,
                email,
                password,
              })
              .then((res) => {
                console.log(res);
                setProcessing(false);
                setEmail("");
                setUsername("");
                setPassword("");
                setConfirmPassword("");
                navigate("/");
              })
              .catch((err) => {
                console.log(err);
                setProcessing(false);
              });
          }
        }}
      >
        <div className="signIn__form__heading">Sign Up</div>
        <div className="signIn__form__entry">
          <input
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            className="signIn__form__entry__input"
            type="text"
            placeholder="Enter Username"
          />
        </div>
        <div className="signIn__form__entry">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signIn__form__entry__input"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="signIn__form__entry">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signIn__form__entry__input"
            type="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="signIn__form__entry">
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="signIn__form__entry__input"
            type="password"
            placeholder="Enter Confirm Password"
          />
        </div>

        <div className="signIn__form__entry">
          <button type="submit" className="signIn__form__entry__button">
            SignUp
          </button>
        </div>
      </form>
    </>
  );
}
