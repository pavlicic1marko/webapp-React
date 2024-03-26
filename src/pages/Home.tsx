import React, {useEffect, useState} from 'react';

    const Home = () => {
        const [name, setName] = useState('');

        useEffect( ()=>{
        (

            async () => {
                 const response = await fetch('http://localhost:8000/api/home',{
                    headers: {'Content-Type':'application/json'},
                    credentials:'include',
                });
                const content = await response.json();
                setName(content.name);

                }
            )();
        });

        return(
        <div>
            <form>
                {name ? 'Hi' + name: 'you are not authenticated'}
            </form>
        </div>
        );
    };

    export default Home