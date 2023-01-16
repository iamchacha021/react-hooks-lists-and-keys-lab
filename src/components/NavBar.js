import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linksRet = links.map((link, index)=>{
    return (
      
        <a key={link} href="#home">{link}</a>
      
    )
  })

  return <nav>{linksRet}</nav>;
}

export default NavBar;
