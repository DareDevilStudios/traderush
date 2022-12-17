import {useState} from 'react'
import Dropdown from './Dropdown'
export default function Trading_down() {

    const [isHidden, setHidden] = useState(false)
    return (
        <form className="w-full flex p-5 justify-center mt-9 h-80">
            <h1 className="p-3 mr-4">Select a Graph which is going to be next </h1>
            
            <Dropdown/>

            <button type="submit" className="text-white h-max mr-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">GO...</button>
        </form>
    )
}