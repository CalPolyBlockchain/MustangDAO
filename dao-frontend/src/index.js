import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ConvexProvider, ConvexReactClient } from "convex-dev/react";
// import convexConfig from "./convex.json";

import './index.css';
import Wrapper from './Wrapper';
import reportWebVitals from './reportWebVitals';

// const convex = new ConvexReactClient(convexConfig.origin);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ConvexProvider convex={convex}> */}
    <Wrapper/>
    {/* </ConvexProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
