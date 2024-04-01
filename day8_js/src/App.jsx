import { useState } from 'react';
import './App.css'
const teams = [
  {
    rank: 1,
    name: "담원 기아",
    win: 12,
    lose: 6,
    winLoseDiff: 15,
    rate: 0.0,
    kda: 0.0,
    kill: 607,
    death: 508,
    assist: 1386,
  },
  {
    rank: 2,
    name: "농심",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    rate: 0.0,
    kda: 0.0,
    kill: 589,
    death: 513,
    assist: 1285,
  },
  {
    rank: 2,
    name: "젠지",
    win: 12,
    lose: 6,
    winLoseDiff: 8,
    rate: 0.0,
    kda: 0.0,
    kill: 605,
    death: 489,
    assist: 1367,
  },
  {
    rank: 4,
    name: "T1",
    win: 11,
    lose: 7,
    winLoseDiff: 6,
    rate: 0.0,
    kda: 0.0,
    kill: 504,
    death: 447,
    assist: 1190,
  },
  {
    rank: 5,
    name: "피어엑스",
    win: 11,
    lose: 7,
    winLoseDiff: 5,
    rate: 0.0,
    kda: 0.0,
    kill: 514,
    death: 568,
    assist: 1223,
  },
  {
    rank: 6,
    name: "아프리카",
    win: 11,
    lose: 7,
    winLoseDiff: 4,
    rate: 0.0,
    kda: 0.0,
    kill: 530,
    death: 489,
    assist: 1324,
  },
  {
    rank: 7,
    name: "KT",
    win: 7,
    lose: 11,
    winLoseDiff: -4,
    rate: 0.0,
    kda: 0.0,
    kill: 495,
    death: 559,
    assist: 1281,
  },
  {
    rank: 8,
    name: "한화 생명",
    win: 7,
    lose: 11,
    winLoseDiff: -9,
    rate: 0.0,
    kda: 0.0,
    kill: 495,
    death: 559,
    assist: 1122,
  },
  {
    rank: 9,
    name: "OK저축은행",
    win: 5,
    lose: 13,
    winLoseDiff: -8,
    rate: 0.0,
    kda: 0.0,
    kill: 483,
    death: 514,
    assist: 1184,
  },
  {
    rank: 10,
    name: "DRX",
    win: 2,
    lose: 16,
    winLoseDiff: -25,
    rate: 0.0,
    kda: 0.0,
    kill: 377,
    death: 630,
    assist: 858,
  },
];
const keys = [...Object.keys(teams[0])];
function App() {
  const [text, setText] = useState("");
  const [searchKey, setSearchKey] = useState("rank");
  const [tableView, setTableView] = useState([...teams]);
  return (
    <>
      <select onChange={(e) => setSearchKey(e.target.value)}>
        {keys.map((el) => (
          <option value={el}>---{el}---</option>
        ))}
      </select>
      <input onChange={(e) => setText(e.target.value)} placeholder='name을 입력해 주세요'></input>
      <button onClick={() =>{
        setTableView(
          teams
            .filter((el) => el[searchKey].toString().includes(text))
            .sort((a, b) => 
              searchKey === "rank"
                ? a.rank - b.rank
                : b[searchKey] - a[searchKey]
          ))
      }}>search</button>
      <table>
        <thead>
          <th>rank</th>
          <th>name</th>
          <th>win</th>
          <th>lose</th>
          <th>winLoseDiff</th>
          <th>rate</th>
          <th>kda</th>
          <th>kill</th>
          <th>death</th>
          <th>assist</th>
        </thead>
        <tbody>
          {tableView
            .map((team, i) => (
              <tr key={i}>
                <td>{team.rank}</td>
                <td>{team.name}</td>
                <td>{team.win}</td>
                <td>{team.lose}</td>
                <td>{team.winLoseDiff}</td>
                <td>{(team.win / (team.win + team.lose)).toFixed(2)}</td>
                <td>{((team.kill + team.assist) / team.death).toFixed(2)}</td>
                <td>{team.kill}</td>
                <td>{team.death}</td>
                <td>{team.assist}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
