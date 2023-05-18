import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "../../api/axios";


const LOGIN_URL = "/login-generate-otp";
const Login = () => {

  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(LOGIN_URL, JSON.stringify({ email }), {
        headers: { "Content-Type": "application/json" },
        withCredentials:true
      });
      setResponse(response.data);
      setIsLoading(false);
      console.log(JSON.stringify(response?.data))
      console.log(response.data); // Log the response data
      navigate('/get-otp');

      setEmail("");
    } catch (error) {
      console.log(error);
      setError(error)
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (response) {
    console.log(response); // Log the response object
    navigate('/get-otp'); // Navigate to the /get-otp page
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }


 

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
                        <img src="assets/images/logo1.jpg" alt="" className="rounded-circle" height="55" />
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
                        <label htmlFor="useremail" className="form-label">
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

                      {/* <div className="mb-3">
                      <label className="form-label">OTP</label>
                      <div className="input-group auth-pass-inputgroup">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter OTP"
                        />
                      </div>
                    </div> */}

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember-check"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="remember-check"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      {/* <div className="mt-4 text-center">
                                        <h5 className="font-size-14 mb-3">Sign in with</h5>
        
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="#" className="social-list-item bg-primary text-white border-primary">
                                                    <i className="mdi mdi-facebook"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="social-list-item bg-info text-white border-info">
                                                    <i className="mdi mdi-twitter"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" className="social-list-item bg-danger text-white border-danger">
                                                    <i className="mdi mdi-google"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}

                      {/* <div className="mt-4 text-center">
                                        <a href="auth-recoverpw.html" className="text-muted"><i className="mdi mdi-lock me-1"></i> Forgot your password?</a>
                                    </div> */}
                    </form>
                  <div className="mt-4 text-center">
                    <p>
                      Don't have an account ?{" "}
                      <Link to="/" className="fw-medium text-primary">
                        {" "}
                        Signup now{" "}
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
  );
};

export default Login;
