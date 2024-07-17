import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Hero></Hero>
        <Timeline></Timeline>
        <Quote></Quote>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
