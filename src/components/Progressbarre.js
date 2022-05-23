import React, { useState } from 'react';


const Progressbarre = ({bgcolor,progress,height,message, unite}) => {

  const [progresse1,setProgesse1] = useState(15);

    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        //margin: 10
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progresse1}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
    
    const incrementation = () => {
      if (progresse1 < 100)
        setProgesse1(progresse1 + 1)
    }
    
    const decrementation = () => {
      if (progresse1 > 0)
        setProgesse1(progresse1 - 1)
    }

    return (
      <div style={{width: '100%',padding:2}}>
          <div style={{backgroundColor: bgcolor,color: 'white',fontWeight: 900}}>
              {message} {progresse1} {unite}
          </div>
          <div style={{display:'flex',width: '100%',padding:5}}>
              <input type="button" value="-" onClick={decrementation}/>
              <div style={Parentdiv}>
                <div style={Parentdiv}>
                    <div style={Childdiv}>
                      <span style={progresstext}> {progresse1} </span>
                    </div>
                </div>
              </div>
              <input type="button" value="+" onClick={incrementation}/>
          </div>
      </div>
    );
};

export default Progressbarre;