import { useGlobalContext } from '../../context/global_context'
import { nav } from '../../utils/constants'
import './navigation.css'

const Navigation = () => {
  const { scrollToPage } = useGlobalContext()

  return (
    <nav className="navigation">
      {nav.map(({ id, button }, index) => {
        return (
          <button
            type="button"
            key={id + button}
            onClick={() => scrollToPage(button)}
          >
            <span>{button}</span>
          </button>
        )
      })}
    </nav>
  )
}
export default Navigation
