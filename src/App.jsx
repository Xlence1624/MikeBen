import "./App.css";
import Brief from "./components/Brief";
import Build_Design from "./components/Build_Design";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Message from "./components/Message";
import Mywork from "./components/Mywork";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scroll from "./Scroll";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <Scroll/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Brief />
              <Build_Design />
              <Message />
              <Footer />
            </>
          }
        />

        <Route
          path="/mywork"
          element={
            <>
          <Mywork/>
            </>
          }
        />

             <Route
          path="/resume"
          element={
            <>
          <Resume/>
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
