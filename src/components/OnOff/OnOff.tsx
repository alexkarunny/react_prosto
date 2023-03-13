
import classes from './OnOff.module.css'
import {useState} from 'react';

type OnOffPropsType = {
    isActive: boolean;
    isActiveHandler: (isActive: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {

  return (
      <div>
          <div className={`${classes.on} ${props.isActive && classes.on_active}`} onClick={() => props.isActiveHandler(true)}>On</div>
          <div className={`${classes.off} ${!props.isActive && classes.off_active}`} onClick={() => props.isActiveHandler(false)}>Off</div>
          <div className={`${classes.switch} ${props.isActive && classes.switch_active}`} onClick={() => props.isActiveHandler(!props.isActive)}>o</div>
      </div>
  )
}