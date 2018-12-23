import React from 'react';
import Card from './Cards';
const cardlist = ({ robots }) => {


    return (
        <div>
            {
                robots.map((user, i) => {
                    console.log("Cardlist");
                    return (< Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />);
                })
            }
        </div>
    );

}

export default cardlist;