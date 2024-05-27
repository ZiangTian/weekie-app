import React,{useState} from "react";
import './taskItemStyles.css'
interface Iprops{
    event_id: String
    title:String
    startTime: string
    endTime: string
    deadline: string
    // Importance:boolean
    // Urgency:boolean
    tag:string
    desc:string
    //status:doing||done
}
export default function TaskItem(props:Iprops){
    const {event_id,title,startTime,endTime,deadline,tag,desc}=props
    return (
        <div className="task-item">
           <div className="task-item_info">
              <div className="task-item_title">
                {title}
              </div>
              <div className="task-item_desc">
                {desc}
              </div>
           </div>
            <div className="task-item_status">
              <div className="task-item_ddl">
                {deadline}
              </div>
              <button className="task-item_finish-btn">
              Done
              </button>
            </div>
           
        </div>
    )
}

         
    

    
    
