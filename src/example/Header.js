import React from 'react'
import {useStaticQuery, graphql} from "gatsby"

// setting of the graphql is very similar to 
// styled components. For reference see 

// button.js
// export const ExampleButton = styled.button`
   // background: green;
   // color: orange;
   // font-size: 2rem;
// `

// we can also have a name for the query, like below we have
// query FirstQuery
const getData = graphql`
   query FirstQuery {
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
`

// ---------------------------------------------------
// ------------------ DESTRUCTURING ------------------
// ---------------------------------------------------

const Header = () => {
    // data destructuring
    const {
        site: {
            info: {
                title, person: {name},
            },
        },
    } = useStaticQuery(getData);

    return (
        <div>
            <h1>title : {title}</h1>
            <h1>name : {name}</h1>
        </div>
    )
}

export default Header


// ---------------------------------------------------
// --------------- No DESTRUCTURING ------------------
// ---------------------------------------------------
// const Header = () => {
//     const data = useStaticQuery(getData);

//     return (
//         <div>
//            <h1>title : {data.site.siteMetadata.title}</h1> 
//            <h1>name  : {data.site.siteMetadata.person.name}</h1>
//         </div>
//     )
// }

// export default Header