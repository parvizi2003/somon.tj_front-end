import React from "react";

export default function AddPostInput({ children, className = "" }) {
  const [value, setValue] = React.useState("");
  return (
    <>
      <input
        type="text"
        className={className}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
