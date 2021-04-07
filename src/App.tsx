// Import useState, useEffect hooks
import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
// Import ToDoItem from 'ToDoItem.tsx' in the same directory

import './App.css';

// Define 'Item' interface with:
// property id of type string
// property description of type string
// property completed of type boolean
export interface Item {

}

const App: React.FC = () => {
  // Define useState hook of type Item[] with default value of [] to store an array of To-Do items
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const addItem = () => {
    if (inputRef.current && inputRef.current.value !== '') {
      const description = inputRef.current.value;
      // Add a new To-Do object of type Item in items using the useState hook
      // eg.
      // {
      //   id: uuidv4(),      // Assign a universally unique identifier to the 'id' property of the To-Do object
      //   description,       // Assign input entered by the user to the 'description' property of the To-Do object
      //   completed: false,  // Assign false to the 'completed' property of the To-Do object upon creation
      // }
      inputRef.current.value = '';
      inputRef.current?.focus();
    }
  }

  // Toggle property 'completed' in item of id
  // 1. Find the index of item having id in items
  // 2. Create a new array of items
  // 3. Toggle the 'completed' property of item in the new array
  // 4. Set the new array using the useState hook
  const toggleItem = (id: string) => {

  }

  // Remove item of id from items
  // 1. Filter existing items with id not equal to the id of the removed item
  // 2. Set the filtered array using the useState hook
  const removeItem = (id: string) => {

  }

  return (
    <div className="todolist">
      <div className="heading">
        <h1 className="title">To-Do List</h1>
      </div>
      <input
        ref={inputRef}
        type="text"
      />
      {/* Invoke addItem upon onClick event */}
      <button>
        Add
      </button>
      <div className="items">
        <ul>
          {/* Map each item in items into a <ToDoItem /> with props 'item', 'toggleItem', 'removeItem' */}
          {items.map(item => (
            <ToDoItem
              key={item.id}
            />
          ))}
        </ul>
      </div>
      {/* Display number of non-completed To-Do items */}
      <p>{`No. of items remaining: `}</p>
    </div>
  );
}

export default App;
