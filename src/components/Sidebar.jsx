import React, { useState } from 'react'
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
import { logout_user } from '../reduxContainer/Action';
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";



const Sidebar = () => {
  // console.log(props);
  const navigate = useNavigate();
  const [isOpen, setisOpen] = useState(false);
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
  const productDetails = useMatch('/product/productdetails/:id')
  const addProduct=useMatch('/product/addproduct')
  const categoryDetails = useMatch('/category/categorydetails/:list')
const dispatch=useDispatch();

  // const handleGame=()=>{
  //   navigate('/game');
  // }
  const handleSidebar = () => {
    setisOpen((prev) => !prev);
    // setlist(false);
  }
  // const handleProduct=()=>{
  //   navigate('/product');
  // }
  // const handleCategory=()=>{
  //   navigate('/category')
  // }
  // const handleDash=()=>{
  //     navigate('/dash')
  // }
  // const handleRefree=()=>{
  //   navigate('/refree')
  // }
  // const handleUser=()=>{
  //   navigate('/users')
  // }
  // const handleLive=()=>{
  //   navigate('/live')
  // }
  // const handleNotification=()=>{
  //   navigate('/notification')
  // }
  // const handleView=()=>{
  //   navigate('/view')
  // }
  // const handleTeam=()=>{
  //   navigate('/team')
  // }
  // const handleUpdate=()=>{
  //   navigate('/update')
  // }
  // const handlePlayer=()=>{
  //   navigate('/player')
  // }
  const handleLogout=()=>{
    navigate('/')
    localStorage.clear();
    dispatch(logout_user);
  }
  const menuItems = [
    { onClick: () => navigate('/product'), match: product || productDetails || addProduct, icon: <IoFootballOutline />, text: 'Products' },
    { onClick: () => navigate('/category'), match: category || categoryDetails, icon: <BsCalendar2EventFill />, text: 'Category' },
    { onClick: () => navigate('/dash'), match: dash, icon: <BiSolidDashboard />, text: 'Dashboard Management' },
    { onClick: () => navigate('/refree'), match: refree, icon: <GiFireShrine />, text: 'Refree Management' },
    { onClick: () => navigate('/users'), match: users, icon: <BiSolidUser />, text: 'User Management' },
    { onClick: () => navigate('/live'), match: live, icon: <RiWirelessChargingLine />, text: 'Live Casting' },
    { onClick: () => navigate('/notification'), match: notification, icon: <MdNotificationsActive />, text: 'Notification' },
    { onClick: () => navigate('/view'), match: view, icon: <MdCalendarViewDay />, text: 'View & Export Report' },
    { onClick: () => navigate('/team'), match: team, icon: <IoPeopleSharp />, text: 'Teams Created by User' },
    { onClick: () => navigate('/update'), match: update, icon: <MdTipsAndUpdates />, text: 'Games update' },
    { onClick: () => navigate('/player'), match: player, icon: <FaPeopleGroup />, text: 'Player' },
  ];

  return (
    <>
      <div className='dot' style={{ left: !isOpen ? "13%" : "" }}><PiDotsThreeVerticalBold onClick={handleSidebar}/></div>
    <div className="sidebar" style={{width:isOpen?"220px":"20px"}} > 
      {menuItems.map((item,idx)=>(
        <div key={idx} onClick={item.onClick} className={item.match?'active':""}>
          {item.icon}{isOpen&&<span>{item.text}</span>}
        </div>
      ))}
      {/* <div onClick={handleGame} className={game ? 'active' : ""}><IoFootballOutline/> <span>Games Management</span></div> */}
      {/* <div onClick={handleProduct} className={product ||productdetails || addproduct ?'active': ""}><IoFootballOutline /> <span>Products</span></div> 
      <div onClick={handleCategory} className={category || categorydetails ? 'active' : ""}><BsCalendar2EventFill/> <span>Category</span></div>
      <div onClick={handleDash} className={dash ? 'active' : ""}><BiSolidDashboard/> <span>Dashboard Management</span></div>
      <div onClick={handleRefree} className={refree ? 'active' : ""}><GiFireShrine/> <span>Refree Management</span></div>       
      <div onClick={handleUser} className={users ? 'active' : ""}><BiSolidUser/> <span>User Management</span></div>       
      <div onClick={handleLive} className={live ? 'active' : ""}><RiWirelessChargingLine /> <span>Live Casting</span></div>       
      <div onClick={handleNotification} className={notification ? 'active' : ""}><MdNotificationsActive /> <span>Notification</span></div>       
      <div onClick={handleView} className={view ? 'active' : ""}><MdCalendarViewDay /> <span>View & Export Report</span></div>       
      <div onClick={handleTeam} className={team ? 'active' : ""}><IoPeopleSharp/> <span>Teams Created by User</span></div>       
      <div onClick={handleUpdate} className={update ? 'active' : ""}><MdTipsAndUpdates /> <span>Games update</span></div>       
      <div onClick={handlePlayer} className={player ? 'active' : ""}><FaPeopleGroup /> <span>Player</span></div>  */}
        <div className='logout' onClick={handleLogout} ><IoIosLogOut/>{isOpen&&<span>Logout</span>}</div>            
    </div>
    </>
  )
}

export default Sidebar