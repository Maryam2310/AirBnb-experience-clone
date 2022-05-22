import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import data from "./components/data";

function App() {

  const cards = data.map(function (card) {

    return (
      <Card
        key={card.id}
        card={card}

      />

    )


  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards">
        {cards}
      </section>

    </div>
  );
}

export default App;





