import React from "react";
import Box from "components/Box";
import './App.scss';

const App = ({ title }) => (
  <div className="app">
    <p className="app__title">{title}</p>
    <Box>this is the message</Box>
  </div>
);

export default App;
