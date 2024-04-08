import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Forms - Captcha Failures";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <form action="?" method="POST">
          <img src="captcha_image.png" alt="CAPTCHA Image" />
          <input
            type="text"
            name="captcha"
            placeholder="Enter the characters from the image"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <form action="?" method="POST">
          <img src="captcha_image.png" alt="CAPTCHA Image" />
          <a href="audio_captcha.mp3">Listen to the CAPTCHA</a>
          <input
            type="text"
            name="captcha"
            placeholder="Enter the characters from the image or audio"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <form action="?" method="POST">
          <div>What is 3 + 4?</div>
          <input type="text" name="captcha" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </>
    }
    itemDescription={itemDescription}
  />
);
