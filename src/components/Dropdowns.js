/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useRef, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { sort, colors } from '../data'
import {useEcommerceContext} from '../context/product_context'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdowns({section, sectionColor}) {
  const [selected, setSelected] = useState(sort[0])
  const selectRef = useRef(null)
  const { products } = useEcommerceContext()
  
  const filterSectionColor = () => {
    products.filter(product => product.gender === `${section}`).map(product => {
      const {color} = product;
      sectionColor.push(color)

      return sectionColor
    })
  }


  let uniqueColors = []

  const getUnique = async() => {
    try {
      return uniqueColors =  [...new Set(sectionColor)]
    } catch (error) {
        console.log(error)
    }
  }
  getUnique()

  console.log(uniqueColors);
  useEffect(() => {
    filterSectionColor()
  }, [filterSectionColor()])
  const [changeColor, setChangeColor] = useState(uniqueColors[0])




  return (
    <div className='flex items-center justify-center py-7'>
      <div className='mr-4'>
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <div className='flex justify-center items-center'>
              <Listbox.Label className="sm:block hidden text-sm font-medium text-gray-700 pr-3">Sort</Listbox.Label>
              <div className="mt-1 relative md:w-[200px] w-[170px]">
                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate" ref={selectRef}>{selected.name}</span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-[200px] bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {sort.map((sort) => (
                      <Listbox.Option
                        key={sort.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-3 pr-9'
                          )
                        }
                        value={sort}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                              >
                                {sort.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </div>
          )}
        </Listbox>
      </div>
      <div>
        <Listbox value={changeColor} onChange={setChangeColor}>
          {({ open }) => (
            <div className='flex justify-center items-center'>
              <Listbox.Label className="sm:block hidden text-sm font-medium text-gray-700 pr-3">Colors</Listbox.Label>
              <div className='mt-1 relative md:w-[200px] w-[170px]'>
                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate capitalize">{changeColor}</span>
                  </span>
                  <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-[200px] bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {uniqueColors.map((item, index) => (
                      <Listbox.Option
                        key={index}
                        className={({ active }) => 
                          classNames(
                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-3 pr-9'
                          )
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className='flex items-center'>
                              <span
                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate capitalize')}
                              >
                                {item}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ): null }
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>

              </div>
            </div>
          )}
        </Listbox>
      </div>
    </div>
  )
}
