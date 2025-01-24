import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import ButtonReact from "./components/ButtonReact";
import { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css"; // Import the styles
import Carousel from "./components/carousel";

function App() {
  const [Active, Inactive] = useState(false);

  let items = ["Thor", "Avengers", "John Wick", "Matrix", "Spiderman"];
  const imageNumbers = [1, 2, 3]; // Array of numbers for the images
  const handleSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div className="App">
      <Navbar NavImage="/logo.png" Brand="CREDO TECH" />
      <div className="content-wrapper">
        <Carousel numbers={imageNumbers} />;
        <ListGroup items={items} heading="Movies" onSelect={handleSelect} />
        {Active && (
          <Alert onClose={() => Inactive(false)}>
            <h1>
              DANGER <span>DANGER</span>
            </h1>
          </Alert>
        )}
        <ButtonReact onClick={() => Inactive(true)}>PULL</ButtonReact>
      </div>
      <Footer />
    </div>
  );
}

export default App;
