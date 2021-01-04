import React, { useState } from "react";
import ListOfRecord from "./ListOfRecord";
import Sub from "./Calculate";

const Shift = () => {
  const [shift, setShift] = useState({
    eName: "",
    sTime: "",
    eTime: "",
  });
  const [record, setNewRecord] = useState([]);
  const [search, setSearch] = useState([]);
  const inputEvent = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setShift((preValue) => {
      if (name === "eName") {
        return {
          eName: value,
          sTime: preValue.sTime,
          eTime: preValue.eTime,
        };
      } else if (name === "sTime") {
        return {
          eName: preValue.eName,
          sTime: value,
          eTime: preValue.eTime,
        };
      } else if (name === "eTime") {
        return {
          eName: preValue.eName,
          sTime: preValue.sTime,
          eTime: value,
        };
      }
    });
  };
  const onSubmits = (event) => {
    event.preventDefault();
    setNewRecord((preValue) => {
      return [...preValue, shift];
    });
  };
  return (
    <>
      <form onSubmit={onSubmits}>
        <div>
          <h1>Shift Overview</h1>
          <div>Submit Shift</div> <br></br>
          <div>
            Name:{" "}
            <input
              type="text"
              placeholder="Enter name"
              name="eName"
              onChange={inputEvent}
              value={shift.eName}
            ></input>
            <br></br>
            <br></br>
            Starting Time:{" "}
            <input
              type="time"
              name="sTime"
              onChange={inputEvent}
              value={shift.sTime}
            ></input>
            <br></br>
            <br></br>
            Ending Time:{" "}
            <input
              type="time"
              name="eTime"
              onChange={inputEvent}
              value={shift.eTime}
            ></input>
            <br></br>
            <button onClick={onSubmits}>Save Shift</button>
            {/*<h2>
              {record.map((val, index) => {
                return <ListOfRecord key={index} text={val}></ListOfRecord>;
              })}
            </h2>*/}
          </div>
          <div>
            Search:{" "}
            <input
              type="search"
              placeholder="Search by Name"
              onChange={(e) => {
                if (record.length !== 0) {
                  const searchName = record.filter((name) => {
                    return name.eName
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase());
                  });
                  setSearch(searchName);
                }
              }}
            ></input>
            <div>
              {search.map((val, index) => {
                return <ListOfRecord key={index} text={val}></ListOfRecord>;
              })}
            </div>
            <div>
              {search.map((val, index) => {
                return <Sub key={index} text={val}></Sub>;
              })}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default Shift;
