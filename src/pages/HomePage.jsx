import { Popcorn } from "lucide-react";
import { useNavigate } from "react-router";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full mt-[1.5rem]">
            <div className="w-fit mx-auto flex flex-col items-center">
                <Popcorn size={70} strokeWidth={1.5} color="#F74840" />
                <span className="text-[1rem] text-[#F74840]">Show Sniffer</span>
            </div>
            <div className="text-white mt-[1rem] text-center w-full max-w-[700px] mx-auto">
                <h1 className="text-xl underline">Discover More with Show Sniffer!</h1>
                <p className="mt-[0.8rem] border-[1.5px] p-[13px] rounded-[10px] leading-[30px] text-[1.1rem]">Looking for something new? Just describe what you’re in the mood for, and our smart AI will sniff out the perfect shows and movies for you. Whether you're into thrillers, rom-coms, or hidden gems, Show Sniffer helps you dive deeper into the world of entertainment. Say goodbye to endless scrolling and start discovering today!</p>
            </div>
            <div className="w-fit mx-auto mt-[1.6rem] hover:-rotate-6 transition-all duration-400">
                <button className="text-2xl cursor-pointer w-fit bg-[#202946] text-white p-[13px] rounded-[5px]" onClick={() => navigate("/sign-in")}>Get Started</button>
            </div>
        </div>
    );
};

export default HomePage;