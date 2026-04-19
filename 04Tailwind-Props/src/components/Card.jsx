import React from 'react'

// const Card = (props) => {
const Card = ({name,someObj}) => {
    // console.log(props)
  return (
    <div className="bg-white max-w-sm border border-gray-200 rounded-lg shadow-md">
      
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/37127302/pexels-photo-37127302.jpeg"
          alt="card"
        />
      </a>

      <div className="p-6 text-center">
        
        {/* Badge */}
        <span className="inline-flex items-center bg-blue-100 border border-blue-300 text-blue-700 text-xs font-medium px-2 py-1 rounded">
          {someObj.place || "Beautiful Places In Nepal"}
        </span>

        {/* Title */}
        <h5 className="mt-4 mb-6 text-2xl font-semibold tracking-tight text-gray-800">
          {someObj?.title || "Read More"}
        </h5>

        {/* Button */}
        <a
          href="#"
          className="inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 focus:outline-none"
        >
          Read More
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14m0 0l-4 4m4-4l-4-4"
            />
          </svg>
        </a>

      </div>
    </div>

  )
}

export default Card
