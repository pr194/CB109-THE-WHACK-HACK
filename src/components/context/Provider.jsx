
import React,{useState} from "react";
import CityData from "./CityData";
const Provider = ({childeren}) => {
    const [data,setdata]=useState([])
  return (
    <CityData.Provider value={data}>
      {childeren}
    </CityData.Provider>
  )
}

export default Provider

