import React from 'react';
import Styles from './styles.module.css';
import { Link } from '../../components/link';
import { GithubIcon } from '../../components/icons/github';
import { LinkedInIcon } from '../../components/icons/linkedin';
import { OutlookIcon } from '../../components/icons/outlook';

export const Contact = ({ linkedinHref, githubHref, emailHref }) => (
    <div className={Styles.root}>
        <Link className={Styles.link} href={githubHref} rel="noopener">
            <GithubIcon className={Styles.icon} />
        </Link>
        <Link className={Styles.link} href={emailHref} rel="noopener">
            <OutlookIcon className={Styles.icon} />
        </Link>
        <Link className={Styles.link} href={linkedinHref} rel="noopener">
            <LinkedInIcon className={Styles.icon} />
        </Link>
    </div>
);
