import React, {
    Component
} from 'react';
//import robots from './robots';
import SearchBox from './searchbox'
import Cardlist from './cardlist';
import Scroll from './scroll';
import ErrorBoundry from './ErrorBoundry';
import Header from './Header';

class MainPage extends Component {


    componentDidMount() {

        this.props.onRequestRobots();

    }

    filterRobots = robots => {
        return robots.filter(
            (robot) => {
                return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
            });
    }
    render() {

        const {
            searchField,
            onSearchChange,
            robots,
            isPending
        } = this.props;




        return isPending ? (<h1 className="tc f1" > Loading... </h1>) : (<div className="tc"> <Header />

            <SearchBox searchChange={
                onSearchChange
            } />
            <Scroll>
                <ErrorBoundry >
                    <Cardlist robots={
                        this.filterRobots(robots)
                    } />
                </ErrorBoundry>

            </Scroll>
        </div>
        );
    }
};



export default MainPage;