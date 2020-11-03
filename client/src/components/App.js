import React from "react";

import Header from "./Header";

const App = ({ children }) => {
  return (
    <div>
      <Header />
      <div>Hi</div>
      {children}
    </div>
  );
};

export default App;
