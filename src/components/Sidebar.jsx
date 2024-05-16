import React from 'react'
import '../styles/Sidebar.css'
import { IoFootballOutline,IoPeopleSharp  } from "react-icons/io5";
import { BsCalendar2EventFill } from "react-icons/bs";
import { BiSolidDashboard,BiSolidUser } from "react-icons/bi";
import { GiFireShrine } from "react-icons/gi";
import { RiWirelessChargingLine} from "react-icons/ri";
import { MdNotificationsActive,MdTipsAndUpdates,MdCalendarViewDay  } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import {useNavigate} from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleGame=()=>{
    // console.log("clicked on it");
    navigate('/game');
  }
  const handleEvent=()=>{
    navigate('/event')
  }
  const handleDash=()=>{
    navigate('/dash')
  }
  const handleRefree=()=>{
    navigate('/refree')
  }
  const handleUser=()=>{
    navigate('/users')
  }
  const handleLive=()=>{
    navigate('/live')
  }
  const handleNotification=()=>{
    navigate('/notification')
  }
  const handleView=()=>{
    navigate('/view')
  }
  const handleTeam=()=>{
    navigate('/team')
  }
  const handleUpdate=()=>{
    navigate('/update')
  }
  const handlePlayer=()=>{
    navigate('/player')
  }
  const handleLogout=()=>{
    navigate('/')
    localStorage.clear();
  }

  return (
    <div className="sidebar">       
       <div onClick={handleGame}><IoFootballOutline/> <span>Games Management</span></div>
       <div onClick={handleEvent}><BsCalendar2EventFill/> <span>Event Management</span></div>
       <div onClick={handleDash}><BiSolidDashboard/> <span>Dashboard Management</span></div>
       <div onClick={handleRefree}><GiFireShrine/> <span>Refree Management</span></div>       
       <div onClick={handleUser}><BiSolidUser/> <span>User Management</span></div>       
       <div onClick={handleLive}><RiWirelessChargingLine /> <span>Live Casting</span></div>       
       <div onClick={handleNotification}><MdNotificationsActive /> <span>Notification</span></div>       
       <div onClick={handleView}><MdCalendarViewDay /> <span>View & Export Report</span></div>       
       <div onClick={handleTeam}><IoPeopleSharp/> <span>Teams Created by User</span></div>       
       <div onClick={handleUpdate}><MdTipsAndUpdates /> <span>Games update</span></div>       
       <div onClick={handlePlayer}><FaPeopleGroup /> <span>Player</span></div> 
       <div className='logout' onClick={handleLogout}>Logout</div>            
    </div>
  )
}

export default Sidebar