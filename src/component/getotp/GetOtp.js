import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

// const VERIFY_OTP_URL = "/register-verify-otp";
const VERIFY_OTP_URL = "/login-verify-otp";
const GetOtp = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        VERIFY_OTP_URL,
        JSON.stringify({ otp, email }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setResponse(response.data);
      setEmail(response?.data?.userInfo?.email);
      setIsLoading(false);
      console.log(response.data);
      navigate("/home", { state: { email } });
      setOtp("");
      setEmail("");
    } catch (error) {
      console.log(error);
      setError(error);
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (response) {
    console.log( response);
    navigate("/home", { state: { email } });
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(response);

  return (
    <>
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden">
                <div className="bg-primary bg-soft">
                  <div className="row">
                    <div className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Sambhavam.</p>
                      </div>
                    </div>
                    <div className="col-5 align-self-end">
                      {/* <img src="assets/images/profile-img.png" alt="" className="img-fluid" /> */}
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="auth-logo">
                    {/* <a href="index.html" className="auth-logo-light"> */}
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img
                          src="assets/images/logo1.jpg"
                          alt=""
                          className="rounded-circle"
                          height="55"
                        />
                      </span>
                    </div>
                    {/* </a> */}
                  </div>
                  <div className="p-2">
                    <form
                      // className="form-horizontal"
                      // action="https://themesbrand.com/skote-springboot/layouts/index.html"
                      onSubmit={handleSubmit}
                    >
                      <div className="mb-3">
                        <label for="useremail" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="useremail"
                          placeholder="Enter Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">OTP</label>
                        <div className="input-group auth-pass-inputgroup">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember-check"
                      />
                      <label className="form-check-label" for="remember-check">
                        Remember me
                      </label>
                    </div> */}

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary waves-effect waves-light"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                    {/* <div className="mt-4 text-center">
                    <p>
                      Don't have an account ?{" "}
                      <a href="/signup" className="fw-medium text-primary">
                        {" "}
                        Signup now{" "}
                      </a>{" "}
                    </p>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetOtp;
