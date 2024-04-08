import React from "react";
import List from "../../listRules";

const filters = [{ property: "criteria", value: "document" }];
export default () => <List filters={filters} pageName={"Docmument"} />;
