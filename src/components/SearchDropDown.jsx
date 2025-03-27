import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router";

const SearchDropDown = ({suggestions, tag}) => {
    tag = (tag === "tv series") ? "tv" : tag;

    return (
        <ScrollArea className="h-72 w-full absolute rounded-md border">
            <div className="p-4">
            {
                suggestions.results.map((el) => {
                    const {name, original_name, original_title, title, media_type, id} = el;

                    if(media_type !== "person") {
                        return (
                            <Link key={id} to={`/${tag ? tag : media_type}/${id}`}>
                                <div>
                                    <div>{title || name || original_title || original_name}</div>
                                    <Separator className="my-2" />
                                </div>
                            </Link>
                        );
                    }
                })
            }
            </div>
        </ScrollArea>
    );
};

export default SearchDropDown;

