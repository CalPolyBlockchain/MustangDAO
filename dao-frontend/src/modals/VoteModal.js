/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import {useState} from 'react';

const verify_vote_option = (vote_option) => {
    if (vote_option === "Yes" || vote_option === "No") {
        return true;
    } else {
        return false;
    }
}



function VoteModal(props) {

  const [vote_option, setVoteOption] = useState(null);
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={props.setOpen}>
        <div className="flex items-end justify-center text-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative text-white inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-green1 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex flex-col">
                    <div className='flex flex-row'>
                      <p>Vote on # </p>
                      <p>{toString(props.proposal.id)}</p>
                      </div>
                    <p className='text-3xl text-yellow1'>{props.proposal.name}</p>
                    {props.proposal ?? "No proposal??"}
                    {props.proposal.weighted ? "Weighted" : "Unweighted"}
                </div>
              </div>
<div className='flex flex-row'>
                <button
                  type="button"
                  className="rounded-md px-4 py-2 bg-green1 font-bold outline  hover:text-green1  hover:bg-transparent hover:bg-opacity-0 hover:outline-4 hover:outline-green1 sm:text-sm"
                  onClick={() => props.setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center bg-secondary rounded-md px-4 py-2 text-base font-medium  sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => props.setOpen(false)}
                >
                  Deny
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default VoteModal;