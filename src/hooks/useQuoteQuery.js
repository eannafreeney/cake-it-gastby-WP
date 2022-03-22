import { useStaticQuery, graphql } from "gatsby"

export const useQuoteQuery = () => {
  const data = useStaticQuery(graphql`
    query QuoteQuery {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          quote1Text
          quote1Author
        }
      }
    }
  `)
  return data
}
