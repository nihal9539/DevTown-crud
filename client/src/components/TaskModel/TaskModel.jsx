import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

import { FaImages } from "react-icons/fa";
import { GrFormPreviousLink } from "react-icons/gr";
import axios from 'axios';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "45%",
    height: "68vh",
    bgcolor: 'background.paper',
    borderRadius: "1rem",
    boxShadow: 24,
    p: 4,
};


export default function TaskModel({ modelOpen, setModelOpen }) {
    // const user = JSON.parse(localStorage.getItem('user'))



    return (
        <div>

            <Modal
                open={modelOpen}
                onClose={() => setModelOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>

                    <div className='flex flex-col justify-between items-center  h-full'>
                        <div className='w-full'>
                            <form class="w-full space-y-9">
                                <div class=" flex flex-row gap-3">
                                    <label for="large-input" class="block mb-2 text-sm font-medium   text-black">Title</label>
                                    <input type="text" id="large-input" class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div class=" flex flex-row gap-3">
                                    <label for="large-input" class="block mb-2 text-sm font-medium   text-black">Task</label>
                                    <input type="text" id="large-input" class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div class=" flex flex-row gap-3">
                                    <label for="large-input" class="block mb-2 text-sm font-medium   text-black">Date</label>
                                    <input type="text" id="large-input" class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                                <div class=" flex flex-row gap-3">
                                    <label for="large-input" class="block mb-2 text-sm font-medium   text-black">Description</label>
                                    <textarea type="text" id="large-input" class="block w-full p-2 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                </div>
                               
                            </form>
                        </div>

                        <div><button className='p-2 bg-blue-500 rounded-lg px-6 text-white'>Button</button></div>

                    </div>



                </Box>
            </Modal>
        </div>
    );
}
