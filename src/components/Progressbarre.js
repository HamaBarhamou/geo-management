import React, { useState } from 'react';


const Progressbarre = ({bgcolor,progress,height,message}) => {

    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        //margin: 10
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }

    const [progresse1,setProgesse1] = useState(15);

    return (
      <div style={{width: '100%'}}>
        {message}
      <div style={{display:'flex',width: '100%',padding:5}}>
          <input type="button" value="-" onClick={()=>setProgesse1(progresse1 - 1)}/>
          <div style={Parentdiv}>
            <div style={Parentdiv}>
                <div style={Childdiv}>
                  <span style={progresstext}> {progresse1}% </span>
                </div>
            </div>
          </div>
          <input type="button" value="+" onClick={()=>setProgesse1(progresse1 + 1)}/>
      </div>
      </div>
    );
};

export default Progressbarre;