import React from 'react'
import '../styles/Sidebar.css'
import { IoFootballOutline,IoPeopleSharp  } from "react-icons/io5";
import { BsCalendar2EventFill } from "react-icons/bs";
import { BiSolidDashboard,BiSolidUser } from "react-icons/bi";
import { GiFireShrine } from "react-icons/gi";
import { RiWirelessChargingLine} from "react-icons/ri";
import { MdNotificationsActive,MdTipsAndUpdates,MdCalendarViewDay  } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { useNavigate,useMatch} from "react-router-dom";
import { useDispatch} from 'react-redux';
import { logout_user } from '../pages/login/reduxContainer/Action';




const Sidebar = () => {
  // console.log(props);
  const navigate = useNavigate();

//using use match
 const product=useMatch('/product')
  const category=useMatch('/category');
  const dash=useMatch('/dash');
  const refree=useMatch('/refree');
  const users=useMatch('/users');
  const live=useMatch('/live');
  const notification=useMatch('/notification');
  const view=useMatch('/view');
  const team=useMatch('/team');
  const update=useMatch('/update');
  const player=useMatch('/player');
  const productdetails = useMatch('/product/productdetails/:id')
  const addproduct=useMatch('/product/addproduct')
  const categorydetails = useMatch('/category/categorydetails/:list')
const dispatch=useDispatch();

  // const handleGame=()=>{
  //   navigate('/game');
  // }
  const handleProduct=()=>{
    navigate('/product');
  }
  const handleCategory=()=>{
    navigate('/category')
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
    dispatch(logout_user);
  }

  return (
    <div className="sidebar">       
      {/* <div onClick={handleGame} className={game ? 'active' : ""}><IoFootballOutline/> <span>Games Management</span></div> */}
      <div onClick={handleProduct} className={product ||productdetails || addproduct ?'active': ""}><IoFootballOutline /> <span>Products</span></div> 
      <div onClick={handleCategory} className={category || categorydetails ? 'active' : ""}><BsCalendar2EventFill/> <span>Category</span></div>
      <div onClick={handleDash} className={dash ? 'active' : ""}><BiSolidDashboard/> <span>Dashboard Management</span></div>
      <div onClick={handleRefree} className={refree ? 'active' : ""}><GiFireShrine/> <span>Refree Management</span></div>       
      <div onClick={handleUser} className={users ? 'active' : ""}><BiSolidUser/> <span>User Management</span></div>       
      <div onClick={handleLive} className={live ? 'active' : ""}><RiWirelessChargingLine /> <span>Live Casting</span></div>       
      <div onClick={handleNotification} className={notification ? 'active' : ""}><MdNotificationsActive /> <span>Notification</span></div>       
      <div onClick={handleView} className={view ? 'active' : ""}><MdCalendarViewDay /> <span>View & Export Report</span></div>       
      <div onClick={handleTeam} className={team ? 'active' : ""}><IoPeopleSharp/> <span>Teams Created by User</span></div>       
      <div onClick={handleUpdate} className={update ? 'active' : ""}><MdTipsAndUpdates /> <span>Games update</span></div>       
      <div onClick={handlePlayer} className={player ? 'active' : ""}><FaPeopleGroup /> <span>Player</span></div> 
       <div className='logout' onClick={handleLogout}>Logout</div>            
    </div>
  )
}

export default Sidebar