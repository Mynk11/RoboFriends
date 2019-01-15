import React from 'react';
import { shallow, mount, render } from 'enzyme';
import 'tachyons';
import App from './App';

it("Should run ", () => {
    //expect(shallow(<Cards />).length).toEqual(1);
    expect(shallow(<App />)).toMatchSnapshot();
});
