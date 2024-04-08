import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ItemPage from "../../layout/rulePage";
import { fetchItemData } from "../../util/dataService";

function AllRulesWithRoutes(props) {
  const { filters } = props;
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const currentPath = pathnames[1];
  const [filteredFormRules, setFilteredFormRules] = useState([]);
  const [itemData, setItemData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch JSON data and apply filters
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(filters) && filters.length) {
          data = data.filter(createFilter(...filters));
        }
        setFilteredFormRules(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [filters]);

  useEffect(() => {
    // Fetch item data when the current path changes
    fetchItemData(currentPath)
      .then((data) => {
        setItemData(data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [currentPath]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <Routes>
          {filteredFormRules.map((formRule) => (
            <Route
              key={formRule.id}
              path={`${formRule.criteria}/${formRule.route}`}
              element={<ItemPage ruleData={formRule} />} // Pass formRule as itemData prop
            />
          ))}
        </Routes>
      )}
    </>
  );
}

export default AllRulesWithRoutes;
