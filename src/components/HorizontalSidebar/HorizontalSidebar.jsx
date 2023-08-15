import { socials } from '../../utils/constants'
import './horizontal_sidebar.css'

const HorizontalSidebar = () => {
  return (
    <aside className="horizontal-sidebar">
      <ul className="horizontal-sidebar-socials">
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
      <div className="horizontal-sidebar-underline "></div>
      <div className="horizontal-sidebar-copy">
        <p>&copy;{new Date().getFullYear()}</p>
      </div>
    </aside>
  )
}
export default HorizontalSidebar
