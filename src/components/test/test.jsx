import React from "react";
import { useParams } from "react-router-dom";

export default function Test() {
  const params = useParams();
  console.log(params);
  return <div className="container ">Test</div>;
}
