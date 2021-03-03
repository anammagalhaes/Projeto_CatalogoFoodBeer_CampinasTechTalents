import React, {useEffect, useState} from 'react';
import foodApi from '../Service/foodApi'
import { CategoriesTypes } from '../Types/CategoriesTypes';
import { FoodTypes } from '../Types/FoodTypes';



const Foods = () => {
  
  const [category, setCategory] = useState<CategoriesTypes[]>()
  const [categoryName, setCategoryName] = useState<string>()
  const [meals, setMeals] = useState<FoodTypes[]>()

  useEffect(() => {
    foodApi.get(`/categories.php`)
      .then(response => setCategory(response.data.categories))
  }, [])

  useEffect(() => {
    foodApi.get(`/filter.php?c=${categoryName}`)
      .then(response => setMeals(response.data.meals))
  }, [categoryName])

  useEffect(() => {
    if (categoryName !== undefined) {
      foodApi.get(`/search.php?s=${categoryName}`)
        .then(response => setMeals(response.data.meals))
    }
  }, [categoryName])

  return (
    <div className="food-beer-list food-shop">
      <h1>Refeições</h1>
      <p>
        Selecione uma categoria ou digite o nome da refeição (em inglês):
        <input type="text" placeholder="Refeição" />
      </p>

      <ul>
          {
            category?.map((i: CategoriesTypes) => (
              <div key={i.idCategory} className="catalog">
              <img src={i.strCategoryThumb} alt={i.strCategory}/>
              <li onClick={() => setCategoryName(i.strCategory)}>{i.strCategory}</li>
              </div>
            ))
          }
      </ul>


      <h2>Tipo selecionado: <strong>{categoryName}</strong></h2>
      <div className="food-container">
        {
          meals?.map((i: FoodTypes) =>(
            <div className="food-item" key={i.idMeal}>
              <img src={i.strMealThumb} alt={i.strMeal}/>
              <p>{i.strMeal}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Foods;