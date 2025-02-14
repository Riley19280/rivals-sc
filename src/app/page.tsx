'use client';
import {
  ArrowRightIcon,
  UsersIcon,
} from '@heroicons/react/16/solid'
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()

  const [username, setUsername] = useState('')

  const onClick = function() {
    router.push(`/players/${btoa(username)}`)
  }

  return (
    <div className="bg-white">
      <div className="absolute inset-0">
        <Image
          alt="rivals splash image"
          src="/splash.jpg"
          width={1920}
          height={1080}
          className="size-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-lg" style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 100%)', }}>

          <div className="relative px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="block sm:inline">Ban their favorite hero</span>
              </h2>
              <p className="mt-3 text-xl ">
                Make sure the best people dont have fun
              </p>

              <div>

                <div className="mt-2 flex">
                  <div className="-mr-px grid grow grid-cols-1 focus-within:relative">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Username"
                      className="col-start-1 row-start-1 block w-full rounded-l-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:pl-9 sm:text-sm/6"
                      onChange={(evt) => setUsername(evt.target.value)}
                    />
                    <UsersIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    />
                  </div>
                  <button
                    type="button"
                    className="flex shrink-0 items-center gap-x-1.5 rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 hover:bg-gray-50 focus:relative focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 cursor-pointer"
                    onClick={onClick}
                  >
                    Find
                    <ArrowRightIcon aria-hidden="true" className="-ml-0.5 size-4 text-gray-400"/>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
