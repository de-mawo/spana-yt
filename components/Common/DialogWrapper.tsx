import { Button } from "@/components/ui/button";
import { IconType } from "react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type DialogProps = {
  children: ReactNode;
  btnTitle?: string;
  title?: string;
  descr?: string;
  isBtn: boolean;
  icon?: IconType;
  open?: boolean;
  setOpen?: () => void
};

const DialogWrapper = ({
  children,
  btnTitle,
  title,
  descr,
  icon: Icon,
  isBtn,
  open,
  setOpen
}: DialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        {isBtn ? <Button className="text-white">{btnTitle}</Button> : Icon && <Icon className="text-blue-600  cursor-pointer" size={24}/>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> {title}</DialogTitle>
          <DialogDescription>{descr}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogWrapper;
