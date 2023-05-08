import { useState } from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PlayControlTabs({ playControls, sendPlayControlClick }) {

  return (
    <div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <div className="-mb-px flex space-x-8" aria-label="Tabs">
            {playControls.map((tab) => (
              <button
                key={tab.name}
                onClick={e => sendPlayControlClick(tab.name)}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                <tab.icon
                  className={classNames(
                    tab.current ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                    '-ml-0.5 mr-2 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
