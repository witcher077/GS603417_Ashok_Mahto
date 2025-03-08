import { Link } from "react-router";
import "./nevigation.css"
import { MdOutlineStoreMallDirectory } from "react-icons/md";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { IoBarChartSharp } from "react-icons/io5";
import { BiBarChartSquare } from "react-icons/bi";
import { useState } from "react";



const Nevigation = () => {
    const [activeNav,setActive]=useState<String>("Store")
 
  return (
    <nav className="navleft">
        <Link onClick={()=>setActive("Store")} to="/"><div className={`navItems ${activeNav==="Store" && "active"}`} ><MdOutlineStoreMallDirectory/> <span>Store</span></div></Link>
        <Link onClick={()=>setActive("SKU")} to="/sku"><div className={`navItems ${activeNav==="SKU" && "active"}`} ><TbTriangleSquareCircle/><span>SKU</span></div></Link>
        <Link onClick={()=>setActive("Planing")} to="/planing"><div className={`navItems ${activeNav==="Planing" && "active"}`} ><IoBarChartSharp/><span>Planing</span></div></Link>
        <Link onClick={()=>setActive("Charts")} to="/charts"><div className={`navItems ${activeNav==="Charts" && "active"}`} ><BiBarChartSquare/><span>Charts</span></div></Link>
       
    </nav>
  );
};

export default Nevigation;
