import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


function NewProposalModal(props) {
  
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={props.setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Create a new proposal
                    </Dialog.Title>
                    <div className="mt-2">
                      {/* Creating form for new proposal details */}
                      {/* Form and label for new proposal title */}
                      <div className="mt-4">
                        <label htmlFor="title" className="block text-sm font-medium leading-5 text-gray-700">
                          Title
                        </label>
                        <input
                          id="title"
                          type="text"
                          className="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus-within:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out"
                          placeholder="Title"
                          onChange={props.setTitle}
                        />
                      {/* DISPLAY ID OF NEW PROPOSAL */}
                      <p className='text-lg'> Id: ${props.prev_id}</p>
                      {/* Include radio weighted, unweighted */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  className="rounded-md px-4 py-2 bg-green1 outline font-bold text-white hover:bg-transparent hover:outline-4 hover:outline-green1  sm:w-auto sm:text-sm"
                  onClick={() => props.setOpen(false)}
                >
                  Approve
                </button>
                <button
                  className="justify-center hover:bg-pink rounded-md border border-gray-300 "
                  onClick={() => props.setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Deny
                </button>
              </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default NewProposalModal;