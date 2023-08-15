import React, { useContext, useEffect, useState } from 'react'

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
  const [pageId, setPageId] = useState(null)
  const [isScrolling, setIsScrolling] = useState(false)

  function scrollToPage(pageId) {
    setIsScrolling(true)
    setPageId(pageId)
  }

  useEffect(() => {
    document
      .querySelector('.sidebar-underline')
      .classList.add('sidebar-underline-animation')
  }, [])

  useEffect(() => {
    document
      .querySelector('.section-container')
      .classList.add('show-section-container')
  }, [isScrolling])

  return (
    <GlobalContext.Provider
      value={{
        isScrolling,
        setIsScrolling,
        pageId,
        setPageId,
        scrollToPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
