import React, { useState } from "react";
import axios from "axios";

function App() {
  const [devMsg, setDevMsg] = useState("");
  const [prodMsg, setProdMsg] = useState("");

  const fetchDev = async () => {
    const res = await axios.get("http://localhost:3001/api");
    setDevMsg(res.data.message);
  };

  const fetchProd = async () => {
    const res = await axios.get("http://localhost:3002/api");
    setProdMsg(res.data.message);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Multi-Environment Frontend</h1>
      <button onClick={fetchDev}>Fetch from Dev Backend</button>
      <p>{devMsg}</p>
      <button onClick={fetchProd}>Fetch from Prod Backend</button>
      <p>{prodMsg}</p>
    </div>
  );
}

export default App;
