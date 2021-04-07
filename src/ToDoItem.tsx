import React from 'react'
// Import Item from 'App.tsx' in the same directory


interface Props {
  item: Item;
  toggleItem: (id: string) => void;
  removeItem: (id: string) => void;
}

// Destructure props in the parenthesis
const ToDoItem: React.FC<Props> = () => {
  return (
    <li
      style={{
				// 'line-through' for completed To-Do item
				// 'none' for non-completed To-Do item

      }}
			// Invoke prop 'toggleItem' upon onClick event

			// Invoke prop 'removeItem' upon onDoubleClick event

    >
			{/* Display description of To-Do item */}

    </li>
  )
}

export default ToDoItem;
