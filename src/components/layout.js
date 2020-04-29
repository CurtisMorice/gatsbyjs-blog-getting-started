import React from "react"
import Header from './header.js'
import Footer from './footer.js'
import styles from "./layout.module.scss"

export default ({ children }) => (
  <div className={styles.container}>
    <Header />
    <div className={styles.content}>
      {children}
    </div>

    <Footer>My Gatsby Starter Project</Footer>
  </div>
)
