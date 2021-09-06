import React from "react";
import renderer from 'react-test-renderer';
import Error404Page from './error-404.component';

jest
  .mock('../../components', () => ({
    Navigation: 'NavigationComponent'
  }));

test('Error404Page snaptest', () => {
  const component = renderer.create(
    <Error404Page/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});