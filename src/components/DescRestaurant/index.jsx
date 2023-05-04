import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";




function DescRestaurant() {

	const { slug } = useParams();
	const [restaurant, setRestaurant] = useState(null);

	useEffect(() => {
	  fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants/${slug}`)
		.then((response) => response.json())
		.then(
		  (result) => {
			setRestaurant(result);
		  }
		);
	}, [slug]);

	return (
		<div className="mx-auto max-w-full px-24 py-16">
			{restaurant && (
					<div className="mt-10 text-xl font-semibold text-gray-600">
						<p className="text-yellow-600 font-bold text-3xl mb-5">
						Ресторан {restaurant.name}
						</p>
						<div className="text-yellow-700">
							<p>
								Режим работы: {format (new Date (restaurant.closeAt), 'HH:mm')} - {format (new Date (restaurant.openAt), 'HH:mm')}
							</p>

							<p>
								Адрес: {restaurant.address}
							</p>
							<p>
								тел: {restaurant.phone}, e-mail: {restaurant.email}
							</p>
						</div>

					</div>
			)}
		</div>
	);
}

export default DescRestaurant