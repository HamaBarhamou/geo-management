import React, { useState } from 'react';
import Excesvitesse from '../components/Excesvitesse';
import Security from '../components/Security';
import Performance from '../components/Performance'

const Supportrapport = (props) => {
    const [date, setDate] = useState(new Date())
    if (props.type == "exec_vitesse")
        return (
            <div>
                <h1>Rapport  Exces de vitesse - Du {date.toDateString()} Au {date.toTimeString()}</h1>
                <Excesvitesse/>
            </div>
        );
    if (props.type == "General")
            return(
                <div>
                    <h1>Rapport</h1>

                    <ul>
                        {props.data.data.map(todo=>
                            <li>{todo.machineName}</li>
                        )}
                    </ul>
                    <Security/>
                    <Performance/>
                </div>
            )
};

export default Supportrapport;