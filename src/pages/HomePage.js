import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function HomePage() {
    const history = useHistory();
    const [playerDetail, setPlayerDetail] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3001/playerDetail").then(
            (res)=>{
                setPlayerDetail(res.data);
            }
        ).catch(err=>console.log(err))
    },[]);
  return (
    <div>
      {playerDetail.map((value,key)=>{
        return (
            <div onClick={()=>{history.push(`/playerDetail/${value.id}`)}}>
                <div><img src={value.photoUrl} alt={value.DOB}/></div>
                <div>{value.name}</div>
            </div>
        );
      })}
    </div>
  );
}

export default HomePage;
;