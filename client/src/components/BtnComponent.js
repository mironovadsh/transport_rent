import React from 'react';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
        <button className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.start}>Начать аренду</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}>Завершить аренду</button>

        </div> : ""
      }
     

     
    </div>
      
      

      

     
     
    
  );
}

export default BtnComponent;