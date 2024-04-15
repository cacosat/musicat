/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4CnRLa0lg1J
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from 'next/image'; 

export default function Component() {
  return (
    <div className="bg-lefter border border-gray-700 border-opacity-50 rounded-lg overflow-hidden shadow-lg max-w-[658px]">
      <div className="flex">
      <div className="w-1/3 p-3"> 
          <Image
            alt="Banda"
            className="w-full h-full object-cover rounded-lg" // Añadida clase rounded-lg aquí
            height={255}
            src="/We are the grand.jpeg"
            layout="responsive"
            width={219}
          />
        </div>
        <div className="w-2/3 p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage alt="Ignacio Socias" src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>IS</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-white font-semibold">Ignacio Socias</div>
                <div className="text-gray-400 text-sm">30 Reseñas - 3.9 promedio</div>
              </div>
            </div>
            <div className="flex items-center">
              <StarIcon className="text-accent-green-light" />
              <StarIcon className="text-accent-green-light" />
              <StarIcon className="text-accent-green-light" />
              <StarIcon className="text-accent-green-light" />
              <StarHalfIcon className="text-accent-green-light" />
              <span className="text-white ml-1">4.0</span>
            </div>
          </div>
          <div>
            <div className="text-lg text-white font-bold">Título de la Reseña</div>
            <p className="text-gray-300 text-sm">
              Lorem ipsum dolor sit amet consectetur. Consectetur habitant fringilla erat morbi enim tempor eros
              ultricies morbi.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Button className="text-white" variant="ghost">
              Ver más
            </Button>
            <div className="flex items-center space-x-4">
              <Button className="text-accent-green-light" variant="ghost">
                <ThumbsUpIcon className="text-accent-green-light" /> 12
              </Button>
              <Button className="text-gray-400" variant="ghost">
                <ThumbsDownIcon className="text-gray-400" /> 8
              </Button>
              <Button className="text-gray-400" variant="ghost">
                <ReplyIcon className="text-gray-400" /> 2
              </Button>
              <Button className="text-gray-400" variant="ghost">
                <ShareIcon className="text-gray-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReplyIcon(props) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
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


function StarHalfIcon(props) {
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
      <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </svg>
  )
}


function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function ThumbsDownIcon(props) {
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
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}