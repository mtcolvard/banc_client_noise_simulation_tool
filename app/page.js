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
  
  const soundOptions = [
    { value: 'loudNeighbors', label: 'Noisy Restaurant' },
    { value: 'noisyTraffic', label: 'Dragon Dancing Parade' },
    { value: 'mechanicalNoise', label: 'Ambient Freeway' },
    { value: 'annoyingFootfalls', label: 'Honking Traffic' },
    { value: 'loudBar', label: 'Loud Bar' },
    { value: 'peopleShouting', label: 'Large Crowd, Shouting' },
    { value: 'poundingCeiling', label: 'Pounding on Ceiling' },
    { value: 'clarinet', label: 'Classical Musician Neighbor' },
  ]
 
  const [decibleReduction, setDecibleReduction] = useState(0)
  const [selectedSound, setSelectedSound] = useState('loudNeighbors')
  const [isPlay, setIsPlay] = useState(false)
  // const [isDisabled, setIsDisabled] = useState(true)
  const percentGain = ((Math.pow(10, (-1 * decibleReduction / 20))).toFixed(2))
  const [playControls, setPlayControls] = useState([
    { name: 'Play', icon: PlayIcon, current: false },
    { name: 'Stop', icon: StopIcon, current: true },
  ])
  const [play, { stop, sound }] = useSound('/noiseSprite4.mp3', {
    loop: true,
    volume: percentGain,
    autoSuspend: false,
    preload: true,
    sprite: {
      loudNeighbors: [0, 30000],
      noisyTraffic: [30000, 60000],
      mechanicalNoise: [60000, 90000],
      annoyingFootfalls: [90000, 120000],
      loudBar: [120000, 130000],
      peopleShouting: [130000, 140000],
      poundingCeiling: [140000, 150000],
      clarinet: [150000, 1610000]
    }
  })

  const handleDecibleReductionInput = (e) => {
    const targetValue = (e.target.value) ?? 0
    setDecibleReduction(targetValue)
  }

 

  const handleStop = () => {
    stop()
  }

  const handlePlay = () => {
    stop()
    // setIsDisabled(false)
    play({ id: selectedSound })
  }

  const handlePlayControlClick = (tabName) => {
    if (tabName == 'Play') {
      handlePlay()
    }
    else {
      handleStop()
    }
    setPlayControls(playControls.map(item => {
      if (item.name == tabName) {
        return { ...item, current: true }
      }
      else {
        return { ...item, current: false }
      }
    }))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-28 md:p-24 xl:px-56">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-3xl lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
          Lee Brenners Noise Abatement Simulator
        </p>
      </div>
      <div className="md:mt-12 mb-32 grid  lg:mb-0  lg:text-left font-mono">
        <p className={`mb-6 text-xl opacity-50`}>
          Different levels of noise reduction in a soundproofing remodeling project, involve radically different solutions and costs. 
        </p>
        <p className={`mb-6 text-xl opacity-50`}>
          How can you know you will be getting your moneys worth to achieve the noise reduction you need?
        </p>
        <p className={`mb-8 text-xl opacity-50`}>
          With a pair of headphones and this algorithm, we can assist you in estimating the amount of intervention you require.
        </p>
        <p className={`mb-3 text-2xl font-semibold`}>
          Instructions
        </p>
        <p className={`mb-3 text-xl opacity-50`}>
          1) Go to the location where you feel most oppressed by the noise and make a mental note of its loudness.
        </p>
        <p className={`mb-3 text-xl opacity-50`}>
          2) In a more relaxing location on your property, plug a pair of headphones into your computer or phone.
        </p>
        <p className={`mb-3 text-xl opacity-50`}>
          3) Select a noise source:
        </p>

        <NoiseSourceTabs
          sendNoiseSource={(noiseSource) => setSelectedSound(noiseSource)}
        />
        <div className={`m-4`}></div>
        <p className={`mb-3 text-xl opacity-50`}>
          4) Hit play.
        </p>

        <PlayControlTabs
          playControls={playControls}
          sendPlayControlClick={(playControl) => handlePlayControlClick(playControl) }
        />
        <div className={`m-4`}></div>
        <p className={`mb-3 text-xl opacity-50`}>
          5) Using the volume controls on your device, adjust the volume until you feel the sound recording approximates the same level as the noise source that has been disturbing you.
        </p>
        <p className={`mb-3 text-xl opacity-50`}>
          6) Select a level of noise reduction and determine which one works to meet your needs:
        </p>

        <DbReductionTabs
          // isDisabled={isDisabled}
          sendDbReductionTab={(dbReduction) => setDecibleReduction(dbReduction)}
        />
        <div className={`m-4`}></div>

        <DbInput
          sendDbReductionInput={handleDecibleReductionInput}
          decibleReduction={decibleReduction}
          // isDisabled={isDisabled}
        />
        <div className={`m-4`}></div>
        <p className={`mb-3 text-xl opacity-50`}>
          Once you have determined the level of noise reduction you need, it is possible to price out the architecural acoustics plan to get you there.
        </p>


        {/* <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
  )
}



{/* <main className="flex min-h-screen flex-col items-center justify-between px-6 py-28 md:p-24 xl:px-56">
  <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
      Lee Brenners Noise Abatement Simulator
    </p> */}
    {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div> */}
  // </div>

  {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>  
 */}
  // <div className="md:mt-12 mb-32 grid  lg:mb-0  lg:text-left font-mono">
  //   <p className={`mb-6 text-xl opacity-50`}>
  //     Different levels of noise reduction in a soundproofing remodeling project, involve radically different solutions and costs.
  //   </p>
