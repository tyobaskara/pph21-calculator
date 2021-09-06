import React from "react";
import renderer from 'react-test-renderer';
import AnotherPage from './another.component';

jest
  .mock('../../components', () => ({
    Navigation: 'NavigationComponent'
  }));

test('AnotherPage snaptest', () => {
  const component = renderer.create(
    <AnotherPage/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});