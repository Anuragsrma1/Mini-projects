import Counter from "./components/counter"
import React from 'react'
import ThemeToggle from "./components/ThemeToggle"
import Greetme from "./components/Greetme"
import ShowHidePassword from "./components/ShowHidePassword"
import CharCount from "./components/CharCount"
import DisableButton from "./components/DisableButton"
import DigitalClock from "./components/DigitalClock"
import RandomColor from "./components/RandomColor"
import Accordion from "./components/Accordion"
import Tabs from "./components/Tabs"
import Calculator from "./components/Calculator"
import TipCalculator from "./components/TipCalculator"
import EmojiFinder from "./components/EmojiFinder"
import QuoteGenerator from "./components/QuoteGenerator"
import SimpleForm from "./components/SimpleForm"
function App() {
  return (
     <div>
        <Counter />
        <ThemeToggle />
        <Greetme />
        <ShowHidePassword />
        <CharCount />
        <DisableButton />
        <DigitalClock />
        <RandomColor />
        <Accordion />
        <Tabs />
        <Calculator />
        <TipCalculator />
        <EmojiFinder />
        <QuoteGenerator />
        <SimpleForm />
     </div>
  )
}

export default App
