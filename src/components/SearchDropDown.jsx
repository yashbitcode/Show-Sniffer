import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const SearchDropDown = ({suggestions}) => {
    return (
        <ScrollArea className="h-72 w-full absolute rounded-md border">
            <div className="p-4">
            {
                suggestions.results.map((el) => {
                    const {name, original_name, original_title, title, media_type, id} = el;

                    if(media_type !== "person") {
                        return (
                            <div key={id}>
                                <div>{title || name || original_title || original_name}</div>
                                <Separator className="my-2" />
                            </div>
                        );
                    }
                })
            }
            </div>
        </ScrollArea>
    );
};

export default SearchDropDown;

