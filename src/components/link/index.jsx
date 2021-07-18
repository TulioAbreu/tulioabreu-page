import React from 'react';
import Styles from './styles.module.css';
import { cls } from '../../utils/cls';

export const Link = ({ className, children, href, rel}) => (
    <a className={cls(Styles.root, className)} href={href} rel={rel}>
        {children}
    </a>
);
