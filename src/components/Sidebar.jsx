import React from 'react'
import '../styles/Sidebar.css'
import { AiFillProduct } from "react-icons/ai";
import { IoIosContacts } from "react-icons/io";
import { BiSolidDashboard,BiSolidUser } from "react-icons/bi";
import { GiFireShrine } from "react-icons/gi";
import { RiWirelessChargingLine} from "react-icons/ri";
import { MdNotificationsActive, MdCategory } from "react-icons/md";
import { useNavigate,useMatch} from "react-router-dom";
import { useDispatch,useSelector} from 'react-redux';
import { logout_user, sideBarOpen } from '../reduxContainer/action/Action';
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";


const Sidebar = () => {
  // console.log(props);
  const navigate = useNavigate();
  // const [isOpen, setisOpen] = useState(false);
  const isOpen=useSelector(state=>state.isOpenSide)
//using use match
 const product=useMatch('/product')
  const category=useMatch('/category');
  const address=useMatch('/addresses');
  const order=useMatch('/order');
  const wallet = useMatch('/wallet');
  const profile=useMatch('/profile');
  const notification=useMatch('/notification');
  const contacts=useMatch('/contacts');
  const productDetails = useMatch('/product/productdetails/:id')
  const addProduct=useMatch('/product/addproduct')
  const categoryDetails = useMatch('/category/categorydetails/:list')
const dispatch=useDispatch();

  // const handleGame=()=>{
  //   navigate('/game');
  // }
  const handleSidebar = () => {
    // setisOpen((prev) => !prev);
    dispatch(sideBarOpen())
    // <Productpage isOpen={isOpen}/>
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
    { onClick: () => navigate('/product'), match: product || productDetails || addProduct, icon: <AiFillProduct/>, text: 'Products' },
    { onClick: () => navigate('/category'), match: category || categoryDetails, icon: <MdCategory/>, text: 'Category' },
    { onClick: () => navigate('/addresses'), match: address, icon: <BiSolidDashboard />, text: 'Address' },
    { onClick: () => navigate('/order'), match: order, icon: <GiFireShrine />, text: 'View Orders' },
    { onClick: () => navigate('/wallet'), match: wallet, icon: <BiSolidUser />, text: 'Wallet' },
    { onClick: () => navigate('/profile'), match: profile, icon: <RiWirelessChargingLine />, text: 'Profile' },
    { onClick: () => navigate('/notification'), match: notification, icon: <MdNotificationsActive />, text: 'Notification' },  
    { onClick: () => navigate('/contacts'), match: contacts, icon: <IoIosContacts/>, text: 'Contacts' },
  ];

  return (
    <>
      <div className='dot' style={{ left: !isOpen ? "22%" : "" }}><PiDotsThreeVerticalBold onClick={handleSidebar}/></div>
    <div className="sidebar" style={{width:isOpen?"220px":"40px"}} > 
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