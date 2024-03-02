import Bible from "./Bible";

const bookSelect = () => (
  <select className="w-full p-2 border border-gray-300 rounded-md">
    {Object.keys(Bible).map((book) => (
      <option value={book} className="p-2" key={book}>
        {book}
      </option>
    ))}
  </select>
);

function BiblicalJourney() {
  return (
    <div className="App">
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md">
            <h2 className="text-3xl font-bold leading-9 text-gray-900">
              Biblical Journey
            </h2>
            <div className="text-base leading-7 text-gray-600 py-4">
              <p>Registra tu progreso de lectura biblica</p>
            </div>
            <div className="text-base leading-7 text-gray-600">
              {bookSelect()}
            </div>
            <div className="text-base leading-7 text-gray-600">
              <label className="block text-md font-medium text-gray-700 p-3">
                Capitulo y versiculo leido
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Capitulo y versiculo ej: 1:1"
              />
            </div>
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <button
                onClick={() => {
                  console.log("Not doing anything friend");
                }}
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiblicalJourney;
