const SignUp = ({
  name,
  setName,
  Password,
  setPassword,
  Email,
  setEmail,
  SetConfirmPass,
  ConfirmPassValue,
  SignUpForm,
  data,
}) => {
  return (
    <div className="flex justify-center align-middle items-center h-screen">
      <div className="bg-white dark:bg-stone-800 dark:text-white  shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Create an Account
        </h2>

        <form onSubmit={SignUpForm}>
          <div className="mb-4">
            <label className="block ">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              //   required
            />
          </div>

          <div className="mb-4">
            <label className="block">Email Address</label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              //   required
            />
          </div>

          <div className="mb-4">
            <label className="block ">Password</label>
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              //   required
            />
          </div>

          <div className="mb-6">
            <label className="block ">Confirm Password</label>
            <input
              value={ConfirmPassValue}
              onChange={(e) => SetConfirmPass(e.target.value)}
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              //   required
            />
          </div>

          <button
            disabled={
              Email.trim() === 0 ||
              Password.length < 6 ||
              ConfirmPassValue !== Password
            }
            type="submit"
            className={`w-full disabled:bg-gray-700 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300 `}
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
        {data && (
          <>
            <p>Name: {data.name}</p>
            <p>Email:{data.email}</p>
            <p>Password:{data.password}</p>
            <p>Confirm Password: {data.confirmPassword}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
