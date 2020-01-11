import { configure } from '@storybook/react';
import { generateComponents } from './stories';
// automatically import all files ending in *.stories.tsx
configure(generateComponents, module);