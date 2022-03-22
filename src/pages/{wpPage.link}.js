import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
// Components
import Layout from "../components/Layout/Layout"
import PageHero from "../components/PageHero/PageHero"
import Breadcrumb from "../components/BreadCrumb/Breadcrumb"
import PageSidebar from "../components/PageSidebar/PageSideBar"

const PageTemplate = ({ data }) => {
  const imageData =
    data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData
  const parentData = data.wpPage.wpParent && data.wpPage.wpParent.node
  const parentChildren =
    data.wpPage.wpParent && data.wpPage.wpParent.node.wpChildren.nodes
  const currentPage = data.wpPage
  const parentTitle = data.wpPage.wpParent && data.wpPage.wpParent.node.title

  return (
    <Layout>
      {data.wpPage.featuredImage ? <PageHero image={imageData} /> : null}
      <Wrapper>
        <Breadcrumb parent={parentData} />
        <Content>
          <PageSidebar
            parentChildren={parentChildren}
            currentPage={currentPage}
            parentTitle={parentTitle}
          >
            {data.wpPage.wpChildren}
          </PageSidebar>
          <PageContent>
            <h1
              dangerouslySetInnerHTML={{
                __html: data.wpPage.title,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: data.wpPage.content,
              }}
            />
          </PageContent>
        </Content>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

const Content = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

const PageContent = styled.article`
  margin-top: 20px;
`

export default PageTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            uri
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`
