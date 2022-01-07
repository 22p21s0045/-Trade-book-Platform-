import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBeer,FaHotjar } from 'react-icons/fa';
import {FiArrowLeftCircle} from 'react-icons/fi';
import {FiArrowRightCircle} from 'react-icons/fi';
import { VscFeedback } from "react-icons/vsc";
import { MdHistory } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import {BiCategory} from "react-icons/bi";
import {BsBookmark} from "react-icons/bs";
import {RiAuctionLine} from "react-icons/ri";
import { IconContext } from "react-icons";
import { color } from '@mui/system';
import {useState} from 'react'
function Sidebar(prop:any) {
  const [isOpen, setIsOpen] = useState(false);
  const menuonClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
    return (
        <div>
            <ProSidebar width = "180px" collapsed = {isOpen}>
              <div className="logo" onClick={menuonClick}>
              {isOpen ?(
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
              </div>
  <Menu iconShape="circle">
  <SubMenu icon = {<BiCategory/>}title="หมวดหมู่">
      <MenuItem>จิตวิทยา</MenuItem>
      <MenuItem>ภาษา</MenuItem>
    </SubMenu>
    <MenuItem icon={<BsBookmark />}>โพสบันทึก</MenuItem>
    <MenuItem icon = {<VscFeedback />}>ฟีดเเบค</MenuItem>
    <MenuItem  icon={<RiAuctionLine />}>ประมูล</MenuItem>
    
    <MenuItem icon = {<FaHotjar />}>มาเเรง</MenuItem>
    <MenuItem icon = {<MdHistory/>}>ประวัติเเลก</MenuItem>
    <MenuItem icon = {<GrAnnounce />}>ประกาศ</MenuItem>


  </Menu>
</ProSidebar>
        </div>
    )
}

export default Sidebar
