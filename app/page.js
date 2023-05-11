'use client';
import { useState } from 'react'
import Image from 'next/image'
import useSound from 'use-sound'
import NoiseSourceTabs from 'components/noiseSourceTabs'
import PlayControlTabs from 'components/playControlTabs'
import DbReductionTabs from 'components/dbReductionTabs'
import DbInput from 'components/dbInput'
import { PlayIcon, StopIcon } from '@heroicons/react/20/solid'



export default function Home() { 
  const [selectedSound, setSelectedSound] = useState('neighborsArguing')
  const [decibleReduction, setDecibleReduction] = useState(0)
  const percentGain = ((Math.pow(10, (-1 * decibleReduction / 20))).toFixed(2))
  const [playControls, setPlayControls] = useState([
    { name: 'Play', icon: PlayIcon, current: false },
    { name: 'Stop', icon: StopIcon, current: true },
  ])
  const [play, { stop, sound }] = useSound('/leeToolSprite2.mp3', {
    loop: true,
    volume: percentGain,
    sprite: {
      neighborsArguing: [0, 10000],
      noisyTraffic: [10000, 10000],
      loudTelevision: [20000, 12000],
      midFrequencyMusic: [32000, 10000],
      upstairsStomping: [42000, 10000],
      garbageCollection: [52000, 10000],
      mechanicalNoise: [62000, 10000],
      lowFrequencyMusic: [72000, 10000],
    }
  })

  const handleNoiseSourceChange = (newNoiseSource) => {
    stop()
    setSelectedSound(newNoiseSource)
    setPlayControls([
      { name: 'Play', icon: PlayIcon, current: true },
      { name: 'Stop', icon: StopIcon, current: false },
    ])
    play({ id: newNoiseSource })
  }

  const handlePlayControlClick = (controlName) => {
    if (controlName == 'Play') {
      stop()
      play({ id: selectedSound })
    }
    else {
      stop()
    }
    setPlayControls(playControls.map(item => {
      if (item.name == controlName) {
        return { ...item, current: true }
      }
      else {
        return { ...item, current: false }
      }
    }))
  }

  const handleDecibleReductionInput = (e) => {
    const targetValue = (e.target.value) ?? 0
    setDecibleReduction(targetValue)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-3 pb-28 md:px-24 md:pb-24 xl:px-56">
      <div className="z-10 md:-pt-24 w-full  items-center justify-between font-mono md:text-3xl lg:flex">
        <p className=" left-0 top-0 flex w-full text-center justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
            Lee Brenner&rsquo;s Noise Abatement Simulator
        </p>
      </div>
      <div className="mt-4 md:mt-12 mb-32 grid  lg:mb-0  lg:text-left font-mono">
        <p className={`mb-6 text-xl opacity-50`}>
          Different levels of noise reduction in a soundproofing remodeling project, involve radically different solutions and costs. 
        </p>
        <p className={`mb-6 text-xl opacity-50`}>
          How can you know you will be getting your money&rsquo;s worth to achieve the noise reduction you need?
        </p>
        <p className={`mb-8 text-xl opacity-50`}>
          With a pair of headphones and this algorithm, we can assist you in estimating the amount of intervention you require.
        </p>
        <p className={`mb-4 text-2xl font-semibold`}>
          Instructions
        </p>
        <p className={`mb-4 text-xl opacity-50`}>
          1) Go to the location where you feel most oppressed by the noise and make a mental note of its loudness.
        </p>
        <p className={`mb-4 text-xl opacity-50`}>
          2) In a more relaxing location on your property, plug a pair of headphones into your computer or phone.
        </p>
        <p className={`mb-1 text-xl opacity-50`}>
          3) Select a noise source:
        </p>

        <NoiseSourceTabs
          sendNoiseSource={(newNoiseSource) => handleNoiseSourceChange(newNoiseSource)}
        />
        <div className={`m-4`}></div>
        <p className={`mb-1 text-xl opacity-50`}>
          4) Hit play.
        </p>

        <PlayControlTabs
          playControls={playControls}
          sendPlayControlClick={(controlName) => handlePlayControlClick(controlName) }
        />
        <div className={`m-4`}></div>
        <p className={`mb-4 text-xl opacity-50`}>
          5) Using the volume controls on your device, adjust the volume until you feel the sound recording approximates the same level as the noise source that has been disturbing you.
        </p>
        <p className={`mb-1 text-xl opacity-50`}>
          6) Select a level of noise reduction and determine which one works to meet your needs:
        </p>

        <DbReductionTabs
          sendDbReductionTab={(dbReduction) => setDecibleReduction(dbReduction)}
        />
        <div className={`m-4`}></div>

        <DbInput
          sendDbReductionInput={(typedDbReduction) =>handleDecibleReductionInput(typedDbReduction)}
          decibleReduction={decibleReduction}
        />
        <div className={`m-12`}></div>
        <p className={`mb-4 text-2xl opacity-80 `}>
          Once you have determined the level of noise reduction you need, we can absolutely help price out an architecural acoustics plan to get you there.
        </p>
      </div>
    </main>
  )
}



