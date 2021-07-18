import React from 'react';
import { readFileSync } from 'fs';

import { Heading } from '../../components/heading';
import { Grid } from '../../components/grid';
import { Project } from '../project';
import { Section } from '../../components/section';

export const Portfolio = () => {
    const projects = JSON.parse(readFileSync('./assets/projects.json'));
    return (
        <Section>
            <Heading tag="h2">
                Portfolio
            </Heading>
            <Grid>
                {projects.map(({ name, technologies, description, repositoryUrl}) => (
                    <Project
                        title={name}
                        techs={technologies}
                        description={description}
                        githubHref={repositoryUrl}
                    />
                ))}
            </Grid>
        </Section>
    );
}
