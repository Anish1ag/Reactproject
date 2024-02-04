import { useState } from "react";
import Content from "./components/Content";
import Layout from "./components/Layout";

function App() {
  const [navig, setNavig] = useState("Home");

  return (
    <div>
      <Layout setNavig={setNavig}>
        <Content contentType={navig} />
      </Layout>
    </div>
  );
}

export default App;
