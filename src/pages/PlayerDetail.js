import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";

function PlayerDetail() {
  const [detailById, setDetailById] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/playerDetail/${id}`)
      .then((res) => {
        setDetailById(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <div><img src={detailById.photoUrl}/></div>
      <div><h1>Name:</h1>{detailById.name}</div>
      <div><h1>Birth Place:</h1>{detailById.birthPlace}</div>
      <div><h1>Career:</h1>{detailById.CareerDescription}</div>
      <div><h1>Number Of Matches:</h1>{detailById.numberOfMatches}</div>
      <div><h1>Score:</h1>{detailById.score}</div>
      <div><h1>Fifties:</h1>{detailById.fifties}</div>
      <div><h1>Centuries:</h1>{detailById.centuries}</div>
      <div><h1>Wickets:</h1>{detailById.wickets}</div>
      <div><h1>Average:</h1>{detailById.average}</div>
    </div>
  );
}

export default PlayerDetail;
