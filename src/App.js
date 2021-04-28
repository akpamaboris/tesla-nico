import "./App.css";
import React, { useState } from "react";

const Propositions = ({ text, price, total, setTotal, prop1, setProp1 }) => {
  const calculate = () => {
    if (total === 90700 || total === 106700) {
      if (price === 1000 || price === 0) {
        setTotal((total = total + price));
      } else {
        setTotal((total = price));
      }
    } else {
      setTotal((total = price));
    }
  };
  return (
    <div onClick={calculate} className="Propositions">
      {text}
    </div>
  );
};

const MenuChoice = ({ text }) => {
  return (
    <>
      <h2>{text}</h2>
    </>
  );
};

const TitlePage = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};

function App() {
  const [total, setTotal] = useState(0);
  const [prop1, setProp1] = useState(true);
  return (
    <div className="App">
      <div className="container">
        <TitlePage title="Tesla Config" />
        <MenuChoice text="Sélectionnez votre véhicule" />
        <Propositions
          price={90700}
          total={total}
          setTotal={setTotal}
          prop1={prop1}
          setProp1={setProp1}
          text="Grande Autonomie - 90 700 €"
        />
        <Propositions
          price={106700}
          text="Performance - 106 700€"
          prop1={prop1}
          setProp1={setProp1}
          total={total}
          setTotal={setTotal}
        />
        <MenuChoice text="Sélectionnez la couleur" />
        <Propositions
          price={0}
          text="Blanc Nacré Multicouche - 0 €"
          total={total}
          setTotal={setTotal}
        />
        <Propositions
          price={1000}
          text="Noir uni- 1000 €"
          total={total}
          setTotal={setTotal}
        />

        {total}
        <button onClick={() => alert("thanks for clicking")}>BUY</button>
      </div>
    </div>
  );
}

export default App;
