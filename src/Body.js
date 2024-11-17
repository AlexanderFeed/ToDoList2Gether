import "./Body.css";
function Body() {
  return (
    <div className="body">
      <div className="content">
        <h1>ToDoList2Gether</h1>
        <div className="buttons">
          <button className="button button__add">Add</button>
          <button className="button button__change">Change</button>
          <button className="button button__remove">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
