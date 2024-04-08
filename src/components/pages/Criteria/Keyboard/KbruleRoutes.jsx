import NonintTabFail from "./Failure/NonintTabFail";
import NonintTabSucc from "./Success/NonintTabSucc";
import React from "react";
import { Route } from "react-router-dom";

export default [
  <>
    <Route
      path="/keyboard/noninteractive-tabindex_success"
      element={<NonintTabSucc />}
    />
    <Route
      path="/keyboard/noninteractive-tabindex_failure"
      element={<NonintTabFail />}
    />
  </>
];
