import { useState } from 'react'
import {TruckIcon, ArrowDownTrayIcon, UsersIcon, WrenchIcon, MusicalNoteIcon, TvIcon, TrashIcon, SignalIcon} from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NoiseSourceTabs({ sendNoiseSource }) {

  const [noiseSource, setNoiseSource] = useState([
    { name: 'Neighbors Arguing', value: 'neighborsArguing', icon: UsersIcon, current: true },
    { name: 'Noisy Traffic', value: 'noisyTraffic', icon: TruckIcon, current: false },
    { name: 'Loud Television', value: 'loudTelevision', icon: TvIcon, current: false },
    { name: 'Mid Frequency Music', value: 'midFrequencyMusic', icon: MusicalNoteIcon, current: false },
    { name: 'Upstairs Stomping', value: 'upstairsStomping', icon: ArrowDownTrayIcon, current: false },
    { name: 'Garbage Collection', value: 'garbageCollection', icon: TrashIcon , current: false },
    { name: 'Mechanical Noise', value: 'mechanicalNoise', icon: WrenchIcon, current: false },
    { name: 'Low Freqency Music', value: 'lowFrequencyMusic', icon: SignalIcon, current: false },
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
      <div>
      {/* <div className="hidden sm:block"> */}
        <div className="border-b border-gray-200">
          <container className="-mb-px   flex flex-col md:grid md:grid-cols-4 md:grid-rows-2" aria-label="Tabs">
            {noiseSource.map((tab) => (
              <button
                key={tab.name}
                onClick={e => handleClick(tab.name)}
                className={classNames(
                  tab.current
                    ? 'border-amber-500 text-amber-600'
                    : ' text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  ' group inline-flex  items-center  border-b-2  py-4 px-1 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                <tab.icon
                  className={classNames(
                    tab.current ? 'text-amber-500' : 'text-gray-400 group-hover:text-gray-500',
                    '-ml-0.5 mr-2 h-5 w-5'
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </button>
            ))}
          </container>
        </div>
      </div>
    </div>
  )
}
