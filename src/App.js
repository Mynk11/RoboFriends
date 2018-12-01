import React, { Component } from 'react';
import robots from './robots';
import SearchBox from './searchbox'
import Cardlist from './cardlist';
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
        console.log("SearchField is :" + this.state.searchfield)

    }
    render() {
        const filterRobots = this.state.robots.filter(
            (robots) => {
                return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            });

        console.log("Filtered robots is:", filterRobots);

        return (
            <div className="tc" >
                <h1 >RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                < Cardlist robots={
                    filterRobots
                }
                />
            </div>
        );
    };
}


export default App;