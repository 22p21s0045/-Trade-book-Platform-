import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBeer,FaHotjar } from 'react-icons/fa';
import { VscFeedback } from "react-icons/vsc";
import { MdHistory } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { IconContext } from "react-icons";
import { color } from '@mui/system';
function Sidebar() {
    return (
        <div>
            <ProSidebar width = "180px">
  <Menu iconShape="square">
  <SubMenu title="หมวดหมู่">
      <MenuItem>จิตวิทยา</MenuItem>
      <MenuItem>ภาษา</MenuItem>
    </SubMenu>
    <MenuItem icon={<FaBeer />}>โพสบันทึก</MenuItem>
    <MenuItem icon = {<VscFeedback />}>ฟีดเเบค</MenuItem>
    <MenuItem  icon={<FaBeer />}>ประมูล</MenuItem>
    
    <MenuItem icon = {<FaHotjar />}>มาเเรง</MenuItem>
    <MenuItem icon = {<MdHistory/>}>ประวัติเเลก</MenuItem>
    <MenuItem icon = {<GrAnnounce />}>ประกาศ</MenuItem>


    <SubMenu title="Components" icon={<FaBeer />}>
      <MenuItem icon = {<VscFeedback />}>ฟีดเเบค</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
        </div>
    )
}

export default Sidebar
