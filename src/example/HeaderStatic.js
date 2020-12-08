import React from "react"
import { StaticQuery, graphql } from "gatsby"

// --------------------------------------------------------
// ---------------- This is the old StaticQuery ------------
// ---------------------------------------------------------
const ComponentName = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          info: siteMetadata {
            author
            data
            description
            title
            person {
              age
              name
            }
          }
        }
      }
    `}
    render={data => <h4>{data.site.info.description}</h4>}
    // Below is the new way for the query 
    // render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}

  ></StaticQuery>
)

export default ComponentName
