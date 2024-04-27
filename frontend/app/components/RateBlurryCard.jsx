import React from "react";

export default function RateBlurryCard(props) {
  return (
    <>
      <div className="w-full h-fit max-w-[478px] text-white bg-white/5 rounded-md border border-white/15 backdrop-blur-md p-6">
        {/* Contenedor principal que alinea horizontalmente y centra verticalmente los dos contenedores principales */}
        <div className="flex justify-between items-center gap-x-8">
          {/* Contenedor para la calificación y las estrellas, centrado verticalmente */}
          <div className="flex flex-col items-center">
            {/* Contenedor para los números */}
            <div className="flex items-baseline gap-1">
              {/* Número grande (la calificación) */}
              <h1 className="text-6xl font-medium">
                {props.rating}
              </h1>
              {/* Número más pequeño al lado */}
              <span className="text-2xl font-light">
                {props.smallNumber}
              </span>
            </div>
            {/* Contenedor para las estrellas */}
            <div className="flex items-center">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorder />
            </div>
          </div>

          {/* Contenedor general para los elementos repetidos a la derecha */}
          <div className="flex flex-col gap-2">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                {/* Icono de estrella aún más pequeño */}
                <div className="text-accent-green-light text-xxs">
                  <StarIconSmall />
                </div>
                {/* Número pequeño */}
                <span className="text-sm">
                  {props.additionalNumber}
                </span>
                {/* Rectángulo redondeado más largo y con menos bordes redondeados */}
                <div className="bg-accent-green-light rounded h-3 w-16"></div>
                {/* Otro número pequeño */}
                <span className="text-sm">
                  {props.anotherNumber}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
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

  function StarIconSmall(props) {
    return (
      <svg {...props}
       className="mr-0"
       width="14" 
       height="14" 
       viewBox="0 0 19 18" 
       fill="none" 
       xmlns="http://www.w3.org/2000/svg">
        <path d="M8.17736 1.35526C8.72758 0.240387 10.3173 0.240386 10.8676 1.35525L12.1355 3.9243C12.4996 4.66215 13.2035 5.17358 14.0178 5.2919L16.8529 5.70387C18.0832 5.88264 18.5745 7.3946 17.6842 8.2624L15.6327 10.2621C15.0435 10.8365 14.7746 11.664 14.9137 12.475L15.398 15.2986C15.6082 16.524 14.3221 17.4584 13.2216 16.8799L10.6858 15.5467C9.9575 15.1638 9.08742 15.1638 8.35911 15.5467L5.82331 16.8799C4.72287 17.4584 3.43672 16.524 3.64689 15.2986L4.13118 12.475C4.27028 11.664 4.00141 10.8365 3.41219 10.2621L1.36069 8.26241C0.470413 7.3946 0.961678 5.88264 2.19201 5.70387L5.02711 5.2919C5.84139 5.17358 6.5453 4.66216 6.90946 3.9243L8.17736 1.35526Z" fill="#5BE7A1" stroke="#5BE7A1"/>
      </svg>
    )
  }
  