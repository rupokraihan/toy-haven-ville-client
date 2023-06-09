import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import useTabTitle from "../../hooks/useTabTitle";

const Login = () => {
  const { signIn, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  useTabTitle("Login")

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        setUser(result.user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div>
      <div className="hero bg-white">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-4xl font-semibold mt-20 mb-8">
              Login
              <span className="text-blue-600 font-serif font-extrabold ml-4 tracking-widest">
                toyHaven Ville
              </span>
            </h1>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <div
                    to="/register"
                    className="label-text-alt link link-hover mt-4"
                  >
                    <Link to="/register">Create New Account</Link>
                  </div>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn bg-blue-600 text-white font-semibold border-0 tracking-widest hover:bg-gray-600">
                  Login
                </button>
              </div>
              <div className="form-control mt-4">
                <p className="text-lg text-center mb-4">or</p>
                <button
                  onClick={handleGoogleLogin}
                  className="btn bg-blue-600 text-white font-semibold border-0 tracking-widest hover:bg-gray-600"
                >
                  Sign in with google
                </button>
              </div>
            </form>
            <p className="text-center text-red-700 mb-4">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
