import React from "react";
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import NavigationComponent from './navigation.component';

test('NavigationComponent snaptest', () => {
  const component = renderer.create(
    <BrowserRouter>
      <NavigationComponent/>
    </BrowserRouter>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});