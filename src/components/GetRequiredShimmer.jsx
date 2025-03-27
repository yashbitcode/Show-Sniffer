import { Shimmer } from "./Shimmer";

const GetRequiredShimmer = ({tag}) => {
    return (tag !== "person") ? (
        <>
            <Shimmer className={"mt-[1rem] max-sm:justify-items-center grid-rows- grid-cols-[repeat(auto-fit,minmax(380px,1fr))] max-sm1:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid gap-[1.1rem]"} cardClass={"w-full h-[320px] max-sm3:h-[270px]"} totalCards={4} />

            <Shimmer className={"mt-[1rem] grid-cols-[repeat(auto-fit,minmax(290px,1fr))] grid gap-[1rem] front-info max-sm:justify-items-center"} cardClass={"w-full h-[200px] max-sm3:h-[180px]"} totalCards={4} />
        </>
    ) : (
        <Shimmer className={"mt-[1rem] grid-cols-[repeat(auto-fit,minmax(270px,1fr))] grid gap-x-[1.1rem] gap-y-[2rem]"} cardClass={"w-full h-[400px] max-sm3:h-[200px] mx-auto"} totalCards={4} />
    );
};

export default GetRequiredShimmer;