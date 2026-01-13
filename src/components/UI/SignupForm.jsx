import { useState } from "react";
import SignUp from "../SignUp";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [data, setData] = useState("");

  const SignUpForm = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      Email.trim() === "" ||
      Password.trim() === "" ||
      ConfirmPass.trim === ""
    ) {
      alert("fill all the Fields ");
    }
    if (Password.length < 6) {
      alert("Password should be at least 6 digits ");
    }
    setData({
      name: name,
      email: Email,
      password: Password,
      confirmPassword: ConfirmPass,
    });
    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      alert("something went wrong  ");
    } else {
      console.log(data);
      alert("User Signup Successfully");
    }
    setConfirmPass("");
    setEmail("");
    setName("");
    setPassword("");
  };
  return (
    <>
      <div>
        <SignUp
          ConfirmPassValue={ConfirmPass}
          SetConfirmPass={setConfirmPass}
          setEmail={setEmail}
          name={name}
          setName={setName}
          SignUpForm={SignUpForm}
          Email={Email}
          setPassword={setPassword}
          Password={Password}
          data={data}
        />
      </div>
    </>
  );
};

export default SignupForm;
