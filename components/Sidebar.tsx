import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBeer } from 'react-icons/fa';
function Sidebar() {
    return (
        <div>
            <ProSidebar width = "180px">
  <Menu iconShape="square">
    <MenuItem icon={<FaBeer />}>Dashboard</MenuItem>
    <SubMenu title="Components" icon={<FaBeer />}>
      <MenuItem>Component 1</MenuItem>
      <MenuItem>Component 2</MenuItem>
    </SubMenu>
  </Menu>
</ProSidebar>
        </div>
    )
}

export default Sidebar
