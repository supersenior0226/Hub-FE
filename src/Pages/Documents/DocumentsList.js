import { ChevronDownIcon } from '@heroicons/react/solid'

import { Fragment } from 'react'

const locations = [
  {
    name: 'FILTEC',
    people: [
      { name: 'Document 1', title: 'This and that', machine: 'lindsay.walton@example.com', category: 'Manual' },
      { name: 'Document 2', title: 'And the other', machine: 'courtney.henry@example.com', category: 'Parts Chart' },
    ],
  },
  {
    name: 'Douglas',
    people: [
      { name: 'Document 1', title: 'This and that', machine: 'lindsay.walton@example.com', category: 'Manual' },
      { name: 'Document 2', title: 'And the other', machine: 'courtney.henry@example.com', category: 'Parts Chart' },
    ],
  },

  {
    name: 'Shibuya Hoppmann',
    people: [
      { name: 'Document 1', title: 'This and that', machine: 'lindsay.walton@example.com', category: 'Manual' },
      { name: 'Document 2', title: 'And the other', machine: 'courtney.henry@example.com', category: 'Parts Chart' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function DocumentsList() {
  return (
    <>
      <div className="min-h-full pb-24 pl-24 pr-24">
        <div className="lg:pl-64 flex flex-col flex-1">
          <div className="bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  Documents
                </h2>
                <p className="mt-5 text-xl text-gray-500">
                  A list of all the documents uploaded.
                </p>
              </div>
              <div className="mt-10 w-full max-w-xs">
                <label htmlFor="type" className="block text-base font-medium text-gray-500">
                  Sort by
                </label>
                <div className="mt-1.5 relative">
                  <select
                    id="type"
                    name="type"
                    className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-[#679CE8] focus:border-[#679CE8] sm:text-sm"
                    defaultValue="Serial Number"
                  >
                    <option>Machine (Serial #)</option>
                    <option>Company</option>
                    <option>Time frame</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
                    <ChevronDownIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="text-xl font-semibold text-gray-900"></h1>
                <p className="mt-2 text-sm text-gray-700"></p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#679CE8] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#4586e1] focus:outline-none focus:ring-2 focus:ring-[#679CE8] focus:ring-offset-2 sm:w-auto"
                >
                  Add document
                </button>
              </div>
            </div>
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full">
                      <thead className="bg-white">
                        <tr>
                          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            Name
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Title
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Machine
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Category
                          </th>
                          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {locations.map((location) => (
                          <Fragment key={location.name}>
                            <tr className="border-t border-gray-200">
                              <th
                                colSpan={5}
                                scope="colgroup"
                                className="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6"
                              >
                                {location.name}
                              </th>
                            </tr>
                            {location.people.map((person, personIdx) => (
                              <tr
                                key={person.machine}
                                className={classNames(personIdx === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t')}
                              >
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                  {person.name}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.machine}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.category}</td>
                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                  <a href="#" className="text-[#679CE8] hover:text-[#4586e1]">
                                    Edit<span className="sr-only">, {person.name}</span>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default DocumentsList