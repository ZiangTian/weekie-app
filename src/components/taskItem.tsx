import React,{useState} from "react";
import './taskItemStyles.css'
import moment from "moment";
interface Iprops{
    // event_id: String
    title:string;
    startTime: moment.Moment;
    endTime: moment.Moment;
    deadLine: moment.Moment;
    Importance:boolean;
    Urgency:boolean;
    tag:string;
    desc:string | undefined;
    active:boolean
    onClick:()=>void
    onFinish:()=>void
    onRemove:()=>void
    //status:doing||done
}
export default function TaskItem(props:Iprops){
    const {title,startTime,endTime,deadLine,tag,active=false,onClick,onFinish,onRemove}=props
    return (
        <div className={`task-item ${active? 'task-item--active':''}`} >
           <div className="task-item_info" onClick={onClick}>
              <div className="task-item_title">
                {title}
              </div>
              <div className="task-item_ddl">
                {deadLine.format('YYYY-MM-DD HH:mm')}
              </div>
           </div>
            <div className="task-item_status">
              <button className="task-item_finish-btn" onClick={onFinish}>
              Done
              </button>
              <button className="task-item_dele-btn" onClick={onRemove}>
              Delete
              </button>
            </div>
           
        </div>
    )
}

         
    

    
    
