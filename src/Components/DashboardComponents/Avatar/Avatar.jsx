const Avatar = ({ photo }) => {
    return (
        <img
            src={photo || '/images/dashboard/navbar/placeholder.png'}
            alt="User"
            className="w-10 bg-neutral-300 rounded-full cursor-pointer hover:scale-105 transition-all duration-150 ease-in-out shadow-md"
        />
    )
}

export default Avatar