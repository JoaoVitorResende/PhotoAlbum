import { tv } from "tailwind-variants";
import ImagePreview from "../../../components/imagepreview";
import React from "react";
import InputCheckbox from "../../../components/input-checkbox";

export const photoImageSelectableVariants = tv({
    base: "cursor-pointer relative rounded-lg",
    variants:{
        select:{
            true: "outline-2 outline-accent-brand"
        },
    },
})

interface photoImageSelectableProps extends React.ComponentProps<typeof ImagePreview>{
    selected?: boolean
    onSelectedImage?:(selected: boolean) => void;
}

export default function PhotoImageSelectable({selected, className, onSelectedImage,...props}:photoImageSelectableProps)
{
    const [IsSelected, setIsSelected] = React.useState(selected);

    function handleSelected(){
        setIsSelected(!IsSelected)
        onSelectedImage?.(!IsSelected)
    }

    return(
        <label className={photoImageSelectableVariants({className, select: IsSelected})}>
           <InputCheckbox size="sm" defaultChecked={IsSelected} onChange={handleSelected} className="absolute top-1 left-1z"/>
           <ImagePreview{...props}/> 
        </label>
    )
}