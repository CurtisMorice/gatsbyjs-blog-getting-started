import React from "react"
import styles from "./404.module.scss"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <div className={styles.container}>
      <h1 className={styles.header}>PAGE DISAPPEARED</h1>
      <p className={styles.errorMessage}>
        The page you are looking for has disappeared , good luck finding out
        what went wrong.
      </p>
      <Link to="/">Home</Link>
    </div>
  </Layout>
)
