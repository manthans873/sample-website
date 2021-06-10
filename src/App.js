import React from 'react';
import { Card } from './Cards';
import Data from './Data';


function App() {
    return (
        <>
            <h1 className="heading">Netflix Webseries</h1>

            {Data.map((obj) => {
                return (
                    <Card
                        key={obj.id}
                        imgsrc={obj.imgsrc}
                        title={obj.title}
                        srsname={obj.srsname}
                        tlink={obj.tlink} />
                )
            })}
        </>
    )

}

export default App;
