export const EducationalMaterial = () => {
  return (
    <div>
          <h2 className="text-4xl mycolor leading-snug font-bold md:text-4xl md:leading-normal md:mb-2">
            Material educativo
          </h2>
          <p className="pt-6 text-xl my-gray-text leading-normal md:text-2xl">
            Disfruta de nuestro material educativo.
          </p>

          <div>
            <h3 className="text-4xl my-title-color font-bold md:text-4xl md:mb-2 pt-6">
              Videos
            </h3>
            {/* CARD */}
            <div className="md:flex md:gap-2">
              <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4">
                <iframe className="w-full h-full object-cover" width="300" height="300" src="https://www.youtube.com/embed/pKiXcvkzMl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              
              <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-4">
                <iframe width="300" height="300" src="https://www.youtube.com/embed/flyIq7Z9Wxk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>

            </div>
            {/*END CARD */}
          </div>
        </div>
  )
}