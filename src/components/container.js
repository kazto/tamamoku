import React from "react"
import containerStyle from "./container.module.css"

const Container = ({ children }) => (
    <div className={containerStyle.container} >
        { children }
    </div>
)

export default Container;
