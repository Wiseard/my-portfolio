import { useGlobalContext } from '../../context/global_context'
import { socials } from '../../utils/constants'
import './sidebar.css'

const Sidebar = () => {
  const { isScrolling } = useGlobalContext()

  return (
    <aside className={`sidebar ${isScrolling ? 'sidebar-black' : ''}`}>
      <ul className="sidebar-socials">
        {socials.map(({ id, icon, url }) => {
          return (
            <li key={id}>
              <a href={url} target="_blank">
                {icon}
              </a>
            </li>
          )
        })}
      </ul>
      <div className="sidebar-underline "></div>
      <div className="sidebar-copy">
        <p>&copy;{new Date().getFullYear()}</p>
      </div>
    </aside>
  )
}
export default Sidebar
