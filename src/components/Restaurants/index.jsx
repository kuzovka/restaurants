import Button from "components/Button"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Restaurants() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://www.bit-by-bit.ru/api/student-projects/restaurants`)
            .then(data => data.json())
            .then(response => setItems(response))
    }, [])

    return (
        <div className="max-w-screen-2xl items-center justify-center flex flex-col mx-auto my-6" >
            <div>
                <h1 className="text-6xl  font-semibold">Выберите <span className="italic ml-4 text-yellow-500 leading-6 font-semibold underline ">ресторан:</span></h1>
            </div>

            <div className="grid grid-cols-4 gap-10 w-full mt-24 px-6">
                {items.map((item) => (

                    <div class="flex flex-col justify-between items-center w-80 text-center shadow-2xl overflow-hidden transition-all duration-200 h-full " key={item.id}>
                        <div className="w-11/12 pt-3 overflow-hidden">
                            <img className="h-56 object-cover w-full object-center hover:scale-x-110 transition-all duration-300 ease-linear" src={item.image} alt=""/>
                        </div>
                        <div className="my-3 font-bold text-yellow-600">
                            <p className=" text-lg uppercase">{item.name}</p>
                            <p className="text-base ">- {item.cuisine} -</p>
                        </div>
                        <div className="pt-3 pb-5 px-3 font-normal text-base">{item.description}</div>

                        <Link to={`/restaurant/${item.slug}`}
                        className="text-center mb-5">
                            <Button title="посмотреть меню"/>
                        </Link>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Restaurants