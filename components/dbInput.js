

export default function DbInput({ decibleReduction, handleDecibleReduction }) {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">-</span>
        </div>
        <input
          className="control-dbl block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          name="dbl"
          id="dbl"
          type="number"
          max="0"
          value={decibleReduction}
          onChange={handleDecibleReduction} 
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="decible">
            dB
          </span>
        </div>
      </div>
    </div>
  )
}


// export default function TextArea() {
//   return (
//     <div className="inline-block">
//       {/* <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900">
//         Add your comment
//       </label> */}
//         <textarea
//           rows={3}
//           name="comment"
//           id="comment"
//           // h-36 =9rem text-5xl =3rem 
//           className="inline-block h-36 text-5xl text-center align-middle rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
//           // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           defaultValue={0}
//         />
//     </div>
//   )
// }