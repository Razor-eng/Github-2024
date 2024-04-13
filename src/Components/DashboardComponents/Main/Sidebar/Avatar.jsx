const Avatar = ({ img }) => {
    return (
        <img
            src={img || '/images/dashboard/navbar/placeholder.png'}
            className="w-4 rounded-full"
        />
    )
}

export default Avatar