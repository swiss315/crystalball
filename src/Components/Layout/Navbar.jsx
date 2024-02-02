import React, {useState} from 'react';
// import {User} from "iconsax-react";
import Upload from "../Upload";

function Navbar(props) {
    let [showUpload, setShowUpload] = useState(false);
    return(
        <div className='flex justify-between bg-white items-center px-10 p-3' style={{boxShadow: '0px 2px 4px 0px #0F223A1F'}}>
            <h1 className='font-bold'>
                Dashboard
            </h1>
            {/*<div className='flex bg-custom-light-grey p-1.5 md:p-3 gap-2 items-center'>*/}
            {/*    <div className='bg-white w-4 h-4 md:w-8 md:h-8 flex justify-center items-center rounded-full'>*/}
            {/*        <User variant="Bold" color='#F3F3F9' className='self-center'/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <h5 className='font-semibold text-xs md:text-xs'>*/}
            {/*           PaddyCover*/}
            {/*        </h5>*/}
            {/*        <p className='text-xs md:text-xs text-custom'></p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                <button type='button' onClick={() => setShowUpload(true)} className='btn btn-primary rounded-lg text-white font-semibold bg-green-500 py-2 px-3'>Upload excel</button>
            </div>
            <Upload isOpen={showUpload} onHide={() => setShowUpload(false)} />
        </div>
    )
}

export default Navbar