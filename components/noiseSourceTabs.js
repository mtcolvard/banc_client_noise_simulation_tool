import { useState } from 'react'
import { TruckIcon, ArrowDownTrayIcon, UsersIcon, WrenchIcon} from '@heroicons/react/20/solid'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NoiseSourceTabs({ sendNoiseSource }) {

  const [noiseSource, setNoiseSource] = useState([
    { name: 'Loud Neighbors', value: 'loudNeighbors', icon: UsersIcon, current: true },
    { name: 'Noisy Traffic', value: 'noisyTraffic', icon: TruckIcon, current: false },
    { name: 'Mechanical Noise', value: 'mechanicalNoise', icon: WrenchIcon, current: false },
    { name: 'Annoying Footfalls', value: 'annoyingFootfalls', icon: ArrowDownTrayIcon, current: false },
  ])


  function handleClick(tabName) {
    setNoiseSource(noiseSource.map(item => {
      if (item.name == tabName) {
        sendNoiseSource(item.value)
        return { ...item, current: true }
      }
      else {
        return { ...item, current: false }
      }
    }))
  }

  return (
    <div>
      <div className="">
      {/* <div className="hidden sm:block"> */}
        <div className="border-b border-gray-200">
          <div className="-mb-px  md:space-x-8 flex flex-col md:inline divide-y md:divide-y-0 divide-white md:-gray-200" aria-label="Tabs">
            {noiseSource.map((tab) => (
              <button
                key={tab.name}
                onClick={e => handleClick(tab.name)}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  ' group inline-flex  items-center  border-y-2 md:border-y-0 md:border-b-2 py-4 px-1 text-sm font-medium'
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
