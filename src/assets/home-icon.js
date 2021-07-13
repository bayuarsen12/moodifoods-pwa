import React from "react";

export default function HomeIcon(props) {
  const { active } = props;
  return (
    <div>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5958 0.554161C13.3052 0.263581 12.911 0.100342 12.5 0.100342C12.089 0.100342 11.6948 0.263581 11.4041 0.554161L0.554122 11.4042C0.271777 11.6965 0.115546 12.088 0.119077 12.4944C0.122609 12.9008 0.285621 13.2896 0.573003 13.577C0.860386 13.8644 1.24914 14.0274 1.65555 14.0309C2.06195 14.0344 2.45349 13.8782 2.74582 13.5959L3.19997 13.1417V23.35C3.19997 23.7611 3.36328 24.1553 3.65396 24.446C3.94464 24.7367 4.33889 24.9 4.74997 24.9H7.84997C8.26106 24.9 8.65531 24.7367 8.94599 24.446C9.23667 24.1553 9.39997 23.7611 9.39997 23.35V20.25C9.39997 19.8389 9.56328 19.4447 9.85396 19.154C10.1446 18.8633 10.5389 18.7 10.95 18.7H14.05C14.4611 18.7 14.8553 18.8633 15.146 19.154C15.4367 19.4447 15.6 19.8389 15.6 20.25V23.35C15.6 23.7611 15.7633 24.1553 16.054 24.446C16.3446 24.7367 16.7389 24.9 17.15 24.9H20.25C20.6611 24.9 21.0553 24.7367 21.346 24.446C21.6367 24.1553 21.8 23.7611 21.8 23.35V13.1417L22.2541 13.5959C22.5465 13.8782 22.938 14.0344 23.3444 14.0309C23.7508 14.0274 24.1396 13.8644 24.4269 13.577C24.7143 13.2896 24.8773 12.9008 24.8809 12.4944C24.8844 12.088 24.7282 11.6965 24.4458 11.4042L13.5958 0.554161Z"
          stroke={active ? "#FF4A6A" : "#ADADAF"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
