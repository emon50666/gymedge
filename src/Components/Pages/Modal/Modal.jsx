import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button
        onClick={openModal}
        className="rounded-md bg-orange-500 py-2 px-4 text-sm font-medium text-white focus:outline-none hover:bg-black/30 focus:outline-1 focus:outline-white"
      >
        Update Role
      </Button>

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-black p-6 backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base font-medium text-white">
                    User Role Base Modal
                  </DialogTitle>
                  <select className="select mt-2 select-warning bg-black text-gray-100 w-full max-w-xs">
                    <option>Admin</option>
                    <option>Trainer</option>
                    <option>Member</option>
                  </select>

                  <div className="mt-4 flex justify-around">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600 focus:outline-1 focus:outline-white"
                      onClick={closeModal}
                    >
                      Updated
                    </Button>
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600 focus:outline-1 focus:outline-white"
                      onClick={closeModal}
                    >
                      Cancel
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
