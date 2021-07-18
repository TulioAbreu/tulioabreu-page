import React from 'react';
import Styles from './styles.module.css';

export const Section = ({ children }) => (
    <section className={Styles.root}>
        {children}
    </section>
);
