const ListOfRecord = (props) => {
  return (
    <>
      <div>
        Name:{props.text.eName}
        <br></br>Start Time:{props.text.sTime}
        <br></br> End Time:{props.text.eTime}
      </div>
      <div></div>
    </>
  );
};
export default ListOfRecord;
