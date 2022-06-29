
import { useState, useRef } from 'react';

export default function ProjectCol(props) {


    const [show, setShow] = useState(false);
    const parentRef = useRef();

    return (
    
        <div className="project-col">            
            <button className="project-button" onClick = {() => setShow(!show)}>
                
                <div className='project-links'>
                    <h1> {props.title} </h1>
                </div>
                <div className='project-links'>
                    {props.links}
                </div> 
                
            </button>
                <div className='project-section' ref={parentRef} style = {
                    show ? 
                        { height: parentRef.current.scrollHeight + "px"} 
                        : { height: "0px"
                        }}>
                    <div className='project-para'>
                    
                        {props.para}
                    </div>
                </div> 
        </div>
        
    );
}