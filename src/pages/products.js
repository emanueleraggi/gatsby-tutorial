import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby" 

const ComponentName = ({ data }) => {
  // I am going to destructure in the function body
  const {
    allContentfulProduct: { nodes: products },
  } = data

  console.log(products);



  return (
      <Layout>
        <section className={styles.page}>
          {/* now I need to access my product in the JSX */}
          {/* witht he map function I am looping through the array */}
          {products.map((product) => {
            console.log(product)
            return <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title}/>
              <h3>{product.title}<span>${product.price}</span></h3>
              <Link to={`/products/${product.slug}`}>More Details</Link>
            </article>
          })}
        </section>
      </Layout>
  ) 
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        info {
          info
        }
      }
    }
  }
`

export default ComponentName
