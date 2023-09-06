// eslint-disable-next-line no-unused-vars
import React from "react"

function TodoItem() {
    return (
      <>
        <div className="mt-16 inline-flex border-2">
            <button className="mr-4 border-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </button>
            <p>debes por hacer</p>
            <button className="ml-4 border-2 absolute right-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </div>
      </>
    )
  }
  export default TodoItem;