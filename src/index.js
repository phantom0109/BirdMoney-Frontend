import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'

import Providers from './contexts';
import "./index.css";
import App from "./App";
require('dotenv').config()


ReactDOM.render(
  <Providers>
    <Router>
      <App />
    </Router>
  </Providers>,
  document.getElementById("root"),
);
