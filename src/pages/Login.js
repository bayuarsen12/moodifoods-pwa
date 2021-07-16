import React, { useState } from "react";
import Container from "../components/Container";
import HeaderLogin from "../components/HeaderLogin";
import FormLogin from "../components/FormLogin";
import { login } from "../services/auth";

export default function Login(props) {
  const [isLoading, setisLoading] = useState(false);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const handleText = (value, name) => {
    setformData({ ...formData, [name]: value });
  };
  const handleLogin = async () => {
    try {
      setisLoading(true);
      const res = await login(formData);
      if (res?.email) {
        localStorage.setItem("user", JSON.stringify(res));
        setisLoading(false);
        props.history.push("/");
      }
    } catch (err) {
      alert(err.message);
      setisLoading(false);
    }
  };
  return (
    <Container>
      <div>
        <HeaderLogin />
        <div className="p-6">
          <FormLogin
            handleText={handleText}
            formData={formData}
            handleLogin={handleLogin}
            isLoading={isLoading}
          />
        </div>
      </div>
    </Container>
  );
}
