// eslint-disable-next-line no-unused-vars
import React from "react"

function TodoItem() {
    return (
      <>
        <div className="border-4 p-5 inline-flex "> {/* border-4 p-5 flex flex-row */}

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>{/* icono de + */}
            </button>

            <p className="ml-2 mx-2.5">debes por hacer</p>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>{/* icono de cancelar */}
            </button>
        </div>
      </>
    )
  }
  export default TodoItem;