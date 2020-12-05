import React, { useEffect, useState } from "react";
import ListOfResult from "./ListOfResult";

const ApiFetch = () => {
  const [subscribedState, setSubscribedState] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetch(
        "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
      ).then((res) => res.json());

      console.log(result);
      setSubscribedState(result);
    })();
  }, []);

  return (
    <div>
      {subscribedState.map((val, index) => {
        return <ListOfResult key={index} text={val}></ListOfResult>;
      })}
    </div>
  );
};
export default ApiFetch;
