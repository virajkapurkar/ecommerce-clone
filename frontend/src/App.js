import { Container } from "@mui/system";
import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Container>
          <h1>Ecommerce App</h1>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
