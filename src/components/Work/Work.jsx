import { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/global_context'
import { projects } from '../../utils/constants'
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai'

import './work.css'

const Work = () => {
  const { isScrolling } = useGlobalContext()
  const [imageIndex, setImageIndex] = useState(0)
  const [projectFiltered, setProjectFiltered] = useState(
    projects.filter((item) => item.number === imageIndex)
  )

  function handleOver(index) {
    setImageIndex(index)
  }

  useEffect(() => {
    setProjectFiltered(projects.filter((item) => item.number === imageIndex))
  }, [imageIndex])

  useEffect(() => {
    setImageIndex(0)
  }, [isScrolling])

  return (
    <section className="work-container">
      <h2
        className={`work-projects-title ${
          isScrolling ? 'show-work-projects-title' : ''
        }`}
      >
        W0RK
      </h2>
      {/* RESPONSIVE DISPLAY */}
      <div className="responsive-work-container">
        <div className="responsive-work-content">
          <p>
            This is a showcase of my latest projects built with React, which is
            the framework I'm using daily. Click on them to see an online demo.
          </p>
          <p>
            Web development is constantly evolving and so as my role as a
            front-end developer. I'm still learning and gaining experience every
            day.
          </p>
        </div>
        <div className="responsive-work-projects">
          {projects.map(
            ({ id, title, url, description, project_number }, index) => {
              return (
                <div key={id + index} className="responsive-project">
                  <a
                    href={url}
                    target="_blank"
                    className="responsive-project-link"
                  >
                    {title}
                  </a>
                  <p>
                    {project_number} - {description}
                  </p>
                </div>
              )
            }
          )}
        </div>
      </div>
      {/* BIG SCREEN DISPLAY */}
      <div className="work">
        {/* project image cover */}
        <div className="work-projects-cover">
          {projectFiltered.map(
            ({
              id,
              img,
              title,
              number,
              url,
              git,
              description,
              project_number,
              technologies_front,
              technologies_back,
            }) => {
              return (
                <div key={id + description} className="project-highlight">
                  <div className="highlight-image-container">
                    <img src={img} alt={title} className="highlight-image" />
                    <div className="highlight-image-layout">
                      <div className="tech-container">
                        <div className="front-tech-container">
                          <h4>Front-End</h4>
                          <div className="tech-list">
                            {technologies_front.map(
                              ({ id, icon, icon_desc }) => {
                                return (
                                  <div key={id} className="tech">
                                    {icon}
                                    <span>{icon_desc}</span>
                                  </div>
                                )
                              }
                            )}
                          </div>
                        </div>
                        <div className="back-tech-container">
                          <h4>Back-End</h4>
                          <div className="tech-list">
                            {technologies_back.map(
                              ({ id, icon, icon_desc }) => {
                                return (
                                  <div key={id} className="tech">
                                    {icon === 'S' ? (
                                      <p className="sanity-icon">{icon}</p>
                                    ) : (
                                      icon
                                    )}
                                    <span>{icon_desc}</span>
                                  </div>
                                )
                              }
                            )}
                          </div>
                        </div>
                      </div>
                      <div
                        className={`layout-buttons ${
                          imageIndex === number ? 'show-layout-buttons' : ''
                        }`}
                      >
                        <a
                          href={url}
                          target="_blank"
                          className="layout-link link-url"
                        >
                          <span>check it out</span>
                          <AiOutlineLink />
                        </a>
                        <a
                          href={git}
                          target="_blank"
                          className="layout-link link-git"
                        >
                          <span>git url</span>
                          <AiFillGithub />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="highlight-info">
                    <h4>
                      <span>{project_number} - </span>
                      {title}
                    </h4>
                    <div className="highlight-info-underline"></div>
                  </div>
                </div>
              )
            }
          )}
        </div>
        {/* projects list */}
        <div className="work-projects-list">
          <div className="projects-list">
            {projects.map(
              ({ id, title, project_number, description }, index) => {
                return (
                  <div
                    className={`project ${
                      imageIndex === index ? 'project-hover' : ''
                    }`}
                    key={id + title}
                  >
                    <h3 onMouseOver={() => handleOver(index)}>{title}</h3>
                    <p>
                      {project_number} - {description}
                    </p>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
