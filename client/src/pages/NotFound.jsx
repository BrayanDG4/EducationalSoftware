export const NotFound = () => {
  return (
    <div className="h-screen bg-endsection">
      <div className="flex justify-center items-center">
        <h1 className="font-semibold text-4xl my-4 text-white mb-5">
          Ooops! ¡Página no encontrada!
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="font-semibold text-4xl my-4 text-white">Error 404</h1>
      </div>
      <div className="flex justify-center items-center">
        <span class="loader"></span>
      </div>
    </div>
  );
};
