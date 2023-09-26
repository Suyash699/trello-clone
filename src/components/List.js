import React from "react";
import Card from "./Card";
import AddNew from "./AddNew";
import { useSelector } from "react-redux/es/hooks/useSelector";

const List = () => {
  const listItems = useSelector((store) => store.listSlice.list);
  return (
    <>
      {listItems.map((list) => (
        <div className="p-3 w-1/3" key={list.id}>
          <div className="p-3 bg-gray-200">
            <div>{list.title}</div>
            <div>
              <AddNew />
            </div>
          </div>
        </div>
      ))}

      <div className="p-3 w-1/3">
        <div className="p-3 bg-gray-200">
          {/* <Card /> */}
          <AddNew />
        </div>
      </div>
    </>
  );
};

export default List;
