import React, { useState } from "react";
import { NavItem } from "react-bootstrap";
import { useLocation, NavLink, Link } from "react-router-dom";

const SidebarLink= `
    display:flex;
    color:#e1e9fc;
`;
const SidebarLabel = ``;
const DropdownLink= `
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        backgound: #632ce4;
        cursor:pointer;
    }
    `;

const Submenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subnav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>
                        {item.name}
                    </SidebarLabel>
                </div>
                <div>
                    {item.subnav && subnav ? item.iconOpened : item.subnav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav &&  item.subnav.map((item, index ) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.name}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )


};
export default Submenu;