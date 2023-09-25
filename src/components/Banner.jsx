export default function Banner() {
  return (
    <section className="w-screen lg:flex lg:flex-row">
      {/* Partie gauche du banner (contenu) */}
      <div className="bg-rose-600 text-white py-3 px-5 flex flex-col px-10 lg:justify-evenly lg:w-2/3">
        <h2 className="text-3xl font-bold py-5 text-center">
          Simplon.co en Occitanie
        </h2>
        <p className="text-lg text-center">
          Simplon.co est un réseau de Fabriques solidaires et inclusives qui
          proposent des formations gratuites aux métiers techniques du numérique
          en France et à l'étranger.
        </p>
        <button
          className="shadow-xl px-5 py-3 bg-white text-rose-600 font-bold my-10 text-lg md:w-1/2 hover:bg-rose-600 hover:text-white hover:ring-2 hover:ring-white hover:ring-inset ease-out duration-200"
        >
          FORMATIONS OUVERTES
        </button>
      </div>

      {/* Partie droite du banner (image) */}
      <div className="hidden lg:block lg:w-1/3">
        <img
          className="h-full object-cover"
          src="src/assets/images/simplon_image.jpeg"
          alt="Simplon Image"
        />
      </div>
    </section>
  );
}
