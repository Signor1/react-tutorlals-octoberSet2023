
import HeroSection from "./components/HeroSection"
import JsxDemo from "./components/JsxDemo"
import Nav from "./components/NavBar"
import Header from "./components/css styling/Header";
import NormalStyling from "./components/css styling/NormalStyling";


const App = () => {

  return (
    <>
      <Nav />
      <HeroSection />
      <h1>Hello Guys! Welcome to React Class</h1>
      <JsxDemo />
      <NormalStyling />
      <Header />
    </>

  )
}

export default App
