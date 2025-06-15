import React from 'react'
import { Button } from '@/components/ui/button'
import Login from './components/Login'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gradient-to-b from-white to-slate-100">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Welcome to SketchBuy
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
        Discover and purchase unique hand-crafted sketches from talented artists around the world.
      </p>

      <div className="flex gap-4">
        <Button className="text-lg px-6 py-4" asChild>
          <Link href="/">Explore the Shop</Link>
        </Button>
        <Login/>
      </div>
      
      <section className="mt-20 w-full max-w-5xl grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-white shadow-md p-4 rounded-xl">
          <div className="h-48 bg-gray-200 rounded-lg mb-2" />
          <p className="text-sm font-semibold">Sunset Lines by Artist A</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-xl">
          <div className="h-48 bg-gray-200 rounded-lg mb-2" />
          <p className="text-sm font-semibold">Minimal Faces by Artist B</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-xl">
          <div className="h-48 bg-gray-200 rounded-lg mb-2" />
          <p className="text-sm font-semibold">Abstract Flow by Artist C</p>
        </div>
      </section>
    </main>
  )
}
