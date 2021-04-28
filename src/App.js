import "./App.css";
import React, { useState } from "react";

const Propositions = ({
  text,
  price,
  total,
  setTotal,
  prop1,
  setProp1,
  p2,
  p1,
  mykey,
}) => {
  const calculate = () => {
    if (total === 90700 || total === 106700) {
      if (price === 1000) {
        setTotal((total = total + price));
      } else if (price === 0) {
        setTotal((total = 0));
      }
    } else if (total === 91700 || total === 107700) {
      if (price === 1000) {
        setTotal((total = 1000));
      } else if (price === 106700) {
        setTotal((total = 106700));
      } else if (price === 90700) {
        setTotal((total = 90700));
      }
    } else if (total === 1000) {
      if (price === 1000) {
        setTotal((total = 1000));
      } else {
        setTotal((total = total + price));
      }
    } else {
      setTotal((total = total + price));
    }
  };
  if (total === 0) {
    return (
      <div onClick={calculate} className={mykey === 2 ? "blue" : "black"}>
        {text}
      </div>
    );
  } else if (total === 1000) {
    return (
      <div onClick={calculate} className={mykey === 3 ? "blue" : "black"}>
        {text}
      </div>
    );
  } else if (total === 91700) {
    return (
      <div
        onClick={calculate}
        className={mykey === 0 || mykey === 3 ? "blue" : "black"}
      >
        {text}
      </div>
    );
  } else if (total === 106700) {
    return (
      <div onClick={calculate} className={mykey === 1 ? "blue" : "black"}>
        {text}
      </div>
    );
  } else if (total === 107700) {
    return (
      <div
        onClick={calculate}
        className={mykey === 1 || mykey === 3 ? "blue" : "black"}
      >
        {text}
      </div>
    );
  } else if (total === 90700) {
    return (
      <div onClick={calculate} className={mykey === 0 ? "blue" : "black"}>
        {text}
      </div>
    );
  }
  // return (
  //   <div
  //     onClick={calculate}
  //     className="Propositions "
  //     // style={{ "background-color": "red" }}
  //   >
  //     {text} <h1>{mykey}</h1>
  //   </div>
  // );
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
  const [key] = useState([0, 1, 2, 3]);

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
          mykey={key[0]}
        />
        <Propositions
          price={106700}
          text="Performance - 106 700€"
          prop1={prop1}
          setProp1={setProp1}
          total={total}
          setTotal={setTotal}
          mykey={key[1]}
        />
        <MenuChoice text="Sélectionnez la couleur" />
        <Propositions
          price={0}
          text="Blanc Nacré Multicouche - 0 €"
          total={total}
          setTotal={setTotal}
          mykey={key[2]}
        />
        <Propositions
          price={1000}
          text="Noir uni- 1000 €"
          total={total}
          setTotal={setTotal}
          mykey={key[3]}
        />

        {total}
        <button onClick={() => alert("thanks for clicking")}>BUY</button>
      </div>
    </div>
  );
}

export default App;
