/* eslint-disable react/prop-types */
import "../stylesheets/Sidebar.css";
import micpng from "../assets/mic.png"
import { Button } from "react-bootstrap";
import { useState } from "react";
function Sidebar(){
    const [connected,setconnected] = useState(false)
    let OPEN = false;
    let io;
    const connectSocket = ()=>{
        
        io = new WebSocket("wss://socketsbay.com/wss/v2/1/demo/")
        
        io.onopen=(event)=>{
            console.log(event)
            console.log("Is Open")
            OPEN = true;
        }
        io.onmessage = (event)=>{
            console.log(event.data)
            console.log(event)
        }

        

        
        
    }
    return(<>
    <div id="Sidebar">
        <Button variant="Dark" style={{color:"white"  }} onClick={()=>{
           if(OPEN){
            io.send("Hello")
           }
        }}>Send</Button>
        <Button id="Gent" className="chatroom" onClick={()=>{
            
            setconnected(!connected)
            if(connected){
                console.log("connecting")
                connectSocket()
            }
        }}> Gentlemens Lounge
        <img src={micpng} className="micicon"></img>
        </Button>
       
        
    </div>
    </>)
}


export default Sidebar;