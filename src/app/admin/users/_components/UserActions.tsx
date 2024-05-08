"use client"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { deleteUser } from "../../_actions/users"

export function DeleteDropDownItem({ id }: { id: string}){
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const handleTransition = () => {
        startTransition( async () => {
            await deleteUser(id)
            router.refresh()
        })
    }

    return(
        <DropdownMenuItem
            variant="destructive"
            disabled={isPending}
            onClick={handleTransition}
        >
            Delete
        </DropdownMenuItem> 
    )

}