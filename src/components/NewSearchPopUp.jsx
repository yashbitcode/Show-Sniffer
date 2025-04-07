import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@radix-ui/react-dropdown-menu";
import { SquarePlus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import AISearchError from "./AISearchError";
import useRecommedationTemplate from "@/utils/hooks/useRecommedationTemplate";
  
const NewSearchPopUp = () => {
    const [nameRef, contextRef, open, setOpen, error, setError, loading, handleSubmit] = useRecommedationTemplate();    

    return (
        <Dialog open={open} onOpenChange={(value) => {
            setOpen(value);
            if(error) setTimeout(() => setError(null), 200);
        }}>
            <DialogTrigger className="w-full flex justify-end mt-[1rem] cursor-pointer">
                <SquarePlus size={50} strokeWidth={1} color="white" className="cursor-pointer" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New.</DialogTitle>
                    <DialogDescription>
                        Create New AI Search
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Name</Label>
                        <Input id="name" ref={nameRef} placeholder="Eg: Test Search" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="ai-search" className="text-right text-nowrap">Context</Label>
                        <Input id="ai-search" ref={contextRef} placeholder="Eg: Best Movies & TV Series" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className={"cursor-pointer"} onClick={handleSubmit}>
                        {
                            !loading ? "Submit" : "Loading.."
                        }
                    </Button>
                </DialogFooter>

                {
                    error && (
                        <DialogFooter className={"w-fit mx-auto"}>
                            <AISearchError error={error} />
                        </DialogFooter>
                    )
                }
            </DialogContent>
        </Dialog>
    );
};

export default NewSearchPopUp;