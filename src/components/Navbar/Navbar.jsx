import { useEffect, useRef, useState } from 'react'
import { useGlobalContext } from '../../context/global_context'
import { nav } from '../../utils/constants'
import { RiArrowUpDoubleFill } from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {
  const { setSectionActive, setIsScrolling, isScrolling } = useGlobalContext()

  return (
    <nav className="navbar-arrow">
      {isScrolling ? (
        <button
          type="button"
          className="arrow-up-icon"
          onClick={() => setIsScrolling(false)}
        >
          <RiArrowUpDoubleFill />
        </button>
      ) : null}
    </nav>
  )
}
export default Navbar
