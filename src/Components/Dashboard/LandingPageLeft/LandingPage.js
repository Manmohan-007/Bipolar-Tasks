import React from 'react'
import classes from "./landingpage.module.css"
export default function LandingPage() {
    return (
        <div className={classes.LeftSideMainWrapper}>
             <div className={classes.UserDivWrapper}>  
                  <img src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/03-the-joker-w1200-h630-1562679871.jpg?crop=0.525xw:1xh;center,top&resize=640:*"/>
                  <p>Joker<i className={`fas fa-caret-down ${classes.UserName}`}></i></p>  
                  
             </div>
             <div className={classes.DataWrapper}>
                  <div className={classes.RowData}> 
                  <div className={classes.frontWrap}>
                    <i className={`fas fa-tv`}></i>  
                    <p>Dashboard</p>  
                  </div>  
                    <span className={classes.RowDesc}> 
                        <i className={`fas fa-caret-down`}></i>
                    </span> 
                  </div>  
                  <div  className={classes.RowData}  > 
                  <div className={classes.frontWrap}>
                    <i class="fas fa-box-open"></i>  
                    <p>Application</p>  
                  </div>  
                    <span className={classes.RowDesc}> 
                    <i className={`fas fa-caret-down`}></i>
                    </span> 
                   </div>  
                  <div className={classes.RowData} > 
                  <div className={classes.frontWrap}>
                    <i class="fas fa-ticket-alt"></i>   
                    <p>Authentication</p> 
                  </div>  
                    <span className={classes.RowDesc}> 
                    <i className={`fas fa-caret-down`}></i>
                    </span> 
                 </div>   
                  <div className={classes.RowData}  > 
                  <div className={classes.frontWrap}>
                    <i class="far fa-file-word"></i>  
                    <p>Pages</p> 
                    </div>
                    <span className={classes.RowDesc}> 

                    <i className={`fas fa-caret-down`}></i>
                    </span> 
                  </div> 
             </div>  
             <div className={classes.border}></div> 
             <div className={classes.DataWrapper}>
                 <p className={classes.userInterface}>USER INTERFACE </p>   
                 
                  <div className={classes.RowData}> 
                  <div className={classes.frontWrap}>
                    <i className={`fas fa-tv`}></i>  
                    <p>Components</p>  
                  </div>  
                    <span className={classes.RowDesc}> 
                    <i className={`fas fa-caret-down`}></i>
                    </span> 
                  </div>  
                  <div  className={classes.RowData}  > 
                  <div className={classes.frontWrap}>
                    <i class="fas fa-box-open"></i>  
                    <p>Content</p> 
                  </div>  
                    <span className={classes.RowDesc}> 
                    <i className={`fas fa-caret-down`}></i>
                    </span> 
                   </div>  
                  <div className={classes.RowData} > 
                  <div className={classes.frontWrap}>
                    <i class="fas fa-ticket-alt"></i>   
                    <p>Utilities</p> 
                  </div>  
                    <span className={classes.RowDesc}> 
                    <i className={`fas fa-caret-down`}></i>
                    </span> 
                 </div>   
                  <div className={classes.RowData}  > 
                   <div className={classes.frontWrap}>
                    <i class="far fa-file-word"></i>  
                    <p>Forms</p> 
                   </div> 
                    <span className={classes.RowDesc}> 
                    <i className={`fas fa-caret-down`}></i>
                    </span> 
                  </div> 
             
                  <div className={classes.RowData}  > 
                  <div className={classes.frontWrap}>
                    <i class="fas fa-table"></i>  
                    <p>Tables</p> 
                  </div>  
                    <span className={classes.RowDesc}> 
                    <i className={`fas fa-caret-down`}></i>
                    </span> 
                  </div> 
                  <div className={classes.RowData}  > 
                  <div className={classes.frontWrap}>
                   <i class="fas fa-chart-pie"></i> 
                    <p>Charts</p> 
                  </div>  
                    <span className={classes.RowDesc}> 
                    <i className={`fas fa-caret-down`}></i>
                    </span> 
                  </div> 
                  <div className={classes.RowData}  > 
                  <div className={classes.frontWrap}>
                    <i class="fas fa-map-marked-alt"></i>  
                    <p>Maps</p> 
                  </div>  
                    <span className={classes.RowDesc}> 
                    <i className={`fas fa-caret-down`}></i>
                    </span> 
                  </div> 
             </div>  
             <div className={classes.border}></div>   
             <div className={classes.DataWrapper}> 
             <p className={classes.userInterface}>GETTING STARTED</p>    
                  <div className={classes.RowData}> 
                  <div className={classes.frontWrap}>
                    <i class="fas fa-book"></i> 
                    <p>Documentation</p>  
                  </div>
                  </div>  
                  <div  className={classes.RowData}  > 
                  <div className={classes.frontWrap}>
                    <i class="fas fa-eye"></i> 
                    <p>Changelog</p> 
                   </div>
                   </div>  
                  <div className={classes.RowData} > 
                  <div className={classes.frontWrap}>
                    <i class="fas fa-headphones"></i>  
                    <p>Support</p> 
                  </div> 
                 </div>   
             </div>   
        </div>
    )
}
