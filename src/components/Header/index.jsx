import Button from "components/Button"



function Header() {

    return (
        <section>
            <div className="flex items-center justify-between max-w-screen-xl mx-auto min-h-screen">
                <div className="w-1/2 pr-20">
                    <div className="pl-28">
                        <h1 className="text-5xl  font-semibold">С сервисом <span className="italic ml-4 text-yellow-500 leading-6 font-semibold ">Food</span> <br></br>всегда вкусно</h1>
                    </div>
                    <p className="my-14 text-lg font-normal text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum modi neque quod id, nobis voluptate quasi vel. Quia deserunt aperiam ad necessitatibus veritatis totam adipisci ducimus molestiae fugiat. Repudiandae, numquam.

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, veritatis quisquam esse deleniti repudiandae veniam libero earum aut cupiditate, molestias eum ea illum. Hic alias necessitatibus, pariatur ut maiores et!
                    </p>
                    <Button title="Заказать сейчас" />

                </div>

                <div className="">
                    <img src="images/food-Plate.png" alt="" className="w-[700px] "/>
                </div>
            </div>
        </section>
    )
}

export default Header