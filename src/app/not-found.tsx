import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative px-4">
      {/* Gradient decorations */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20 shadow-lg text-white">
        <CardHeader className="space-y-1">
          <div className="flex justify-center items-center">
            <BuildFastLogo />
          </div>
          <CardTitle className="text-3xl font-bold mt-4 text-center">
            404 - Page Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-xl mb-6">Oops! Looks like this page pulled a Houdini.</p>
          <div className="mb-6">
            <img 
              src="/placeholder.svg?height=200&width=300" 
              alt="Dank 404 Meme" 
              className="mx-auto rounded-lg"
            />
          </div>
          <p className="text-lg mb-8">
            "I searched the entire internet, but your page was on vacation. Maybe it's chilling with Harambe?" 🦍
          </p>
          <Button asChild className="bg-white text-black hover:bg-white/90">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

function BuildFastLogo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <path
        d="M17.3333 9.33333V3L3 20H14.6667V28L29 11H17.3333V9.33333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

