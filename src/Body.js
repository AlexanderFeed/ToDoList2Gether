import { useState } from "react";
import "./Body.css";
function Body() {
  const [lists, setLists] = useState([]);
  const [listToShow, setListToShow] = useState(0);
  console.log(...lists);
  const handleAdd = () => {
    const listId = lists.length + 1;
    setLists([...lists, { id: listId, items: [lists.length] }]);
    setListToShow(lists.length);
  };
  const handleChange = () => {};

  const handleRemove = () => {};

  return (
    <div className="section">
      <div className="head">
        <div className="content__head">
          <h1>ToDoList2Gether</h1>
          <div className="buttons">
            <button onClick={handleAdd} className="button button__add">
              Add
            </button>
            <button onClick={handleChange} className="button button__change">
              Change
            </button>
            <button onClick={handleRemove} className="button button__remove">
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="uli">
        <div className="uli__content">
          <h6 className="tops">Tasks</h6>
          {lists[listToShow]?.items ? (
            <div key={lists[listToShow]?.items.id}>
              <ul>
                {lists[listToShow].items.map((item, index) => (
                  <li key={index} className="li__component">
                    <button className="li__button">Button</button>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p style={{textAlign:"center"}}>Add new tasks!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Body;
