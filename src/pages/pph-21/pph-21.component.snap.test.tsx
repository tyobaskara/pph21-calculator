import React from "react";
import renderer from 'react-test-renderer';
import PPH21Page from './pph-21.component';

jest
  .mock('../../components', () => ({
    Navigation: 'NavigationComponent',
    FormPPH21Page: 'FormPPH21PageComponent'
  }));

test('PPH21Page snaptest', () => {
  const component = renderer.create(
    <PPH21Page/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});