import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const { user, createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  console.log(createUser);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.userphoto.value;
    console.log(name, email, password, photo);

    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;

        userInfo(loggedUser, name, photo)
          .then((result) => {})
          .catch((error) => console.log(error.message));

        setUser(loggedUser);
        form.reset();
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <div className="hero bg-white">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-4xl font-semibold mt-20 mb-8">
              Register
              <span className="text-[#54930b] font-bold ml-4">
                toyHaven Ville
              </span>
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Name"
                  className="input input-bordered"
                />

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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="userphoto"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    to="/login"
                    className="label-text-alt link link-hover mt-4"
                  >
                    Already have an Account
                  </Link>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn bg-[#9ccd64] text-gray-950 font-semibold border-0 hover:bg-gray-400">
                  Register
                </button>
              </div>
            </form>

            <p className="text-red-700 text-center mb-4">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
