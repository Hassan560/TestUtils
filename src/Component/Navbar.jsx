import React from "react";
import { Switch, FormControlLabel, FormGroup } from "@mui/material";
import "../App.css";

function Navbar({ toggle, theme }) {
  return (
    <div className={`navbar ${theme ? "light" : "dark"}`}>
      <div>
        <h4>TextUtils</h4>
      </div>
      <FormGroup onClick={toggle}>
        <FormControlLabel
          control={<Switch checked={!theme} />}
          label={theme ? "Dark Mode" : "Light Mode"}
        />
      </FormGroup>
    </div>
  );
}

export default Navbar;
