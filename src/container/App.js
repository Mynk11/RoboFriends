import React, {
    Component
} from 'react';
//import robots from '../components/robots';
import SearchBox from '../components/searchbox'
import Cardlist from '../components/cardlist';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';
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
    /*  constructor() {
         super();
         this.state = {
             robots: [],

         }
     } */

    /*  onSearchChange = (event) => {
         this.setState({
             searchfield: event.target.value
         });
         console.log("SearchField is :" + this.state.searchfield)
 
     } */

    componentDidMount() {
        //console.log("Store is:", this.props.store);
        //window.fetch()
        /* fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            return response.json();
        }).then((users) => {
            this.setState({
                robots: users
            });
        }); */
        this.props.onRequestRobots();

    }


    render() {
        /* const {
            robots,

        } = this.state; */
        const {
            searchField,
            onSearchChange,
            robots,
            isPending
        } = this.props;
        const filterRobots = robots.filter(
            (robot) => {
                return robot.name.toLowerCase().includes(searchField.toLowerCase());
            });

        console.log("Filtered robots is:", filterRobots);

        return isPending ? (<h1 className="tc f1" > Loading... </h1>) : (<div className="tc"> <Header />

            <SearchBox searchChange={
                onSearchChange
            } />
            <Scroll>
                <ErrorBoundry >
                    <Cardlist robots={
                        filterRobots
                    } />
                </ErrorBoundry >

            </Scroll>
        </div >
        );
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(App);