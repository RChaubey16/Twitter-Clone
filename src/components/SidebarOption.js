import React from 'react';
import './SidebarOption.css';

function SidebarOption({ text, Icon }) { 
    return (
        <div className="sidebarOption">
            {/* Passed Icon as a prop from Sidebar component and used in SidabarOption component */}
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption;