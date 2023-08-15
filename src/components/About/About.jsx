import { useGlobalContext } from '../../context/global_context'
import './about.css'

const About = () => {
  const { isScrolling } = useGlobalContext()
  return (
    <section className="about-container">
      <h2 className={`about-title ${isScrolling ? 'show-about-title' : ''}`}>
        AB0UT ME
      </h2>
      <div className="about-content">
        <p>
          My name is Florent and I am a self-taught front-end developer who
          enjoy building web applications for 2 years now.
        </p>
        <p>
          As a Digital Marketing graduate , web development has always been part
          of my work. Social media strategies, SEO improvements and websites
          content updates were my daily routines.
        </p>
        <p>
          Fast forward to 2023 and I’ve tried it all, from HTML/CSS, PHP,
          No-Code Web Development. Everything I have done, small or big, has
          been a vital stepping stone for where I am today.
        </p>
        {/* quote */}
        <blockquote>
          <p>
            “What separates design from art is that design is meant to be…
            functional.”
          </p>
          <footer>— Cameron Moll</footer>
        </blockquote>
        <p>
          What excites me most about being a web designer is being able to
          create things that have purpose and solve real problems. It goes
          beyond just creating functional websites and involves having a passion
          for designing experiences and solutions that help people.
        </p>
        <p>
          Currently I work as a Front-End Developer freelancer. I also provide
          my marketing experience to improve your SEO as well as digital
          communication campaigns.
        </p>
      </div>
    </section>
  )
}
export default About
