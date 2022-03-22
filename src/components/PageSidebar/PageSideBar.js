import React, { Fragment } from "react"
import { Link } from "gatsby"
import SidebarMessage from "../SidebarMessage/SidebarMessage"
import PageIcon from "../../images/page-icon.svg"
import { Wrapper, Menu } from "./PageSidebar.styles"

const PageSidebar = ({
  children,
  parentChildren,
  currentPage,
  parentTitle,
}) => {
  const getParentContent = () => {
    // Page with children? show menu of children
    return (
      <Fragment>
        <li className="sidebar-menu-header">
          <img src={PageIcon} alt="Cake It page" />
          <span
            dangerouslySetInnerHTML={{
              __html: currentPage.title,
            }}
          />
        </li>
        {children.nodes.map(child => {
          return (
            <li key={child.id}>
              <Link to={child.uri}>
                <span
                  dangerouslySetInnerHTML={{
                    __html: child.title,
                  }}
                />
              </Link>
            </li>
          )
        })}
      </Fragment>
    )
  }

  const getChildContent = () => {
    return (
      <Fragment>
        <li className="sidebar-menu-header">
          <img src={PageIcon} alt="Cake It page" />
          <span
            dangerouslySetInnerHTML={{
              __html: parentTitle,
            }}
          />
          hello
        </li>
        {parentChildren.map(child => {
          return (
            <li key={child.id}>
              <Link to={child.uri} activeClassName="sidebar-highlighted">
                <span
                  dangerouslySetInnerHTML={{
                    __html: child.title,
                  }}
                />
              </Link>
            </li>
          )
        })}
      </Fragment>
    )
  }

  return (
    <Wrapper>
      {children.nodes.length === 0 && !parentTitle ? (
        <SidebarMessage />
      ) : (
        <Menu>{parentTitle ? getChildContent() : getParentContent()}</Menu>
      )}
    </Wrapper>
  )
}

export default PageSidebar
