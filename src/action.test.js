import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    REQUEST_ROBOTS_PENDING
} from './constants';
import { setSearchField, requestRobots } from './action';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
describe("Testing Actions", () => {
    const me = {
        type: CHANGE_SEARCH_FIELD,
        payload: "maynl"

    }
    it("setSearchField Action", () => {
        expect(setSearchField("maynl")).toMatchObject(me);
    });
    it("Requesting Api Action", () => {

        const me = {
            type: REQUEST_ROBOTS_PENDING,
        }
        const mockStore = configureMockStore([thunkMiddleware]);
        const store = mockStore();
        store.dispatch(requestRobots(me))
        const action = store.getActions();

        console.log("Action is:", action.forEach(key => console.log(key)));
        expect(action[0]).toMatchObject(me);
    });

})