import React from 'react'
import Header from "../example/Header"
import Layout from "../components/layout"
import HeaderStatic from "../example/HeaderStatic"
import { graphql } from "gatsby"

// Once we imported the graphql we would need to set up the query and EXPORT tthe variable;
// Once we set up the query it will make available the data object
// in the props of the component
// Then I would want to access the property
// And show the proper in the JSX

// const examples = (props) => {
//     console.log(props)
//     return (
//         <Layout>
//             <h1>Hello from example page</h1>
//             <Header />
//             <HeaderStatic />
//             <h5>{}</h5>
//         </Layout>
//     )
// }

// destructuring to access the data
const examples = ({data}) => {
    const {
        site: {
            info: {author},
        },
    } = data

    return (
        <Layout>
            <p>Hello from example page</p>
            <Header />
            <HeaderStatic />
            <h5>author: {author}</h5>
        </Layout>
    )
}


export const data = graphql`
    query MyQuery {
        site {
            info:siteMetadata {
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
`

export default examples