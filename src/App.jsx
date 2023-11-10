
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


const App = () => {

  return (
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
    </>

  )
}

export default App
