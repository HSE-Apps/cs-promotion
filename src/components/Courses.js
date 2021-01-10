import React from 'react'
import {section, title, courses, recommendations, resources} from '../Data'

import pathways from '../images/Cs_Pathways_2.png'
import {List, Timeline, Descriptions, Card} from 'antd'


const Courses = () => {
    return (
        <div className="body">

            <div style={title}>Computing Courses At HSE</div>
            <div style={section}>
                
                <List
                    style={{width:"65%", borderRadius:"15px", marginLeft: "auto", marginRight: "auto"}}
                    dataSource={courses}
                    bordered={true}
                    renderItem={item => 
                        <List.Item >
                            <List.Item.Meta
                                title={item.name}
                                description={item.description}
                            />
                            <a href={item.url} target="_blank">More Info</a>
                        </List.Item>
                    }
                ></List>

            </div>
            <img src={pathways} style={{width: "80%", marginTop: "0px", marginBottom: "50px"}}/>
            
            <div style={title}>Sample Schedules for Certain Paths</div>
            <div style={{fontWeight: "500", fontSize: "10px", color: "rgba(0, 0, 0, 0.45)"}}>Don't need to take all courses listed in a particular year</div>
            <div style={section}>
                {["CS", "IT Support"].map((cat) => 
                    <div style={{width:"47.5%"}}>
                        <div style={{textAlign:"center", padding:"10px", fontWeight:"500", border:"1px solid lightgray", borderRadius:"15px 15px 0 0"}}>{cat} Students</div>
                            <Descriptions bordered column={1} style={{marginTop:"-1px"}}>
                            {recommendations[cat].map((item) => 
                                <Descriptions.Item label={item.name}>
                                    <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
                                        {[0,1].map((evenOdd) => 
                                            <div style={{width:"50%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                                {item.courses.map((courseName, index) =>
                                                    <div>
                                                        {index%2==evenOdd &&
                                                            <div>{courseName}</div>
                                                        }
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </Descriptions.Item>
                            )}
                        </Descriptions>
                    </div>
                )}
            </div>
           
            <div style={title}>Other Learning Resources</div>
            <div style={{...section, border:"1px solid #d9d9d9", borderRadius:"15px", padding:"15px", display:"block"}}>
                {[0,1].map((evenOdd) => 
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        {resources.map((item, index) => {
                            if (index%2==evenOdd) {
                                return(
                                    <div style={{backgroundColor:"#fafafa", padding:"10px 20px 10px 20px", margin:"10px", borderRadius:"10px", width: 95/(resources.length/2) + "%"}}>
                                        <div>{item.name}</div>
                                        <div style={{color:"gray", fontSize:"13px"}}>{item.description}</div>
                                        <a style={{fontSize:"13px"}} href={item.link} target="_blank">Learn More</a>
                                    </div>
                                )
                            }
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Courses