
import classes from '../OnOff/OnOff.module.css'
import {useState} from 'react';


export const UncontrolledOnOffOnOff = () => {
    let [isActive, setIsActive] = useState<boolean>(false)
  return (
      <div>
          <div className={`${classes.on} ${isActive && classes.on_active}`} onClick={() => setIsActive(true)}>On</div>
          <div className={`${classes.off} ${!isActive && classes.off_active}`} onClick={() => setIsActive(false)}>Off</div>
          <div className={`${classes.switch} ${isActive && classes.switch_active}`} onClick={() => setIsActive(!isActive)}>o</div>
      </div>
  )
}