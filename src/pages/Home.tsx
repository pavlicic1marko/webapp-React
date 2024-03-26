import React, {useEffect} from 'react';

    const Home = () => {

        useEffect( ()=>{
        (

            async () => {
                 await fetch('http://localhost:8000/api/home',{
                    headers: {'Content-Type':'application/json'},
                    credentials:'include',
                });

                }
            )();
        });

        return(
        <div>
            <form>
                Home
            </form>
        </div>
        );
    };

    export default Home