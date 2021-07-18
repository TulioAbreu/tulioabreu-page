import React from 'react';
import { Heading } from '../../components/heading';
import { Link } from '../../components/link';
import { Section } from '../../components/section';
import { Text } from '../../components/text';

export const About = () => (
    <Section>
        <Heading>Sobre</Heading>
        <Text tag="p">
            Meu nome é Marco Túlio e atualmente trabalho na empresa <Link href="https://melhorplano.net/" rel="noopener">Melhor Plano</Link>, como desenvolvedor web junior 😁. Tenho bacharelado em ciência da computação pela Universidade Federal de Ouro Preto (UFOP). Além da experiência com desenvolvimento web, tenho também básicas noções no mobile e de machine learning.
        </Text>
    </Section>
);
