import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";

const Home = () => {
    const ar = [1,2,3]
    return (
        <div className=''>
            <Sidebar />
            <div className='p-4 sm:ml-64 bg-gray-200 flex flex-col h-auto '>
                <div className='   px-4 py-3'>
                    <div className='flex flex-row w-full shadow-md gap-1 items-center justify-center  bg-blue-500 p-3 rounded-xl'>
                        <div className='w-2/12'>Title</div>
                        <div className='w-3/12'>Discription</div>
                        <div className='w-3/12'>Task</div>
                        <div className='w-2/12'>Date</div>
                        <div className='w-2/12'>Action</div>
                    </div>
                </div>
                {ar.map((r)=>(
                     <div className='  px-4 py-3 '>
                     <div className='flex flex-row w-full shadow-md gap-1 items-center justify-center  p-3 rounded-xl ' style={{ background: "rgba(255, 255, 255, 0.64)" }}>
                         <div className=' w-2/12'>Button click</div>
                         <div className=' w-3/12' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, exercitationem aliquam. Cum nihil quaerat quisquam, odit qui consectetur vel. Exercitationem delectus modi a eaque et quis pariatur doloribus, architecto inventore.</div>
                         <div className='w-3/12'>Task</div>
                         <div className='w-2/6'>Date</div>
                         <div className='w-2/6 flex flex-row gap-2 justify-center items-center' ><MdOutlineModeEdit size={30} color='blue'/><RiDeleteBin6Line size={30} color='red'/></div>
                     </div>
                 </div>
                ))}
               

            </div>

        </div>
    )
}

export default Home
