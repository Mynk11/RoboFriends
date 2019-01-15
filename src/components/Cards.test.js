import React from 'react';
import './cards.css'
import { shallow, mount, render } from 'enzyme';
import 'tachyons';
import Cards from './Cards';


console.log(shallow(<Cards />));
it("Should run ", () => {
    //expect(shallow(<Cards />).length).toEqual(1);
    expect(shallow(<Cards />)).toMatchSnapshot();
});
