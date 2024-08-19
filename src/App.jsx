import "./App.css";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Jobs from "./assets/components/Jobs";

function App() {
  return (
    <>
      <Header title="The Job Board" />
      <main>
        <Jobs />
      </main>
      <Footer />
    </>
  );
}

export default App;
