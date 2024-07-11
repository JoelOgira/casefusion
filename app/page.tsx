/* eslint-disable @next/next/no-img-element */
import { Icons } from '@/components/Icons'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Phone from '@/components/Phone'
import { Reviews } from '@/components/Reviews'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight, Check, Star } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-h-full bg-slate-50'>
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 sm:pb-32 lg:pt-24 lg:pb-52 lg:grid lg:grid-cols-3 lg:gap-x-0 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="flex flex-col items-center text-center relative mx-auto lg:text-left lg:items-start">
              <div className="hidden absolute w-28 left-0 -top-20 lg:block">
                <img src="/snake-1.png" alt="logo" className="h-full italic" />
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

      {/* Value Proposition Section */}
      <section className='bg-slate-100 py-24'>
        <MaxWidthWrapper
          className='flex flex-col items-center gap-16 sm:gap-32'
        >
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl text-gray-900 md:text-6xl">
              What Our{' '}
              <span className="relative px-2">
                Customers <Icons.underline className='hidden pointer-events-none absolute inset-x-0 text-green-500 -bottom-6 sm:block' />
              </span>{' '}
              Say
            </h2>

            <img
              src="/snake-2.png"
              className='w-24 order-0 italic lg:order-2'
              alt="snake-2 image"
            />

          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex mb-2 gap-0.5">
                <Star className='size-5 text-green-600 fill-green-600' />
                <Star className='size-5 text-green-600 fill-green-600' />
                <Star className='size-5 text-green-600 fill-green-600' />
                <Star className='size-5 text-green-600 fill-green-600' />
                <Star className='size-5 text-green-600 fill-green-600' />
                <Star className='size-5 text-green-600 fill-green-600' />
              </div>

              <div className="text-lg leading-8">
                <p>
                  &quot;The case feels durable and I even got a compliment on the design. Had the case for two and a half months and <span className='p-0.5 bg-slate-800 text-white' >the image is super clear</span>, on the case I had before, the image started fading into yellow-ish color after a couple of weeks. Love it.&quot;
                </p>
              </div>

              <div className="flex gap-4 mt-2">
                <img
                  src="/users/user-1.png"
                  alt="User 1"
                  className='rounded-full size-12 object-cover italic'
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Anton Wajockastri</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className='size-4 stroke-[3px] text-green-600' />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>

            </div>


            {/* Second Review */}
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="flex mb-2 gap-0.5">
                <Star className='size-5 text-green-600 fill-green-600' />
                <Star className='size-5 text-green-600 fill-green-600' />
                <Star className='size-5 text-green-600 fill-green-600' />
                <Star className='size-5 text-green-600 fill-green-600' />
                <Star className='size-5 text-green-600 fill-green-600' />
                <Star className='size-5 text-green-600 fill-green-600' />
              </div>

              <div className="text-lg leading-8">
                <p>
                  &quot;My other used to scratch so easily which would remain permanently.  Casefusion barely has scratches after half a year.<span className='p-0.5 bg-slate-800 text-white' >Looks good as new</span>. I definitely recommend it!&quot;
                </p>
              </div>

              <div className="flex gap-4 mt-2">
                <img
                  src="/users/user-4.jpg"
                  alt="User 2"
                  className='rounded-full size-12 object-cover italic'
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Malik Bonaparte</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className='size-4 stroke-[3px] text-green-600' />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section className="">
        <MaxWidthWrapper
          className='py-24'
        >
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl text-gray-900 md:text-6xl">
                Upload your photo and get{' '}
                <span className="relative px-2 bg-green-600 text-white">
                  your own case
                </span>{' '}
                now.
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <img
                src="/arrow.png"
                className="absolute top-[25rem md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0 italic"
                alt='arrow image'
              />

              <div className="relative h-80 md:size-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
                <img src="/horse.jpg" alt="horse image" className="italic rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 size-full" />
              </div>

              <Phone
                imgSrc='/horse_phone.jpg'
                className='w-60'
              />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className='size-5 text-green-600 inline mr-1.5' />
              High-quality Silicone material
            </li>
            <li className="w-fit">
              <Check className='size-5 text-green-600 inline mr-1.5' />
              Scratch and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className='size-5 text-green-600 inline mr-1.5' />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className='size-5 text-green-600 inline mr-1.5' />
              5 year warranty
            </li>

            <div className="flex justify-center">
              <Link
                href="/configure/upload"
                className={cn(buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8"
                }))}
              >
                Create your case now <ArrowRight className='size-4 ml-1.5' />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </main>
  )
}
