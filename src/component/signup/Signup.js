import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import flags from "react-phone-number-input/flags";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";


const REGISTER_URL = "/register-generate-otp";
const Signup = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ name, email, phoneNumber }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.accessToken);
      const url = `/get-otp`;
      window.location.href = url;
      setName("");
      setPhoneNumber("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div className="account-pages my-5 pt-sm-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card overflow-hidden">
              <div className="bg-primary bg-soft">
                <div className="row">
                  <div className="col-7">
                    <div className="text-primary p-4">
                      <h5 className="text-primary">Register</h5>
                      <p>Get your Sambhavam account now.</p>
                    </div>
                  </div>
                  {/* <div className="col-5 align-self-end">
                    <img
                      src="assets/images/logo1.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </div> */}
                </div>
              </div>
              <div className="card-body pt-0">
                <div>
                  {/* <a href="index.html"> */}
                  <div className="avatar-md profile-user-wid mb-4">
                    <span className="avatar-title rounded-circle bg-light">
                      <img
                        src="assets/images/logo1.jpg"
                        alt=""
                        className="rounded-circle"
                        height="54"
                      />
                    </span>
                  </div>
                  {/* </a> */}
                </div>
                <div className="p-2">
                  <form
                    // className="needs-validation"
                    // novalidate
                    // action="https://themesbrand.com/skote-springboot/layouts/index.html"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        autoComplete="off"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="useremail" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="useremail"
                        autoComplete="off"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="usernumber" className="form-label">
                        Number
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="usernumber"
                        // defaultCountry="IN" // Set the default country to India (+91)
                        // flags={flags}
                        placeholder="Enter Number"
                        autoComplete="off"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mt-4 d-grid">
                      <button
                        className="btn btn-primary waves-effect waves-light"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <div className="mt-4 text-center">
                    <div>
                      <p>
                        Already have an account ?{" "}
                        <Link to="/login" className="fw-medium text-primary">
                          {" "}
                          Login
                        </Link>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
