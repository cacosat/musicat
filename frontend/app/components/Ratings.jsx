/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MRNcNcW4EGQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import GradientOutline from "./gradientOutline";

export default function Component() {
  return (
    <GradientOutline px={12} py={12} bg='background' className="flex items-center justify-between p-4 text-gray-300">
      <div className="flex items-center space-x-4">
        <img
          alt="Profile"
          className="rounded-lg"
          height="60"
          src="/We are the grand.jpeg"
          style={{
            aspectRatio: "60/60",
            objectFit: "cover",
          }}
          width="50"
        />
        <div className="text-center mx-2"> {/* Agregamos mx-2 para el margen */}
          <Link className="block text-lg font-semibold text-gray-300" href="#">
            Fantasmas
          </Link>
          <span className="block text-sm  text-gray-300">We Are The Grand</span>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <span className="font-bold mx-8  text-gray-300">Volver</span> {/* Agregamos mx-2 para el margen */}
        <span className="font-semibold mx-8  text-gray-300">100M</span> {/* Agregamos mx-2 para el margen */}
        <HeadphonesIcon className="h-5 w-5 text-gray-300" />
        <HeartIcon className="h-5 w-5  text-gray-300" />
        <ShareIcon className="h-5 w-5  text-gray-300" />
        <Button className="px-2 py-1 text-xs bg-lefter rounded-md flex items-center">
          <StarIcon className="h-4 w-4 mr-1" />
          4.8
        </Button>
      </div>
    </GradientOutline>
  )
}
function HeadphonesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg {...props}
     className="mr-1"
     width="16" 
     height="18" 
     viewBox="0 0 19 18" 
     fill="none" 
     xmlns="http://www.w3.org/2000/svg">
      <path d="M8.17736 1.35526C8.72758 0.240387 10.3173 0.240386 10.8676 1.35525L12.1355 3.9243C12.4996 4.66215 13.2035 5.17358 14.0178 5.2919L16.8529 5.70387C18.0832 5.88264 18.5745 7.3946 17.6842 8.2624L15.6327 10.2621C15.0435 10.8365 14.7746 11.664 14.9137 12.475L15.398 15.2986C15.6082 16.524 14.3221 17.4584 13.2216 16.8799L10.6858 15.5467C9.9575 15.1638 9.08742 15.1638 8.35911 15.5467L5.82331 16.8799C4.72287 17.4584 3.43672 16.524 3.64689 15.2986L4.13118 12.475C4.27028 11.664 4.00141 10.8365 3.41219 10.2621L1.36069 8.26241C0.470413 7.3946 0.961678 5.88264 2.19201 5.70387L5.02711 5.2919C5.84139 5.17358 6.5453 4.66216 6.90946 3.9243L8.17736 1.35526Z" fill="#5BE7A1" stroke="#5BE7A1"/>
    </svg>
  )
}