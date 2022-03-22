import { useStaticQuery, graphql } from "gatsby"

export const useCTAAreaQuery = () => {
  const data = useStaticQuery(graphql`
    fragment ctaImage on WpMediaItem {
      localFile {
        childImageSharp {
          gatsbyImageData(width: 720, placeholder: TRACED_SVG)
        }
      }
    }

    query CTAAreaQuery {
      cta: wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          cta1Text
          cta1Link
          cta2Text
          cta2Link
          cta3Text
          cta3Link
          cta1Image {
            ...ctaImage
          }
          cta2Image {
            ...ctaImage
          }
          cta3Image {
            ...ctaImage
          }
        }
      }
    }
  `)
  return data
}
