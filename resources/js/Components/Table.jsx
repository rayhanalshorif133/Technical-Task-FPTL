import React from 'react'

export default function Table({ths, data}) {


    return (
        <table className="table-auto">
            <thead>
                <tr>
                    {ths.map((th, index) => (
                        <th key={index} className="uppercase px-4 py-2 text-left font-semibold text-base border-[1px] border-gray-300">
                            {th.name}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
            {
                data.length > 0 && data.map((item, index) => (
                    <tr key={index}>
                        <td className="px-4 py-2 border-[1px] border-gray-300">{index + 1}</td>
                        <td className="px-4 py-2 border-[1px] border-gray-300">{item.title}</td>
                        <td className="px-4 py-2 border-[1px] border-gray-300">
                            <span className={`px-2 inline-flex text-sm leading-5 font-bold rounded-full text-white
                            ${item.status === 'open' ? 'bg-red-800 ' : 
                            item.status === 'in-process' ? 'bg-yellow-800' : 'bg-green-800'
                            }`}>
                                {item.status}
                            </span>
                        </td>
                        <td className="px-4 py-2 border-[1px] border-gray-300">{item.description}</td>
                        <td className="px-4 py-2 border-[1px] border-gray-300">{item.deadline}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
  )
}
