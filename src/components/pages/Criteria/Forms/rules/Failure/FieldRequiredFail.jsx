import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Form - Field Required Failures";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <ul>
          <li className="list-item">
            <div>
              <label htmlFor="fullname2">Full Name *</label>
              <input type="text" id="fullname2" />
            </div>
          </li>

          <li className="list-item">
            <div>
              <label htmlFor="email2">Email *</label>
              <input type="email" id="email2" />
            </div>
          </li>

          <li className="list-item">
            <div>
              <label htmlFor="password2">Password *</label>
              <input type="password" id="password2" />
            </div>
          </li>

          <li className="list-item">
            <div>
              <label htmlFor="phone2">Phone Number *</label>
              <input type="tel" id="phone2" />
            </div>
          </li>

          <li className="list-item">
            <div>
              <label htmlFor="dob2">Date of Birth *</label>
              <input type="date" id="dob2" />
            </div>
          </li>
        </ul>

        <input type="submit" value="Submit" />
      </>
    }
    itemDescription={itemDescription}
  />
);
