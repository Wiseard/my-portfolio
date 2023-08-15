import { useGlobalContext } from '../../context/global_context'
import Contact from '../Contact/Contact'
import Work from '../Work/Work'
import About from '../About/About'
import SectionHeader from './SectionHeader'
import './section.css'
import { socials } from '../../utils/constants'
import HorizontalSidebar from '../HorizontalSidebar/HorizontalSidebar'

const Section = () => {
  const { isScrolling, setIsScrolling, pageId } = useGlobalContext()

  return (
    <section
      className={`section-container ${isScrolling ? 'section-move' : ''}`}
    >
      <HorizontalSidebar />
      <SectionHeader />
      <div className="section-content" id="test">
        {pageId === 'work' ? (
          <Work />
        ) : pageId === 'contact' ? (
          <Contact />
        ) : pageId === 'about' ? (
          <About />
        ) : null}
      </div>
    </section>
  )
}
export default Section
