const Avatar = ({ photo }) => {
    return (
        <img
            src={photo || '/images/dashboard/navbar/placeholder.png'}
            alt="User"
            className="w-10 bg-neutral-300 rounded-full"
        />
    )
}

export default Avatar