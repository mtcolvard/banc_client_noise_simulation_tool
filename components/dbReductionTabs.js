'use Client'
import { useState } from "react"


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DbReductionTabs({ sendDbReductionTab, isDisabled } ) {

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
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <div className="-mb-px flex space-x-8" >
            {noiseReduction.map((tab) => (
              <button
                key={tab.name}
                disabled={isDisabled}
                onClick={e => handleClick(tab.name)}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                )}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
