import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image_1.jpeg"
import Image from "gatsby-image"


const getImage = graphql`
{
  fixed: file(relativePath: {eq: "image_3.jpeg"}) {
    childImageSharp {
      fixed (width: 200, grayscale: true){
        ...GatsbyImageSharpFixed
      }
    }
  }
  fluid: file(relativePath: {eq: "image_2.jpeg"}) {
    childImageSharp {
      fluid  {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  example: file(relativePath: {eq: "image_3.jpeg"}) {
    childImageSharp {
      fluid(maxWidth: 100) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
}
`

const Images = () => {
    const data = useStaticQuery(getImage);
    console.log(data);

    return (
        <section className="images">
            <article className="single-image">
                <h3>basic image</h3>
                <img src={img} width="100%" alt=""/>
            </article>
            <article className="single-image">
                <h3>fixed image/blur</h3>
                <Image fixed={data.fixed.childImageSharp.fixed}/>
            </article>
            <article className="single-image">
                <h3>fluid image/svg</h3>
                <Image fluid={data.fluid.childImageSharp.fluid}/>
                <div className="small">
                    <Image fluid={data.fluid.childImageSharp.fluid}/>
                </div>
                <Images fluid={data.example.childImageSharp.fluid} />
            </article>
        </section>
    )
}






export default Images
