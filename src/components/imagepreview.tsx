import type React from "react";
import { tv } from "tailwind-variants";

export const imagePreviewVariants = tv({
    base: `
        w-full h-full object-cover
    `
});

interface ImagePreviewProps extends React.ComponentProps<"img">{
    imageClassName?: string;
}

export default function ImagePreview({
    className,
    imageClassName,
    ...props
}: ImagePreviewProps){
    return(
        <div className={imagePreviewVariants({className})}>
            <img className={imagePreviewVariants({className: imageClassName})} {...props}/>
        </div>
    )
}