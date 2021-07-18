import React from 'react';
import { Heading } from '../../components/heading';
import { Link } from '../../components/link';
import { Section } from '../../components/section';
import { Text } from '../../components/text';

export const Education = () => (
    <Section>
        <Heading tag="h2">
            Formação
        </Heading>
        <Text>
            <Heading tag="h3" uppercase={false}>
                Universidade Federal de Ouro Preto (UFOP) 2016-2020
            </Heading>
            <ul>
                <li>Tutor na disciplina Introdução à Programção</li>
                <li>Monitor na disciplina Introdução à Programação</li>
                <li>Membro do laboratório <Link href="http://xr4goodlab.decom.ufop.br/" openInNewTab rel="noopener">XR4GOOD</Link></li>
                <li><Link href="https://www.monografias.ufop.br/handle/35400000/2267" rel="noopener">Reconhecimento automático de atividades físicas comportamentais usando um acelerômetro</Link> foi o meu trabalho de conclusão, onde foi feito um estudo com o objetivo de fazer uma classificação de atividades físicas usando inteligência artificial</li>
            </ul>
        </Text>
    </Section>
);
