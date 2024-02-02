import React, {useRef, useState} from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {ReactComponent as CancelIcon} from '../Assets/Icons/cancel.svg';
// import {ReactComponent as Loader} from '../Assets/Icons/loader.svg';
import {useUpload} from "../Hooks/upload";


function Upload(props) {
    const [imageUpload, setImageUpload] = useState({ utilityBillName: '' });
    const utilityInputRef = useRef(null);
    const [data, setData] = useState({
        company: '',
        file: '',
    })
    const { upload } = useUpload()

    const handleUpload = async (e) => {
        e.preventDefault()
        console.log(imageUpload)
        await upload(data)
    }
    // const handleIdUpload = (event) => {
    //     const file = event.target.files[0]; // Get the file
    //     const fileName = file.name;
    //
    //     const reader = new FileReader();
    //     reader.onloadend = function () {
    //         setImageUpload({ utilityBillName: fileName });
    //         setData({ ...data, file: reader.result }); // Use reader.result to get the base64 data
    //     };
    //     reader.readAsDataURL(file); // Pass the file to readAsDataURL
    // };

    const handleIdUpload = (event) => {
        const fileName = event.target.files[0].name;
        setData({...data, file: event.target.files[0]})
        setImageUpload({ utilityBillName: fileName });
    };
    return (
        <Transition appear show={props.isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={props.onHide}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full transform overflow-hidden max-w-[35%] rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                <div className='flex'>
                                    <form className='w-full p-7 pt-3.5' onSubmit={handleUpload}>
                                        <div className='flex justify-between'>
                                            <h3 className='font-semibold text-xl'>
                                                Upload Excel
                                            </h3>
                                            <CancelIcon onClick={props.onHide} className='cursor-pointer'/>
                                        </div>
                                        <div className='pt-6 pb-4'>
                                            <label className='font-semibold text-sm'>
                                                Company Name
                                            </label>
                                            <input type='text' placeholder='Paddycover' onChange={(e) => setData({...data, company: e.target.value})}
                                                   className='rounded w-full focus-visible:outline-none border border-gray-300 p-2'/>
                                        </div>
                                        <div className="block w-full">
                                            <label htmlFor="utility"
                                                   className="block font-bold text-black py-2 text-sm">
                                                Upload Excel Document
                                            </label>
                                            <div className="rounded border border-custom flex">
                                                <input
                                                    hidden
                                                    type="file"
                                                    id="utility"
                                                    className="bg-green-500 py-3 border-0 text-white"
                                                    ref={utilityInputRef} // Ref usage in React
                                                    onChange={handleIdUpload} // Use handle function
                                                />
                                                <label
                                                    htmlFor="utility"
                                                    className="bg-green-500 py-3 px-3 border-0 text-white rounded-l text-sm w-5/12 cursor-pointer"
                                                >
                                                    Choose Plan
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder=""
                                                    className="bg-custom w-7/12 text-xs px-2"
                                                    value={imageUpload.utilityBillName} // Use value instead of v-model
                                                    readOnly // Use readOnly instead of readonly
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className='text-sm md:text-md w-full rounded pt-3 mt-3.5 bg-green-500 text-white font-semibold rounded-custom py-2'>
                                            Upload excel
                                           {/*<Loader />*/}
                                        </button>

                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Upload;