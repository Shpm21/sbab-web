import React from 'react'

const ModelSection: React.FC = () => {
  return (
    <>
      <div
        id="model"
        className="
          container mx-auto
            px-4 sm:px-6 lg:px-8
            py-8
            dark:bg-gray-800
            rounded-lg
        "
      >
        <h1
          className="
               text-4xl font-bold text-font-primary dark:text-white
          "
        >
          Model Section
        </h1>
        <div
          className="
                    grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            md:gap-8
            mt-6
            text-gray-600
            dark:text-gray-400
        "
        >
          <p
            className="
            text-font-primary
            dark:text-gray-400
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid
            aut, commodi consequuntur cupiditate illo saepe voluptates? At
            consequatur consequuntur, distinctio, excepturi fugit itaque
            molestiae nemo quis quo reiciendis, vero! Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Aliquam aperiam, aut deleniti
            deserunt dignissimos, ducimus, facilis magnam nam nobis nostrum
            obcaecati officiis quia repellendus. At et ipsa officiis porro sunt!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            aliquam consectetur, consequatur consequuntur delectus deserunt
            dicta fugiat harum hic itaque laboriosam libero nemo obcaecati, odio
            perferendis praesentium quia tenetur Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Accusamus dolorem illo, incidunt ipsum
            libero maxime minima nam officiis quae, recusandae soluta, vero!
            Cumque laborum molestiae possimus provident rem rerum vitae. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Deserunt est
            facilis fugit nisi numquam officia saepe. A ad eligendi incidunt
            ipsum magnam modi nisi, ratione rem sunt temporibus, ullam voluptas.
          </p>
        </div>
      </div>
    </>
  )
}

export default ModelSection
