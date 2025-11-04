import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export interface DialogProps{
open:boolean,
onOpenChange:(open:boolean)=>void,
title:string,
description:string,
children:React.ReactNode
}




export function ResponsiveDialog({open,onOpenChange,title,children,description}:DialogProps) {


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">   
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
