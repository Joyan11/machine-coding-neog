/** @format */

import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { ProductPage } from "./Components/Products/ProductPage";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <ProductPage />
      </main>
    </div>
  );
}

export default App;
