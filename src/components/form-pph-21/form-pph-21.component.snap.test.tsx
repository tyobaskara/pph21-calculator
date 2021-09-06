import React from "react";
import renderer from 'react-test-renderer';
import FormPPH21Page from './form-pph-21.component';

test('FormPPH21Page snaptest', () => {
  const component = renderer.create(
    <FormPPH21Page/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});