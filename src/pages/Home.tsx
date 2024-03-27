import React, {useEffect, useState} from 'react';

    const Home = (props: {name: string }) =>{


    return(
        <div>
                {props.name ? 'Hi ' + props.name : 'you are not authenticated'}
        </div>
        );
    };

    export default Home