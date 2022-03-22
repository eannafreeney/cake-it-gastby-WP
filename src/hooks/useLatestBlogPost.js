import { useStaticQuery, graphql } from "gatsby"

export const useLatestBlogPostQuery = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            excerpt
            uri
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 500)
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return data
}
