import Button from "./Button"
import "./HeroSection.css"

const HeroSection = () => {
    return (
        <div className="hero">
            <img src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Hero Image" />
            <article>
                <h2>Explore to the Tech World</h2>
                <Button className='applyNow' type="button">Apply Now</Button>
            </article>
        </div>
    )
}

export default HeroSection