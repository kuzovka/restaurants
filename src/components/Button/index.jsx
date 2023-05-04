function Button({ title}) {
    return (
        <button className="w-26 h-10 text-sm text-white px-4 uppercase font-medium bg-yellow-400 hover:bg-yellow-500 transition-all duration-200 ease-linear">
            {title}
        </button>
    )
}

export default Button