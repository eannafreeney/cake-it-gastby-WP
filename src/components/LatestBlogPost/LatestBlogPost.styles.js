import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: 1180px;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 40px;
  border-top: 1px solid #ddd;
  text-align: center;

  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1.5rem;
  }

  .posts div {
    text-align: left;
  }
`