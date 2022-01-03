import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import "../App.css";

function AlertCom({ alert }) {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div className="alert">
      {alert && (
        <Alert severity={alert.type}>
          <AlertTitle>
            <strong>{capitalize(alert.type)}</strong>
          </AlertTitle>
          {alert.msg}
        </Alert>
      )}
    </div>
  );
}

export default AlertCom;
