import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function Weather() {
    let [searchRes,setSearchRes]=useState({})
    let importInfo=(res)=>{
        setSearchRes(res);
        console.log(`We---${searchRes}`)
    }
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Weather App</h1>
            <SearchBox importInfo={importInfo}/>
            <InfoBox info={searchRes}/>
            <p>Made By <a href="https://www.facebook.com/siam.shuvro.1" target="_blank">Siam Kabir</a></p>
        </div>
    )
}