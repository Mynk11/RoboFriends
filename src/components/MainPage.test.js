import React from 'react';

import { shallow, mount, render } from 'enzyme';
import 'tachyons';
import MainPage from './MainPage';



let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: " ",
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps} />)
});

it("renders without crashing", () => {
    expect(<MainPage />).toMatchSnapshot();
});
it("filter robots correctly", () => {
    expect(wrapper.instance().filterRobots([])).toEqual([])
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: "jEt@io.com",
            email: "BBQ.com"
        }],
        searchField: "jEt",
        isPending: false
    }

    wrapper = shallow(<MainPage {...mockProps2} />)
    expect(wrapper.instance().filterRobots(mockProps2.robots)).toEqual([{
        id: 3,
        name: "jEt@io.com",
        email: "BBQ.com"
    }])
});