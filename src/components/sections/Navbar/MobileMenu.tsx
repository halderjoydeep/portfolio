"use client";

import { menu } from "@/assets";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, Fragment, SetStateAction, useState } from "react";

interface MobileMenuProps {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export default function MobileMenu({ active, setActive }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative h-7 w-7 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Image
          src={menu}
          fill
          priority
          alt="Menu Icon for navbar links"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-tertiary py-6 shadow-xl">
                      <div className="flex items-center justify-between px-6 sm:px-6">
                        <Dialog.Title className="text-base font-semibold leading-6 text-white">
                          Joydeep Halder
                        </Dialog.Title>
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      <div className="relative mt-12 flex-1 px-6 sm:px-6">
                        <ul className="flex list-none flex-col gap-10">
                          {navLinks.map((link) => (
                            <li
                              key={link.id}
                              className={cn(
                                "text-[18px] font-medium hover:text-[#915EFF]",
                                {
                                  "text-[#915EFF]": active === link.title,
                                  "text-secondary": active !== link.title,
                                },
                              )}
                              onClick={() => {
                                setActive(link.title);
                                setOpen(false);
                              }}
                            >
                              <Link href={`#${link.id}`}>{link.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
