import { posthog } from "posthog-js";
import React from "react";

export default function aboutCookies() {

    
  const acceptCookies = () => { 
    posthog.opt_in_capturing(); // new
  };

  const declineCookies = () => {
    posthog.opt_out_capturing(); // new
  };

  return (
    <>
      <div>
        <p>
          We use tracking cookies to understand how you use the product
          and help us improve it.
          Please accept cookies to help us improve.
        </p>
        <button type="button" onClick={acceptCookies}>Accept cookies</button>
        <button type="button" onClick={declineCookies}>Decline cookies</button>
      </div>
    </>
  )
}
