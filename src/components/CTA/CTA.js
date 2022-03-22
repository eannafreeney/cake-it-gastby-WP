import React from "react"
import { Link } from "gatsby"
import {
  StyledImg,
  Wrapper,
  CTAImageTextWrapper,
  CTAImageText,
} from "./CTA.styles"

const CTA = ({ image, link, text }) => {
  return (
    <Wrapper>
      <StyledImg image={image} alt="main image" />
      <Link to={link}>
        <CTAImageTextWrapper>
          <CTAImageText>{text}</CTAImageText>
        </CTAImageTextWrapper>
      </Link>
    </Wrapper>
  )
}

export default CTA
