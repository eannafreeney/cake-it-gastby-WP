import React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { useLatestBlogPostQuery } from "../../hooks/useLatestBlogPost"
import { Wrapper } from "./LatestBlogPost.styles"

const LatestBlogPost = () => {
  const data = useLatestBlogPostQuery()

  return (
    <Wrapper>
      <h1>Latest Blog Posts</h1>
      <div className="posts">
        {data.allWpPost.edges.slice(0, 3).map((post, index) => {
          const imageData = getImage(post.node.featuredImage.node.localFile)

          return (
            <div key={index}>
              <GatsbyImage image={imageData} alt="blog-image" />
              <h4>{post.node.title}</h4>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.node.excerpt,
                }}
              />
              <Link to={`/blog/${post.node.excerpt.uri}`}>
                <h5>read more</h5>
              </Link>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default LatestBlogPost
