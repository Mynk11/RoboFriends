import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING
} from './constants';


import * as reducers from './reducer';

describe("Testing Reducers CHANGE_SEARCH_FIELD", () => {
    const initialStateSearch = {
        searchField: ''
    }
    it("should return the initial state", () => {
        expect(reducers.searchRobots("undefined", {})).toEqual("undefined");
    });
    it("Should handle CHANGE_SEARCH_FIELD", () => {
        expect(reducers.searchRobots(initialStateSearch, { type: CHANGE_SEARCH_FIELD, payload: 'abc' })).toEqual({ "searchField": "abc" });
    })

});

describe("REQUEST_ROBOTS_SUCCESS", () => {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ""
    }
    it("should return the initial state", () => {
        expect(reducers.requestRobots("undefined", {})).toEqual("undefined");
    });
    it("Should handle REQUEST_ROBOTS_SUCCESS", () => {
        expect(reducers.searchRobots(initialStateRobots, { type: REQUEST_ROBOTS_SUCCESS })).toEqual(initialStateRobots);
    })
    it("Should handle REQUEST_ROBOTS_PENDING", () => {
        expect(reducers.searchRobots(initialStateRobots, { type: REQUEST_ROBOTS_PENDING, isPending: false })).toMatchObject({
            isPending: false,
            robots: [],
            error: ""
        });
    })
});