import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  //funcion que agrega una nueva categoria
  const onAddCategory = (newCategory) => {
    // condicion que no permite que se repitan las entradas en el imput
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1> GiftExpertApp </h1>

      {/*llamamos al componente y pasamos la property*/}

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
