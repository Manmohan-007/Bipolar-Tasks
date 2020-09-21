import classes from './Dashboard.module.css'
import React from 'react'
import LandingPage from '../../Components/Dashboard/LandingPageLeft/LandingPage'
import TopBar from "../../Components/Dashboard/TopBar/Topbar"
import RightSide from '../../Components/Dashboard/LandingPageRight/RightSide'
export default function Dashboard() {
    return (
        <div>
            <TopBar/> 
            <div className={classes.LandingPageWrapper}>
              <LandingPage/> 
              <RightSide/>
            </div>
           
        </div>
    )
}
