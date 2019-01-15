import React from 'react';

import { shallow, mount, render } from 'enzyme';
import 'tachyons';
import Cardlist from './cardlist';
const mock = [{
    id: 1,
    name: "John Snow",
    email: "john@snow.com"
},
{
    id: 2,
    name: "Jon now",
    email: "jon@now.com"
}
]


it("Should run ", () => {
    //expect(shallow(<Cards />).length).toEqual(1);
    expect(shallow(<Cardlist robots={mock} />)).toMatchSnapshot();
});
