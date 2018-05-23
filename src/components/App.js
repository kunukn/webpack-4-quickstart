import React from "react";
import Box from "components/Box";

const App = ({ title }) => (
  <div className="content">
    <p className="content__title">{title}</p>
    <Box>this is the message</Box>
  </div>
);

export default App;
