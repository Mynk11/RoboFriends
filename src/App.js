import React, {
    Component
} from 'react';
//import robots from './robots';
import SearchBox from './searchbox'
import Cardlist from './cardlist';
import Scroll from './scroll';
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
        const filterRobots = this.state.robots.filter(
            (robots) => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            });

        console.log("Filtered robots is:", filterRobots);
        if (this.state.robots.length === 0) {
            return (<h1 className="tc f1">Loading...</h1>)
        }
        else {
            return (<div className="tc" >
                <h1> RoboFriends </h1>

                <SearchBox searchChange={
                    this.onSearchChange
                }
                />
                <Scroll>
                    < Cardlist robots={
                        filterRobots} />

                </Scroll>
            </div>
            );
        }
    };
}


export default App;