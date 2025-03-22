import { useNavigate } from "react-router";

const Genre = ({tag, name, id}) => {
    const navigate = useNavigate();

    const setGenre = () => {
        navigate(`/${tag}/genre/${name}/${id}/1`);
    };

    return (
        <div className="capitalize text-[1.4rem] text-white grow min-w-[200px] min-h-[200px] flex justify-center items-center rounded-lg p-[2rem] cursor-pointer hover:scale-[1.015] transition-all duration-300 ease" onClick={setGenre}>{name}</div>
    );
};

export default Genre;