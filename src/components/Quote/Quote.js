import React from "react"
import QuoteImg from "../../images/quote.svg"
import { useQuoteQuery } from "../../hooks/useQuoteQuery"
import { Wrapper, Content } from "./Quote.styles"

const Quote = () => {
  const data = useQuoteQuery()
  const page = data.wpPage.ACF_HomePage

  return (
    <Wrapper>
      <Content>
        <img src={QuoteImg} alt="quote" />
        <h6>{page.quote1Text}</h6>
        <p>{page.quote1Author}</p>
      </Content>
    </Wrapper>
  )
}

export default Quote
