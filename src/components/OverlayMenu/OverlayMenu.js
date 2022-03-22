import React from "react"
import { Link } from "gatsby"
import InvertedLogo from "../../images/logo-inverted.svg"
import CloseButton from "../../images/close-btn.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper } from "./OverlayMenu.styles"

const OverlayMenu = ({ menuOpen, handleOverlayMenu }) => {
  const { menu } = useMenuQuery()

  return (
    <Wrapper menuOpen={menuOpen}>
      <div className="inner">
        <img src={InvertedLogo} className="invertedLogo" alt="white-logo" />
        <ul className="overlayMenu">
          {menu.menuItems.nodes.map(item => {
            return !item.parentId ? (
              <li key={item.id}>
                <Link to={item.url} activeClassName="overlayActive">
                  {item.label}
                </Link>
              </li>
            ) : null
          })}
        </ul>
        <div
          className="closeButton"
          onClick={handleOverlayMenu}
          onKeyDown={handleOverlayMenu}
          role="button"
          tabIndex="0"
        >
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </Wrapper>
  )
}

export default OverlayMenu
