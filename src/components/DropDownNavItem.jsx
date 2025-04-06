import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link } from "react-router";

const DropDownNavItem = ({name, Icon}) => {

    return (
        <DropdownMenuItem className={`flex items-center gap-[6px] ${name.toLowerCase() === "star on github" ? "mt-[5px]" : null}`}>
            <Icon size={40} strokeWidth={2} color="black" className="cursor-pointer" />
            <span>{name}</span>
        </DropdownMenuItem>
    );
};

export default DropDownNavItem;