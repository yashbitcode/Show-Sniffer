const Genre = ({name, id}) => {
    return (
        <div className="capitalize text-[1.4rem] text-white grow min-w-[200px] min-h-[200px] flex justify-center items-center rounded-lg p-[2rem] cursor-pointer hover:scale-[1.015] transition-all duration-300 ease">{name}</div>
    );
};

export default Genre;