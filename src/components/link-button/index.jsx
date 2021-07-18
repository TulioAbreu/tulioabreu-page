import React from 'react';
import Styles from './styles.module.css';
import { getLinkTarget } from '../../utils/get-link-target';
import { cls } from '../../utils/cls';

export const LinkButton = ({ className, children, href, openInNewTab = true, rel }) => (
    <a className={cls(Styles.root, className)} href={href} target={getLinkTarget(openInNewTab)} rel={rel}>
        {children}
    </a>
);
