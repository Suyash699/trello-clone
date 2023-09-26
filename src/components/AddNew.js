import React, { useState } from 'react';
import { addList } from '../store/listSlice';
import { useDispatch } from 'react-redux';

const AddNew = () => {
  const [inputVal, setInpuVal] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);
  const dispatch = useDispatch();
  const submitHandler = (e)=>{
    e.preventDefault();

    dispatch(addList({Id: Math.random(), title: inputVal}));
    setInpuVal("");
  }
  const updateInput=(e)=>{
    setInpuVal(e.target.value);
  }
  const openForm = ()=>{
    setIsFormVisible(true);
  }
  const closeForm = ()=>{
    setIsFormVisible(false);
  }
  return (
    <div>
      <button onClick={openForm}>+ AddNew</button>
      {isFormVisible && (
        <form onSubmit={submitHandler} className='mt-3'>
          <input value={inputVal} onChange={updateInput} />
          <div className='mt-3'>
            <button onClick={closeForm} className="mr-3">
              Cancel
            </button>
            <button onClick={submitHandler} className="px-3 py-1 bg-blue-500">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddNew