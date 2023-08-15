import { useGlobalContext } from '../../context/global_context'
import Navigation from '../Navigation/Navigation'
import './section.css'

const SectionHeader = () => {
  return (
    <header className="section-header-container">
      <div className="section-header">
        <div className="header-titles">
          <h1 className="header-title">Florent Baleinier</h1>
          <h2 className="header-subtitle">Front End Developer</h2>
        </div>
        <div className="header-content">
          <p>
            <span>Web Developer</span> / <span>React</span> /{' '}
            <span>Nextjs</span>
          </p>
          <p>Currently working as a freelancer</p>
        </div>
      </div>
      {/* NAVBAR */}
      <Navigation />
    </header>
  )
  // }
}
export default SectionHeader
