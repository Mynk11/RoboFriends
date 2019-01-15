import React from 'react';

import { shallow, mount, render } from 'enzyme';
import 'tachyons';
import CounterButton from './CounterButton';

describe("Testing CounterButton Component", () => {
    it("Counter Button color test ", () => {
        //expect(shallow(<Cards />).length).toEqual(1);
        let mockColor = 'red';
        expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
    });
    it("Correctly increments the counter", () => {
        let mockColor = 'red';
        const wrapper = shallow(<CounterButton color={mockColor} />);
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 1 });
        wrapper.find('[id="counter"]').simulate('click');
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({ count: 3 });
        expect(wrapper.props().color).toEqual('red');
    });

})
