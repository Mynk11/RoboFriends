import React, {
    Component
} from 'react';
//import robots from '../components/robots';
import SearchBox from '../components/searchbox'
import Cardlist from '../components/cardlist';
import Scroll from '../components/scroll';
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        });
        console.log("SearchField is :" + this.state.searchfield)

    }

    componentDidMount() {

        //window.fetch()
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
            return response.json();
        }).then((users) => {
            this.setState({
                robots: users
            });
        });
    }


    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(
            (robot) => {
                return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            });

        console.log("Filtered robots is:", filterRobots);

        return !robots.length ? (< h1 className="tc f1" > Loading... </h1>) : (< div className="tc" >
            <h1> RoboFriends </h1>

            <SearchBox searchChange={
                this.onSearchChange
            } />
            <Scroll>
                < Cardlist robots={
                    filterRobots
                } />

            </Scroll>
        </div>
        );
    }
};



export default App;