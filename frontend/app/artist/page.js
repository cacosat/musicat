"use client";
import Image from 'next/image';
import AboutCard from "../components/aboutCard";

export default function Profile() {
    const bannerTestImg = "/Coldplay.jpg"
    const artistName = 'Coldplay'
    const aboutCardDescription = 'Siempre me ha gustado especialmente el rock, fanatico de la banda chilena... humorista, Santiago de Chile.'

    return (
        <main className="flex flex-col w-full h-full">
          <div className="flex items-center justify-center w-full relative p-12">
            {/* Background image for the banner */}
            <Image
              src={bannerTestImg}
              alt="Banner"
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 z-10"></div>
            
            <div className="flex justify-center items-center w-full max-w-[1000px] overflow-hidden gap-24 z-20 h-full">
              {/* New container for artist name and icons */}
              <div className="flex flex-col justify-center items-start h-full">
                {/* Artist name */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
                  {artistName}
                </h1>
                {/* Space for icons */}
                <div className="flex justify-center gap-4 mt-4 w-full">
                  {/* Individual icon container */}
                  <div className="flex justify-center items-center h-full">
                    {/* YouTube icon */}
                    <div dangerouslySetInnerHTML={{ __html: `` }} />
                        <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.3513 1.99903C31.8093 3.38874 32 5.59682 32 11C32 16.4032 31.8093 18.6113 30.3513 20.001C28.8933 21.3901 27.3747 21.5 16 21.5C4.62533 21.5 3.10667 21.3901 1.64867 20.001C0.190666 18.6113 0 16.4032 0 11C0 5.59682 0.190666 3.38874 1.64867 1.99903C3.10667 0.609324 4.62533 0.5 16 0.5C27.3747 0.5 28.8933 0.609941 30.3513 1.99903ZM13.3 15.5811L21.3973 11.2341L13.3 6.95503V15.5811Z" fill="white"/>
                        </svg>
                  </div>
                  {/* Individual icon container */}
                  <div className="flex justify-center items-center h-full">
                    {/* Spotify icon */}
                    <div dangerouslySetInnerHTML={{ __html: `` }} />
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0C7.17771 0 0 7.17771 0 16C0 24.8223 7.17771 32 16 32C24.8223 32 32 24.823 32 16C32 7.17702 24.8223 0 16 0ZM22.7723 23.1916C22.5713 23.4934 22.2403 23.6561 21.9031 23.6561C21.7042 23.6561 21.5032 23.5998 21.3252 23.4809C19.6055 22.3342 16.6891 21.5693 14.2553 21.57C11.6726 21.5714 9.73671 22.2056 9.71724 22.2118C9.17206 22.3968 8.58029 22.0992 8.3981 21.5526C8.21592 21.006 8.51145 20.415 9.05802 20.2335C9.14981 20.2029 11.3382 19.4859 14.2553 19.4845C16.6891 19.4832 20.0742 20.1396 22.483 21.7452C22.9628 22.0651 23.0922 22.7125 22.7723 23.1916ZM24.8529 18.922C24.6269 19.285 24.2368 19.4845 23.8383 19.4845C23.6228 19.4845 23.4044 19.4268 23.2083 19.3037C20.0902 17.3609 16.8859 16.9499 14.1253 16.9742C11.0086 17.002 8.51632 17.5966 8.4739 17.6091C7.84319 17.7885 7.1798 17.42 6.9997 16.7865C6.81959 16.1516 7.18884 15.4917 7.82303 15.3123C8.01565 15.2573 10.503 14.6454 13.9083 14.6169C17.0132 14.5912 20.8823 15.0411 24.4718 17.2774C25.0302 17.6251 25.202 18.3622 24.8529 18.922ZM26.9286 13.9292C26.6692 14.37 26.2047 14.6155 25.7277 14.6155C25.4885 14.6155 25.2465 14.5536 25.0246 14.4243C21.3906 12.2908 16.9721 11.8381 13.9055 11.834C13.8909 11.834 13.8763 11.834 13.8617 11.834C10.1532 11.834 7.29732 12.4862 7.26881 12.4932C6.51919 12.665 5.77305 12.2018 5.5992 11.4536C5.42536 10.7061 5.88917 9.95923 6.63671 9.78469C6.76535 9.75479 9.81668 9.05246 13.8617 9.05246C13.8777 9.05246 13.8937 9.05246 13.9097 9.05246C17.3205 9.05732 22.2619 9.57608 26.4335 12.0252C27.0955 12.4146 27.3173 13.2672 26.9286 13.9292Z" fill="white"/>
                        </svg>
                  </div>
                  {/* Individual icon container */}
                  <div className="flex justify-center items-center h-full">
                    {/* Apple Music icon */}
                    <div dangerouslySetInnerHTML={{ __html: `` }} />
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.1429 0H6.85714C3.07657 0 0 3.07581 0 6.85714V25.1429C0 28.9242 3.07657 32 6.85714 32H25.1429C28.9234 32 32 28.9242 32 25.1429V6.85714C32 3.07581 28.9234 0 25.1429 0ZM23.619 17.5238V20.5714V20.5874H23.6175C23.6084 22.6804 21.904 24.381 19.8095 24.381H19.4286C18.6766 24.381 17.9558 24.061 17.4507 23.5032C16.9463 22.9463 16.7002 22.1943 16.7749 21.4423C16.9105 20.099 18.1234 19.0476 19.5375 19.0476H20.5714C21.4118 19.0476 22.0952 18.3642 22.0952 17.5238V10.061L12.9524 11.7752V19.8095V22.8571C12.9524 24.9577 11.2434 26.6667 9.14286 26.6667H8.7619C8.0099 26.6667 7.28914 26.3467 6.784 25.789C6.27962 25.232 6.03352 24.48 6.10819 23.728C6.24381 22.3848 7.45676 21.3333 8.87086 21.3333H9.90476C10.7451 21.3333 11.4286 20.6499 11.4286 19.8095V8.6499C11.4286 7.91619 11.952 7.2861 12.6728 7.152L22.2659 5.35391C22.6004 5.29067 22.9448 5.37905 23.2061 5.59695C23.469 5.81486 23.619 6.13562 23.619 6.47619V17.5238Z" fill="white"/>
                        </svg>
                  </div>
                </div>
              </div>
              
              {/* Container for the blurry rectangle */}
              <div className="flex flex-col justify-end h-full gap-4">
                <AboutCard description={aboutCardDescription} />
              </div>
            </div>
          </div>
        </main>
      );
    }