import React from "react";
import IssueSuccess from "../../../../../layout/issueSuccess";

const itemDescription = "Forms - Captcha Success";

export default () => (
  <IssueSuccess
    itemContent={
      <>
        <form action="?" method="POST">
          <div class="g-recaptcha" data-sitekey="your_site_key"></div>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <form action="?" method="POST">
          <button
            class="g-recaptcha"
            data-sitekey="your_site_key"
            data-callback="onSubmit"
            data-action="submit"
          >
            Submit
          </button>
        </form>
        {function onSubmit(token) {
          document.getElementById("demo-form").submit();
        }}

        <form id="demo-form" action="?" method="POST">
          <input type="submit" value="Submit" />
        </form>
      </>
    }
    itemDescription={itemDescription}
  />
);
