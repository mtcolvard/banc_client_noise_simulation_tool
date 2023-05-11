'use Client'
import { useState } from "react"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DbReductionTabs({ sendDbReductionTab } ) {

  const [noiseReduction, setNoiseReduction] = useState([
    { name: 'No Reduction', dbReduction: 0, current: true },
    { name: 'Moderate Reduction', dbReduction: 6, current: false },
    { name: 'Good Reduction', dbReduction: 12, current: false },
    { name: 'Great Reduction', dbReduction: 18, current: false },
  ])

  function handleClick( tabName ) {
    setNoiseReduction(noiseReduction.map(item => {
      if (item.name == tabName) {
        sendDbReductionTab(item.dbReduction)
        return {...item, current: true}
      }
      else {
        return {...item, current: false}
      }
    }))
  }

  return (
    <div>
      <div >
        <div className="border-b border-gray-200 ">
          <div className="-mb-px  flex flex-col  " >
            {noiseReduction.map((tab) => (
              <button
                key={tab.name}
                onClick={e => handleClick(tab.name)}
                className={classNames(
                  tab.current
                    ? 'border-yellow-400 text-yellow-600'
                    : 'text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'group inline-flex items-center border-b-2   py-4 px-1 text-sm font-medium'
                )}
             >
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
