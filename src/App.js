import React from 'react';

import Dashboard from "./components/dashboard/index"
import Sidenav from "./components/sidenav/index"

function App() {
  return (
    <div className="app">
      <Sidenav />
      <Dashboard />
    </div>
  );
}

export default App;
