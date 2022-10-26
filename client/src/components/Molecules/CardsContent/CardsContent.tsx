import React from "react";
import style from "./CardsContent.module.css";
import { Link, Route, Routes } from "react-router-dom";

import CategoryCard from "../../Atoms/CategoryCard/CategoryCard";
import Card from "../../Atoms/Card/Card";

import maquinas from "../../../assets/IMG/fondo-maquinas.png";
import clases from "../../../assets/IMG/fondo-clases.png";
import productos from "../../../assets/IMG/fondo-productos.png";

const CardsContent = () => {
  const data = [
    {
      category: "Maquinas",
      image: maquinas,
    },
    {
      category: "Clases",
      image: clases,
    },
    {
      category: "Productos",
      image: productos,
    },
  ];

  return (
    <div>
      <div>
        <div className={style.container}>
          {data.map((item) => {
            return (
              <Link to={`/home/${item.category}`} key={item.category}>
                {" "}
                <CategoryCard
                  category={item.category}
                  image={{ background: `url('${item.image}')`}}
                />{" "}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
    const {category} = useParams();


    return (
        (!category) ? (
        <div className={`${style.container} m-5`}>
            {
                data.map((item) => {
                    return <Link to={`${item.category}`}> <CategoryCard data={item} /> </Link>
                })
            }
            <CardsContainer />
        </div>) : (
            null
        )
    );
}

export default CardsContent;
=======
export default CardsContent
>>>>>>> 7de8a474802fe50d2df7e070466d4fa64ebdffab
