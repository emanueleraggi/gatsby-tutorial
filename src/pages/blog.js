import React from 'react'
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>this is our blog</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </Layout>
    )
}

export default blog
