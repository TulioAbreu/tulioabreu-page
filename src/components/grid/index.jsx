import React from "react";
import Styles from './styles.module.css';

export const Grid = ({ children }) => (
    <div className={Styles.root}>
        {children}
    </div>
);
