/* eslint-disable @next/next/no-img-element */
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Phone from '@/components/Phone'
import { Check, Star } from 'lucide-react'

export default function Home() {
  return (
    <main className='min-h-full bg-slate-50'>
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:pt-24 lg:pb-52 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="flex flex-col items-center text-center relative mx-auto lg:text-left lg:items-start">
              <div className="hidden absolute w-28 left-0 -top-20 lg:block">
                <img src="/snake-1.png" alt="logo" className="h-full" />
              </div>

              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                Your Image on a <span className="bg-green-600 px-2 text-white">Custom</span> Phone case
              </h1>

              <p className="mt-8 text-lg max-w-prose text-center text-balance md:text-wrap lg:pr-10 lg:text-left">
                Capture your favorite memories with your own, {' '} <span className='font-semibold'>one-of-one</span> phone case.
                CaseFusion allows you to express your inner vibes in a stylish way to the world.
              </p>

              <ul className="mt-8 flex flex-col space-y-3 items-center font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="flex items-center gap-x-1.5 text-left">
                    <Check className='size-5 shrink-0 text-green-500' />
                    High-quality, durable material
                  </li>
                  <li className="flex items-center gap-x-1.5 text-left">
                    <Check className='size-5 shrink-0 text-green-500' />
                    5 year print guarantee
                  </li>
                  <li className="flex items-center gap-x-1.5 text-left">
                    <Check className='size-5 shrink-0 text-green-500' />
                    Modern iPhone models supported
                  </li>
                </div>
              </ul>

              <div className="mt-12 flex flex-col gap-5 items-center sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <img
                    src="/users/user-1.png"
                    alt="user image"
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                  />
                  <img
                    src="/users/user-2.png"
                    alt="user image"
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                  />
                  <img
                    src="/users/user-3.png"
                    alt="user image"
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                  />
                  <img
                    src="/users/user-4.jpg"
                    alt="user image"
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100'
                  />
                  <img
                    src="/users/user-5.jpg"
                    alt="user image"
                    className='inline-block object-cover h-10 w-10 rounded-full ring-2 ring-slate-100'
                  />
                </div>

                <div className="flex flex-col space-y-1 justify-between items-center sm:items-start sm:space-y-0">
                  <div className="flex items-center gap-0.5">
                    <Star className='size-4 text-green-600 fill-green-600' />
                    <Star className='size-4 text-green-600 fill-green-600' />
                    <Star className='size-4 text-green-600 fill-green-600' />
                    <Star className='size-4 text-green-600 fill-green-600' />
                    <Star className='size-4 text-green-600 fill-green-600' />
                    <Star className='size-4 text-green-600 fill-green-600' />
                  </div>

                  <p>
                    <span className="font-semibold">1.250</span> happy customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-full w-full flex justify-center mt-32 px-8 h-fit sm:px-16 md:px-0 lg:col-span-1 lg:px-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <img
                src="/your-image.png"
                alt="Your image"
                className='absolute w-40 italic lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden'
              />

              <img
                src="/line.png"
                alt="Line Image"
                className="absolute w-20 -left-6 -bottom-6 select-none italic"
              />

              <Phone
                imgSrc='/testimonials/1.jpg'
                className='w-64'
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  )
}
