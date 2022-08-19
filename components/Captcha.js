import ReCAPTCHA from "react-google-recaptcha";

import React from "react";

function Captcha() {
    const site_key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="my-3">
      <ReCAPTCHA sitekey={site_key} onChange={onChange} />
    </div>
  );
}

export default Captcha;

