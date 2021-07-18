import React from 'react';
import { Link } from '../../components/link';
import { Text } from '../../components/text';

export const BuiltWith = () => (
    <Text tag="p" center>
        Construído com <Link href="https://astro.build/" rel="noopener">Astro</Link> • <Link href="https://reactjs.org/" rel="noopener">React.js</Link> • ❤️
    </Text>
)
