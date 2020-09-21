import classes from "./RightSide.module.css" 
import {Pie} from "react-chartjs-2" ;
import React, { Component } from 'react'

export class RightSide extends Component { 
  
  


    render() {
   
     const state =
        {
         labels: ['Active', 'Hold', 'Closed'],
         datasets: [
           {
             label: 'Audience Matrices',
             backgroundColor: [
               '#FFBF00',
               '#23ff0a',
               '#3366FF'
              
             ],
             hoverBackgroundColor: [
             '#501800',
             '#4B5000',
             '#175000'
             
             ],
             data: [40,35,25]
           }
         ]
       }
      
      
      
      
      
      
      
      
        return (
            <div className={classes.RightSideWrapper}>
            <div className={classes.BoxesWrapper}>
                <div className={classes.MainBoxWrapper1}>
                   <div className={classes.Upperline}>
                       <span>Visitors</span>
                       <span>+10%</span>
                   </div>
                   <div className={classes.Secondline}>13.7K</div> 
                   <div className={classes.Thirdline}>172,458 Target Users</div>   
                </div>
                <div className={classes.MainBoxWrapper2}>
                   <div className={classes.Upperline}>
                       <span>Bounce Rate</span>
                       <span>+17%</span>
                   </div>
                   <div className={classes.Secondline}>41.6%</div> 
                   <div className={classes.Thirdline}>472,458 Target Users</div>   
                </div> 
                <div className={classes.MainBoxWrapper3}>
                   <div className={classes.Upperline}>
                       <span>Users</span>
                       <span>+10%</span>
                   </div>
                   <div className={classes.Secondline}>19M</div> 
                   <div className={classes.Thirdline}>172,458 Target Users</div>   
                </div> 
                <div className={classes.MainBoxWrapper4}>
                   <div className={classes.Upperline}>
                       <span>New Contacts</span>
                       <span>-5%</span>
                   </div>
                   <div className={classes.Secondline}>75</div> 
                   <div className={classes.Thirdline}>172,458 Target Users</div>   
                </div> 
          
            </div>
            <div className={classes.ChartWrapper}>
            <div className={classes.PieChart}> 
                <p>ANALYTICS AUDIENCE MATRICES</p> 
                <i className={`fas fa-ellipsis-h`}></i>
            </div>     
            <div className={classes.PieChartBorder}></div>  
             <div>
             <Pie data={state} options={{title:{display:true,text:"",fontSize:18 }
             
            ,legend:{
                display:true,
                position:'top', labels :{
                    usePointStyle : true , padding : 40   
                } 
                
              } }}/>

            </div>    
            </div> 
          </div>
        )
    }
}

export default RightSide
