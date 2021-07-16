import React, { useState } from "react";
import EyeOn from "../assets/eye-on.svg";
import EyeOff from "../assets/eye-off.svg";

export default function FormLogin(props) {
  const { handleText, formData, handleLogin, isLoading } = props;
  const [showPassword, setshowPassword] = useState(false);
  return (
    <div>
      <div>
        <p className="text-gray-400 mb-2">Alamat Email</p>
        <input
          onChange={(e) => {
            handleText(e.target.value, "email");
          }}
          value={formData.email}
          type="text"
          placeholder="Masukkan Email"
          className="w-full text-lg focus:border-black border-b border-solid outline-none pb-3"
        />
      </div>

      <div className="mt-8">
        <p className="text-gray-400 mb-2">Password</p>
        <div className="focus-within:border-black border-b border-solid pb-3 flex items-center">
          <input
            onChange={(e) => {
              handleText(e.target.value, "password");
            }}
            value={formData.password}
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan Password"
            className="w-full text-lg outline-none "
          />
          <img
            onClick={() => setshowPassword(!showPassword)}
            src={showPassword ? EyeOn : EyeOff}
            alt="eyeoff"
            className="ml-4 h-6 cursor-pointer"
          />
        </div>
      </div>
      <div>
        <p className="text-primary cursor-pointer mt-2 ">Lupa password</p>
      </div>
      <button
        onClick={handleLogin}
        className="h-16 flex items-center justify-center w-full text-center text-white font-bold bg-primary rounded-full mt-20"
      >
        {isLoading ? (
          <div className="w-full flex justify-center">
            <svg
              className="animate-spin"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3V3ZM18 30C15.6266 30 13.3066 29.2962 11.3332 27.9776C9.35977 26.6591 7.8217 24.7849 6.91345 22.5922C6.0052 20.3995 5.76756 17.9867 6.23058 15.6589C6.69361 13.3311 7.83649 11.1929 9.51472 9.51472C11.193 7.83649 13.3312 6.6936 15.6589 6.23058C17.9867 5.76755 20.3995 6.00519 22.5922 6.91345C24.7849 7.8217 26.6591 9.35977 27.9776 11.3332C29.2962 13.3065 30 15.6266 30 18C30 21.1826 28.7357 24.2348 26.4853 26.4853C24.2349 28.7357 21.1826 30 18 30V30Z"
                fill="white"
              />
              <path
                d="M30 18H33C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3V6C21.1826 6 24.2348 7.26428 26.4853 9.51472C28.7357 11.7652 30 14.8174 30 18Z"
                fill="white"
              />
            </svg>
          </div>
        ) : (
          "Masuk"
        )}
      </button>
    </div>
  );
}
