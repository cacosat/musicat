/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4CnRLa0lg1J
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useState } from "react";
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from 'next/image'; 
import GradientOutline from "./gradientOutline";
import Link from "next/link";
import { comma } from "postcss/lib/list";
    
export default function Card() {
  const [likeState, setLikeState] = useState(false);
  const [dislikeState, setDislikeState] = useState(false);
  // The following states should be set via API call to the backend, and update any change to it
  let [numOfLikes, setNumOfLikes] = useState(2);
  let [numOfDislikes, setNumOfDislikes] = useState(0);
  let [comments, setComments] = useState([]);
  let [commentsState, setCommentsState] = useState(false);

  const songName = 'Pienso en Ti';
  const albumName = 'Volver';
  const artistName = 'We are The Grand';
  const albumCover = "/We are the grand.jpeg";
  const profilePicture = "/Lucas.jpeg?height=40&width=40";
  const userName = "Lucas Espinoza";
  const userTotalReviews = "30";
  const userMeanReview = "3.9";
  const lastUpdateRating = "Hace 2 semanas";
  const reviewTitle = "Título de la reseña";
  const reviewContent = "Lorem ipsum dolor sit amet consectetur. Consectetur habitant fringilla erat morbi enim tempor eros ultricies morbi."

  function onLikeClick() {
    setLikeState(!likeState);
    // API call to get current num of likes and update it, pwnding to define best approach
    if (likeState === false) {
      setNumOfLikes(numOfLikes + 1);
    }
  }

  function onDislikeClick() {
    setDislikeState(!dislikeState);
    if (dislikeState === false) {
      setNumOfDislikes(numOfDislikes + 1);
    }
  }

  // TODO: lógica para el manejo de los botones
  function truncateText(text, limit) {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

  return (
    <GradientOutline px={32} py={32} bg="/We are the grand.jpeg" className="">
    <div className="flex justify-center items-center gap-8 h-fit max-h-80 ">
      <div className=" max-w-[255px] max-h-[255px] w-full h-full relative "> 
        {/* Actualiza aquí el Link */}
        <Link href="/artist" passHref>
          <div className="cursor-pointer ">
            <Image
              alt="Album Cover"
              className="min-w-[125px] min-h-[125px] object-cover rounded-lg "
              height={255}
              src={albumCover}
              width={255}
              layout="responsive"  // Asegúrate de tener layout="responsive" si es necesario
            />
            <div className="absolute top-0 left-0 w-full h-full p-4 rounded-lg group bg-gradient-to-t from-black/75 to-transparent hover:bg-black/50 flex flex-col justify-end transition-all">
              <div className="flex flex-col h-full place-items-center transition-all opacity-0 group-hover:opacity-100 ">
                <img src="albumIcon.svg" alt="Album icon" className="w-32 h-auto opacity-50" />
              </div>
              <div className="text-custom-gray-200 opacity-90">
                <div className="flex gap-2 items-center text-white font-semibold">                  
                  <img src="/songIcon.svg" alt="Song icon" className="w-[18px] h-[18px] " />
                  <p title={songName}>{truncateText(songName, 25)}</p>
                </div>
                <div className="flex gap-2 items-center text-sm">
                  <img src="artistIcon.svg" alt="Artist icon" className="w-[18px] h-[18px]" />
                  <p title={artistName}>{truncateText(artistName, 25)}</p>
                </div>
                <div className="flex gap-2 items-center text-sm">
                  <img src="albumIcon.svg" alt="Album icon" className="w-[18px] h-[18px]" />
                  <p title={albumName}>{truncateText(albumName, 25)}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
        <div className="flex flex-col gap-6 items-start">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage alt="Imagen de perfil" src={profilePicture} />
              </Avatar>
              <div>
                <div className="text-xl text-white font-semibold">
                  {userName}
                </div>
                <div className="text-sm text-gray-400">
                  {`${userTotalReviews} Reseñas - ${userMeanReview} promedio`}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-accent-green-light">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorder />
                <p className="text-xl font-semibold">4.0</p>
              </div>
              <div className="text-sm text-gray-400">
                {lastUpdateRating}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start text-white">
            <div className="text-xl font-semibold">
              {reviewTitle}
            </div>
            <p className="font-light">
              {reviewContent}
            </p>
            <button className="self-end text-accent-green-light underline">
              Ver más
            </button>
          </div>
          <div className="w-full flex justify-end">
            <div className="flex items-center">
              <Button className="text-custom-gray-200 gap-2" variant="ghost" onClick={onLikeClick}>
                {likeState ? (
                  <img src="/thumbUpIconActive.svg" alt="like" />
                ) : (
                  <img src="/thumbUpIconInactive.svg" alt="like" />
                )}
                <p>{numOfLikes}</p>
              </Button>
              <Button className="text-custom-gray-200 gap-2" variant="ghost" onClick={onDislikeClick}>
                {dislikeState ? (
                  <img src="/thumbDownIconActive.svg" alt="dislike" />
                ) : (
                  <img src="/thumbDownIconInactive.svg" alt="dislike" />
                )}
                <p>{numOfDislikes}</p>
              </Button>
              <Button className="text-custom-gray-200 gap-2" variant="ghost" onClick={() => {setCommentsState(!commentsState)}}>
                {commentsState ? (
                  <img src="/commentIconActive.svg" alt="comments" />
                ) : (
                  <img src="/commentIconInactive.svg" alt="comments" />
                )}
                <p>0</p>
              </Button>
              <Button className="text-custom-gray-200 gap-2" variant="ghost">
                <Share className="text-gray-400" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </GradientOutline>
  );
}
function Comments(props) {
  return (
    <svg width="21" 
    height="21" 
    viewBox="0 0 21 21" 
    fill="none" 
    className="mr-1"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5225 0.5H2.52246C1.42246 0.5 0.532461 1.4 0.532461 2.5L0.522461 20.5L4.52246 16.5H18.5225C19.6225 16.5 20.5225 15.6 20.5225 14.5V2.5C20.5225 1.4 19.6225 0.5 18.5225 0.5ZM5.52246 7.5H15.5225C16.0725 7.5 16.5225 7.95 16.5225 8.5C16.5225 9.05 16.0725 9.5 15.5225 9.5H5.52246C4.97246 9.5 4.52246 9.05 4.52246 8.5C4.52246 7.95 4.97246 7.5 5.52246 7.5ZM11.5225 12.5H5.52246C4.97246 12.5 4.52246 12.05 4.52246 11.5C4.52246 10.95 4.97246 10.5 5.52246 10.5H11.5225C12.0725 10.5 12.5225 10.95 12.5225 11.5C12.5225 12.05 12.0725 12.5 11.5225 12.5ZM15.5225 6.5H5.52246C4.97246 6.5 4.52246 6.05 4.52246 5.5C4.52246 4.95 4.97246 4.5 5.52246 4.5H15.5225C16.0725 4.5 16.5225 4.95 16.5225 5.5C16.5225 6.05 16.0725 6.5 15.5225 6.5Z" fill="#B3B3B3"/>
    <path d="M18.5225 0.5H2.52246C1.42246 0.5 0.532461 1.4 0.532461 2.5L0.522461 20.5L4.52246 16.5H18.5225C19.6225 16.5 20.5225 15.6 20.5225 14.5V2.5C20.5225 1.4 19.6225 0.5 18.5225 0.5ZM5.52246 7.5H15.5225C16.0725 7.5 16.5225 7.95 16.5225 8.5C16.5225 9.05 16.0725 9.5 15.5225 9.5H5.52246C4.97246 9.5 4.52246 9.05 4.52246 8.5C4.52246 7.95 4.97246 7.5 5.52246 7.5ZM11.5225 12.5H5.52246C4.97246 12.5 4.52246 12.05 4.52246 11.5C4.52246 10.95 4.97246 10.5 5.52246 10.5H11.5225C12.0725 10.5 12.5225 10.95 12.5225 11.5C12.5225 12.05 12.0725 12.5 11.5225 12.5ZM15.5225 6.5H5.52246C4.97246 6.5 4.52246 6.05 4.52246 5.5C4.52246 4.95 4.97246 4.5 5.52246 4.5H15.5225C16.0725 4.5 16.5225 4.95 16.5225 5.5C16.5225 6.05 16.0725 6.5 15.5225 6.5Z" fill="black" fillOpacity="0.2"/>
    </svg>
    
  )
}


function Share(props) {
  return (
    <svg width="19" 
    height="21" 
    viewBox="0 0 19 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5225 14.58C14.7625 14.58 14.0825 14.88 13.5625 15.35L6.43246 11.2C6.48246 10.97 6.52246 10.74 6.52246 10.5C6.52246 10.26 6.48246 10.03 6.43246 9.8L13.4825 5.69C14.0225 6.19 14.7325 6.5 15.5225 6.5C17.1825 6.5 18.5225 5.16 18.5225 3.5C18.5225 1.84 17.1825 0.5 15.5225 0.5C13.8625 0.5 12.5225 1.84 12.5225 3.5C12.5225 3.74 12.5625 3.97 12.6125 4.2L5.56246 8.31C5.02246 7.81 4.31246 7.5 3.52246 7.5C1.86246 7.5 0.522461 8.84 0.522461 10.5C0.522461 12.16 1.86246 13.5 3.52246 13.5C4.31246 13.5 5.02246 13.19 5.56246 12.69L12.6825 16.85C12.6325 17.06 12.6025 17.28 12.6025 17.5C12.6025 19.11 13.9125 20.42 15.5225 20.42C17.1325 20.42 18.4425 19.11 18.4425 17.5C18.4425 15.89 17.1325 14.58 15.5225 14.58Z" fill="#B3B3B3"/>
    <path d="M15.5225 14.58C14.7625 14.58 14.0825 14.88 13.5625 15.35L6.43246 11.2C6.48246 10.97 6.52246 10.74 6.52246 10.5C6.52246 10.26 6.48246 10.03 6.43246 9.8L13.4825 5.69C14.0225 6.19 14.7325 6.5 15.5225 6.5C17.1825 6.5 18.5225 5.16 18.5225 3.5C18.5225 1.84 17.1825 0.5 15.5225 0.5C13.8625 0.5 12.5225 1.84 12.5225 3.5C12.5225 3.74 12.5625 3.97 12.6125 4.2L5.56246 8.31C5.02246 7.81 4.31246 7.5 3.52246 7.5C1.86246 7.5 0.522461 8.84 0.522461 10.5C0.522461 12.16 1.86246 13.5 3.52246 13.5C4.31246 13.5 5.02246 13.19 5.56246 12.69L12.6825 16.85C12.6325 17.06 12.6025 17.28 12.6025 17.5C12.6025 19.11 13.9125 20.42 15.5225 20.42C17.1325 20.42 18.4425 19.11 18.4425 17.5C18.4425 15.89 17.1325 14.58 15.5225 14.58Z" fill="black" fillOpacity="0.2"/>
    </svg>
  )
}


function StarBorder(props) {
  return (
    <svg width="19"
    height="18"
    viewBox="0 0 19 18" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
<path d="M8.17736 1.35526C8.72758 0.240387 10.3173 0.240386 10.8676 1.35525L12.1355 3.9243C12.4996 4.66215 13.2035 5.17358 14.0178 5.2919L16.8529 5.70387C18.0832 5.88264 18.5745 7.3946 17.6842 8.2624L15.6327 10.2621C15.0435 10.8365 14.7746 11.664 14.9137 12.475L15.398 15.2986C15.6082 16.524 14.3221 17.4584 13.2216 16.8799L10.6858 15.5467C9.9575 15.1638 9.08742 15.1638 8.35911 15.5467L5.82331 16.8799C4.72287 17.4584 3.43672 16.524 3.64689 15.2986L4.13118 12.475C4.27028 11.664 4.00141 10.8365 3.41219 10.2621L1.36069 8.26241C0.470413 7.3946 0.961678 5.88264 2.19201 5.70387L5.02711 5.2919C5.84139 5.17358 6.5453 4.66216 6.90946 3.9243L8.17736 1.35526Z" stroke="#5BE7A1"/>
</svg>
  )
}


function StarIcon(props) {
  return (
    <svg {...props}
     className="mr-1"
     width="19" 
     height="18" 
     viewBox="0 0 19 18" 
     fill="none" 
     xmlns="http://www.w3.org/2000/svg">
      <path d="M8.17736 1.35526C8.72758 0.240387 10.3173 0.240386 10.8676 1.35525L12.1355 3.9243C12.4996 4.66215 13.2035 5.17358 14.0178 5.2919L16.8529 5.70387C18.0832 5.88264 18.5745 7.3946 17.6842 8.2624L15.6327 10.2621C15.0435 10.8365 14.7746 11.664 14.9137 12.475L15.398 15.2986C15.6082 16.524 14.3221 17.4584 13.2216 16.8799L10.6858 15.5467C9.9575 15.1638 9.08742 15.1638 8.35911 15.5467L5.82331 16.8799C4.72287 17.4584 3.43672 16.524 3.64689 15.2986L4.13118 12.475C4.27028 11.664 4.00141 10.8365 3.41219 10.2621L1.36069 8.26241C0.470413 7.3946 0.961678 5.88264 2.19201 5.70387L5.02711 5.2919C5.84139 5.17358 6.5453 4.66216 6.90946 3.9243L8.17736 1.35526Z" fill="#5BE7A1" stroke="#5BE7A1"/>
    </svg>
  )
}


function ThumbsDown(props) {
  return (
    <svg width="23"
    height="21"
    viewBox="0 0 23 21" 
    className="mr-1"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5225 0.5H5.52246C4.69246 0.5 3.98246 1 3.68246 1.72L0.662461 8.77C0.572461 9 0.522461 9.24 0.522461 9.5V11.5C0.522461 12.6 1.42246 13.5 2.52246 13.5H8.83246L7.88246 18.07L7.85246 18.39C7.85246 18.8 8.02246 19.18 8.29246 19.45L9.35246 20.5L15.9425 13.91C16.3025 13.55 16.5225 13.05 16.5225 12.5V2.5C16.5225 1.4 15.6225 0.5 14.5225 0.5ZM18.5225 0.5V12.5H22.5225V0.5H18.5225Z" fill="#B3B3B3"/>
    <path d="M14.5225 0.5H5.52246C4.69246 0.5 3.98246 1 3.68246 1.72L0.662461 8.77C0.572461 9 0.522461 9.24 0.522461 9.5V11.5C0.522461 12.6 1.42246 13.5 2.52246 13.5H8.83246L7.88246 18.07L7.85246 18.39C7.85246 18.8 8.02246 19.18 8.29246 19.45L9.35246 20.5L15.9425 13.91C16.3025 13.55 16.5225 13.05 16.5225 12.5V2.5C16.5225 1.4 15.6225 0.5 14.5225 0.5ZM18.5225 0.5V12.5H22.5225V0.5H18.5225Z" fill="black" fillOpacity="0.2"/>
    </svg>
    
  )
}


function ThumbsUp(props) {
  return (
    <svg width="23"
     height="20"
     viewBox="0 0 23 20" 
     className="mr-1"
     fill="none" 
     xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6425 0.559969L7.10246 6.09997C6.73246 6.46997 6.52246 6.97997 6.52246 7.50997V17.5C6.52246 18.6 7.42246 19.5 8.52246 19.5H17.5225C18.3225 19.5 19.0425 19.02 19.3625 18.29L22.6225 10.68C23.4625 8.69997 22.0125 6.49997 19.8625 6.49997H14.2125L15.1625 1.91997C15.2625 1.41997 15.1125 0.909969 14.7525 0.549969C14.1625 -0.0300311 13.2225 -0.0300311 12.6425 0.559969ZM2.52246 19.5C3.62246 19.5 4.52246 18.6 4.52246 17.5V9.49997C4.52246 8.39997 3.62246 7.49997 2.52246 7.49997C1.42246 7.49997 0.522461 8.39997 0.522461 9.49997V17.5C0.522461 18.6 1.42246 19.5 2.52246 19.5Z" fill="#5BE7A1"/>
    </svg>
  )
}
