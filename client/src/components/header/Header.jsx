import React from "react"
import "./header.css"
const  header = () => {
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Giang's</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img class="headerImg"
            src="https://free4kwallpapers.com/uploads/originals/2019/04/23/mountains-landscape-wallpaper.jpg"
            alt="mainImg">
            </img>
        </div>
    )
}

export default header;;