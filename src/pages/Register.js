import React, { useState } from "react";
import Container from "../components/Container";
import HeaderRegister from "../components/HeaderRegister";
import FormRegister from "../components/FormRegister";
import { register } from "../services/auth";

export default function Register(props) {
  const [isLoading, setisLoading] = useState(false);
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    roles: ["user"],
  });
  const handleText = (value, name) => {
    setformData({ ...formData, [name]: value });
  };
  const handleRegister = async () => {
    try {
      setisLoading(true);
      const res = await register(formData);
      if (res?.data) {
        localStorage.setItem("user", JSON.stringify(res?.data));
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
        <HeaderRegister />
        <div className="p-6">
          <FormRegister
            handleText={handleText}
            formData={formData}
            handleRegister={handleRegister}
            isLoading={isLoading}
          />
        </div>
      </div>
    </Container>
  );
}
