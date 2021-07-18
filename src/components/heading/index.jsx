import React from 'react';
import Styles from './styles.module.css';
import { cls } from '../../utils/cls';

export const Heading = ({ tag: Tag = 'h1', uppercase = true, children }) => (
    <Tag className={cls(Styles.root, uppercase && Styles.uppercase)}>
        {children}
    </Tag>
);
