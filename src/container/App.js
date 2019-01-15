import React, {
    Component
} from 'react';
//import robots from '../components/robots';
import MainPage from '../components/MainPage'

import {
    connect
} from 'react-redux';
import {
    setSearchField,
    requestRobots
} from '../action';


const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
//dispatch is used to throw events
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {
    render() {
        return <MainPage {...this.props} />
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(App);