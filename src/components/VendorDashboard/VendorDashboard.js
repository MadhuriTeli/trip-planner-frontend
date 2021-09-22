import React, { useState, useEffect } from "react";

function VendorDashboard() {
  const [vendor, setvendor] = useState({ email: "", password: "" });
  useEffect(() => {
    var a = localStorage.getItem("myData");
    var b = JSON.parse(a);
    console.log(b.fname);
    setvendor(b);
    console.log(vendor.fname);
  }, [vendor.fname]);
  return (
    <>
      <div class="col-sm-12 btn btn-primary">Dashboard</div>
      <h1>Welcome :{vendor.fname}</h1>
    </>
  );
}

export default VendorDashboard;
