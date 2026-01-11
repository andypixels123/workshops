import "./App.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
      <div>
        <h1>Hello, world!</h1>
        <Button />
      </div>
      </main>
      <Footer />
    </>
  );
}

export default App;