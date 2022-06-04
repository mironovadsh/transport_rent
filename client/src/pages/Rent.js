import {React, useEffect, useState} from 'react';
import DisplayComponent from '../components/DisplayComponent';
import BtnComponent from '../components/BtnComponent';
import '../App.css';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {Context} from "../index";
import {ASSORT_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {useParams} from 'react-router-dom'
import {fetchOneTS} from "../http/tsAPI";
import {useHistory} from 'react-router-dom'


function Rent() {
  
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [TS, setTS] = useState({info: []})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        fetchOneTS(id).then(data => setTS(data))
    
    }, [])

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();
  const getFinalPrice = () => {
        return Math.floor(updatedS*TS.price/60 + updatedM*TS.price)
    }
    
  

  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
            
               <DisplayComponent time={time}/>
               <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
               <Col md={9} className="m-auto d-flex justify-content-end">
                        <h2 className='ms-auto'>
                            Итого: {getFinalPrice()} руб.
                        </h2>
                        </Col>
                        <NavLink to={ASSORT_ROUTE}>
      <button className="stopwatch-btn stopwatch-btn-red"
                  onClick>Сменить ТС</button>
      </NavLink>
          </div>
          
     </div>
    </div>
    
  );
  
}



export default Rent;