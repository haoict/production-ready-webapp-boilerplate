import React from 'react';
import { storiesOf } from '@storybook/react';
import { dirname, basename, sep } from 'path';

/*
 * Some components depends on the Link of nextjs
 * https://github.com/zeit/next.js/issues/2284
 * This snippet fixes that
 */
import Router from 'next/router'
const mockedRouter = { push: () => {}, prefetch: () => {} }
Router.router = mockedRouter

export function generateComponents() {
  const moduleComponents = require.context('../src/visual-components', true, COMPONENT_PATTERN);
  const moduleProps = require.context('../src/visual-components', true, PROPS_PATTERN);

  moduleComponents.keys().forEach(spec => {
    const partialPath = dirname(spec).split(sep);
    const componentName = partialPath[partialPath.length - 1];

    const componentModule = moduleComponents(spec);
    const componentExportName = Object.keys(componentModule)[0];
    const Component = componentModule[componentExportName];
    const story = storiesOf(componentName, module);

    /* Filter props belongs to the specific component */
    const dataProps = moduleProps.keys().filter(item => item.startsWith(`${dirname(spec)}${sep}`));

    dataProps.forEach(key => {
      const caseName = basename(key, '.story.jsx').replace(/-/g, ' ');
      const props = moduleProps(key).test;
      story.add(caseName, () => <Component {...props} />);
    });
  });
}