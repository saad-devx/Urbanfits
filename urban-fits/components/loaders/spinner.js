import React from 'react'

export default function Spinner() {
    return <div className="absolute w-full h-full flex justify-center items-center">
        <span className="w-3 h-3 md:h-7 md:w-7 animate-spin rounded-full border-2 md:border-4 border-solid border-white border-r-transparent" role="status"></span>
    </div>
}
