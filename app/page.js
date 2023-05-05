import Image from 'next/image'
import IconTabs from 'components/iconTabs'
import Tabs from 'components/tabs'
import { TruckIcon, ArrowDownTrayIcon, UsersIcon, WrenchIcon, PlayIcon, StopIcon } from '@heroicons/react/20/solid'

const noiseSource = [
  { name: 'Loud Neighbors', href: '#', icon: UsersIcon, current: true },
  { name: 'Noisy Traffic', href: '#', icon: TruckIcon, current: false },
  { name: 'Mechanical Noise', href: '#', icon: WrenchIcon, current: false },
  { name: 'Annoying Footfalls', href: '#', icon: ArrowDownTrayIcon, current: false },
]
const playControls = [
  { name: 'Play', href: '#', icon: PlayIcon, current: false },
  { name: 'Stop', href: '#', icon: StopIcon, current: true },
]

const noiseReduction = [
  { name: 'No Reduction', href: '#', current: true },
  { name: 'Moderate Reduction', href: '#',  current: false },
  { name: 'Good Reduction', href: '#',  current: false },
  { name: 'Great Reduction', href: '#',  current: false },
]




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Lee Brenners Noise Abatement Simulator
        </p>
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
      </div>

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
      <div className="mb-32   lg:mb-0  lg:text-left font-mono">
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
        <IconTabs tabs={noiseSource} />
        <div className={`m-4`}>
        </div>
        
        <p className={`mb-3 text-xl opacity-50`}>
          4) Hit play.
        </p>
        <IconTabs tabs={playControls} />
        <div className={`m-4`}>
        </div>


        <p className={`mb-3 text-xl opacity-50`}>
          5) Adjust the volume on your device until you feel the sound recording approximates the same level as the noise source that has been disturbing you.
        </p>

        <p className={`mb-3 text-xl opacity-50`}>
          6) Select a level of noise reduction and determine which one works to meet your needs:
        </p>
        <Tabs tabs={noiseReduction} />
        <div className={`m-4`}>
        </div>

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
