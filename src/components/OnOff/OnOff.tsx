
import classes from './OnOff.module.css'

type OnOffPropsType = {
    isActive: boolean;
}

export const OnOff = (props: OnOffPropsType) => {
  return (
      <div>
          <div className={`${classes.on} ${props.isActive && classes.on_active}`}></div>
          <div className={`${classes.off} ${!props.isActive && classes.off_active}`}></div>
          <div className={`${classes.switch} ${props.isActive && classes.switch_active}`}></div>
      </div>
  )
}