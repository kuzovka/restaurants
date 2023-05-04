import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Button from "components/Button";

function RestaurantMenu() {

    const { slug } = useParams();
	const [meals, setMeals] = useState([]);


	useEffect(() => {
		fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}/items`)
			.then((response) => response.json())
			.then(
				(result) => {
					setMeals(result);
				}
			);
	}, [slug]);

	return (
				<div className="mx-auto max-w-full px-24 ">
						<div className="grid grid-cols-4 gap-10 w-full">
							{meals.map((meal) => (
                                <div class="flex flex-col justify-between items-center w-80 text-center shadow-2xl overflow-hidden transition-all duration-200 h-full " key={meal.id}>
                                    <div className="w-11/12 pt-3 overflow-hidden">
                                        <img className="h-56 object-cover w-full object-center hover:scale-x-110 transition-all duration-300 ease-linear" src={meal.image} alt=""/>
                                    </div>
                                    <div className="my-3 font-bold text-yellow-600">
                                        <p className=" text-lg uppercase">{meal.name}</p>
                                    </div>
                                    <div className="pt-3 pb-5 px-3 font-normal text-base">{meal.description}</div>
                                    <div className="text-center mb-5">
                                        <p className="text-xl font-bold text-yellow-700 mb-4"> {meal.price} руб. </p>
                                        <Button title="добавить в корзину"/>
                                    </div>
								</div>

							))}
						</div>

				</div>
	)
}

export default RestaurantMenu