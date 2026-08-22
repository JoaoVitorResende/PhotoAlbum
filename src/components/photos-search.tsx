import InpuText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react"
import React from "react";
import { debounce } from "../helpers/utils";

export default function PhotosSearch()
{
    const [inputValue, setInputValue] = React.useState("");

    const debouncedSetValue = React.useCallback(
        debounce((value: string) => console.log("valor com debounce", value), 1000), [])

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>){
        const value = event.target.value;
        console.log(value)
        setInputValue(value)
        debouncedSetValue(value)
    }
    return(
        <InpuText
            icon={SearchIcon}
            placeholder="Buscar fotos"
            className="flex-1"
            value={inputValue}
            onChange={handleInputChange}
        />
    )
}