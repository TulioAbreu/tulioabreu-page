import React from 'react';
import Styles from './styles.module.css';
import { Text } from '../../components/text';
import { LinkButton } from '../../components/link-button';
import { textJoinList } from '../../utils/text-join-list';

export const Project = ({ title, techs, description, githubHref }) => (
    <div className={Styles.root}>
        <Text className={Styles.title}>{title}</Text>
        <Text className={Styles.techs}>{textJoinList(techs)}</Text>
        <Text className={Styles.description} tag="p">{description}</Text>
        <LinkButton className={Styles.linkButton} href={githubHref} openInNewTab rel="noopener">Veja no GitHub →</LinkButton>
    </div>
);
