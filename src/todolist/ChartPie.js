import React from "react";
import Chart from "react-apexcharts";




function PieChart({ completedTasks, unCompletedTasks}){

    return(
        <React.Fragment>
          
                <Chart 
                   
                    type="donut"
                    width={370}
                    height={350}
                    series={[ completedTasks, unCompletedTasks]}
                    
                    options= {{
                       
                        
                        labels:["Completed Tasks","Uncompleted Tasks", ],
                        colors:['#d82f35',"#a9a58d"],
                        
                        fill: {
                            colors: ['#d82f35',"#a9a58d"],
                            
                        },
                        markers: {
                            colors: ['#FFF']
                         },
                        dataLabels: {
                            style: {
                              colors: ['#fff'],
                              fontWeight:700,
                              
                            }
                        },
                        plotOptions:{
                            pie:{
                                donut:{
                                    labels:{
                                        show:true,
                                        total:{
                                            show:true,
                                            showAlways:true,
                                            color:"#fff",
                                            fontFamily:"Philosopher",
                                            fontWeight:700,
                                            fontSize:20,
                                           
                                        
                                        },
                                        value:{
                                            color:"#fff",
                                            fontFamily:"Philosopher",
                                            fontWeight:700,
                                            fontSize:20,
                                        }
                                    }
                                    
                                }
                            }
                        },
                        
                        legend:{
                            fontFamily:'Philosopher',
                            fontWeight:700,
                            fontSize:15,
                            position:'top',
                            
                            labels:{
                                colors:'#fff'
                            },
                            itemMargin: {
                                horizontal: 20,
                                vertical: 0
                            },
                          
                        }
                    }}
                   
                    
                >

                </Chart>
            

        </React.Fragment>
    );
}
export default PieChart;