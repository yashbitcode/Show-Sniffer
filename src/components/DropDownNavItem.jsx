import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Link } from "react-router";

const DropDownNavItem = ({name, Icon, nav}) => {
    return (
        <Link to={nav}>
            <DropdownMenuItem className={"flex items-center gap-[6px]"}>
                <Icon size={40} strokeWidth={2} color="black" className="cursor-pointer" />
                <span>{name}</span>
            </DropdownMenuItem>
        </Link>
    );
};

export default DropDownNavItem;