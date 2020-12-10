const path = require('path');

// we will create pages dynamically

exports.createPages = async ({ graphql, actions }) => {
    // lets destructure
    const {createPage} = actions;
    
    
    const result = await graphql(`
        query getProduct {
            products: allContentfulProduct {
                nodes {
                    slug
                }
            }
        }
    `)
    // Now I want to iterate over my array
    // because I will create a new page meanwhile I iterate

    result.data.products.nodes.forEach( (product) => {
        createPage({
            path: `/products/${product.slug}`,
            component: path.resolve(`src/templates/product-template.js`),
            context: {
                slug: product.slug,
            }
        })
    })


}