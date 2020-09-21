import React from 'react'
import classes from "./Topbar.module.css" 
export default function Topbar() {
    return (
        <div className={classes.MainWrapper}>
                  <div className={classes.LeftLogoWrapper}> 
                  <i className={`fas fa-bars ${classes.IconWrap}`}></i>
                  <span className={classes.ImgWrapper}><img src ="https://miro.medium.com/max/670/0*UTBrDcrJ6SbePBzR" alt="logo" /></span> 
                  <h3>Clove</h3>
                  </div> 
                  <div className={classes.RigthItemsWrapper}>
                     <i className={`fas fa-search`}></i>
                     <i className={`fas fa-cog`}></i>
                     <i className={`far fa-bell`}></i> 
                     <span className={classes.UserImg}> <img src="https://i.guim.co.uk/img/media/fbb1974c1ebbb6bf4c4beae0bb3d9cb93901953c/10_7_2380_1428/master/2380.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=2813a4b0cc5e18aa2ba9e8ecb0297952" alt="UserImg"/> </span>
                     <h3>Joker</h3> 
                     <i className={`fas fa-caret-down`}></i>   
                  </div> 
        </div>
    )
}
