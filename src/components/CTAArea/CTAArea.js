import React from "react"
import CTA from "../CTA/CTA"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"

const CTAArea = () => {
  const { cta } = useCTAAreaQuery()

  return (
    <Wrapper>
      {new Array(3).fill("").map((element, index) => (
        <CTA
          key={index}
          image={
            cta.ACF_HomePage[`cta${index + 1}Image`].localFile.childImageSharp
              .gatsbyImageData
          }
          link={cta.ACF_HomePage[`cta${index + 1}Link`]}
          text={cta.ACF_HomePage[`cta${index + 1}Text`]}
        />
      ))}
    </Wrapper>
  )
}

export default CTAArea
