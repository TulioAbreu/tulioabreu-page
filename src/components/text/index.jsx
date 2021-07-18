import React from 'react';
import Styles from './styles.module.css';
import { cls } from '../../utils/cls';

export const Text = ({ className, tag: Tag = "div", center = false, children }) => (
    <Tag className={cls(Styles.root, center && Styles.center, className)}>
        {children}
    </Tag>
);
