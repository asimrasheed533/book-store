import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <form
        className="signIn__form"
        onSubmit={(e) => {
          e.preventDefault();

          if (email === "" || password === "") {
            alert("Please fill all the fields");

            return;
          } else if (email === "") {
            alert("Please fill email field");

            return;
          } else if (password === "") {
            alert("Please fill password field");

            return;
          } else {
            console.log("email", email, "password", password);
            axios
              .post("http://localhost:9000/api/users/login", {
                email,
                password,
              })
              .then((res) => {
                console.log(res);
                setEmail("");
                setPassword("");
                navigate("/");
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }}
      >
        <div className="signIn__form__heading">LogIn</div>

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
        <div className="signin__entry__rember">
          <input type="checkbox" id="remeber" />
          <label htmlFor="remeber" className="signin__entry__rember__text">
            Remember me
          </label>
        </div>
        <Link to="/forgot" className="signin__entry__rember__text">
          forgot password
        </Link>
        <div className="signIn__form__entry">
          <button type="submit" className="signIn__form__entry__button">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
