
import HeroSection from "./components/HeroSection"
import JsxDemo from "./components/JsxDemo"
import Nav from "./components/NavBar"
import Header from "./components/css styling/Header";
import NormalStyling from "./components/css styling/NormalStyling";
import ExampleFive from "./components/hooks/state/ExampleFive";
import ExampleFour from "./components/hooks/state/ExampleFour";
import ExampleOne, { SiderBar } from "./components/hooks/state/ExampleOne";
import ExampleThree from "./components/hooks/state/ExampleThree";
import ExampleTwo from "./components/hooks/state/ExampleTwo";
//useEffect hook
// import EffectOne from "./components/hooks/effect/EffectOne";
import EffectTwo from "./components/hooks/effect/EffectTwo";
// import EffectThree from "./components/hooks/effect/EffectThree";
import MouseContainer from "./components/hooks/effect/MouseContainer";
import Fetch from "./components/hooks/effect/Fetch";
import { createContext } from "react";
import ContextOne from "./components/hooks/context/ContextOne";
import { data } from "./components/hooks/context/data";
import ReduceOne from "./components/hooks/reducer/ReduceOne";
import ReduceTwo from "./components/hooks/reducer/ReduceTwo";
import ReduceThree from "./components/hooks/reducer/ReduceThree";
import Container from "./components/hooks/callback/Container";
import Demo from "./components/hooks/memo/Demo";
import Input from "./components/hooks/ref/Input";

//useContext example
export const User = createContext()

const App = () => {

  return (
    <User.Provider value={data}>
      <>
        <Nav />
        <HeroSection />
        <h1>Hello Guys! Welcome to React Class</h1>
        <JsxDemo />
        <NormalStyling />
        <Header />
        {/* Hooks */}
        {/* State hook */}
        <ExampleOne />
        <SiderBar />
        <ExampleTwo />
        <ExampleThree />
        <ExampleFour />
        <ExampleFive />

        {/* useEffect Hook */}
        {/* <EffectOne /> */}
        <EffectTwo />
        {/* <EffectThree /> */}
        <MouseContainer />
        {/* fetching data using useEffect */}
        <Fetch />

        {/* useContext Hook */}
        <ContextOne />

        {/* useReducer Hook */}
        <ReduceOne />
        <ReduceTwo />
        <ReduceThree />

        {/* useCallback */}
        <Container />

        {/* useMemo Hook */}
        <Demo />

        {/* useRef Hook */}
        <Input />
      </>
    </User.Provider>

  )
}

export default App
