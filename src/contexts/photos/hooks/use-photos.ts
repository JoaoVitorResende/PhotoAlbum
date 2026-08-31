import { useQuery } from "@tanstack/react-query";
import type { Photo } from "../models/photo";
import { fetcher } from "../../../helpers/api";
import { useQueryState, createSerializer, parseAsString } from "nuqs";

const toSearchPrams = createSerializer({albumId: parseAsString, q: parseAsString})

export default function usePhotos(){
    const [albumId, setalbumId] = useQueryState("albumId")
    //search by name q is default
    const [q, setQ] = useQueryState("q")

    const {data, isLoading} = useQuery<Photo[]>({
        queryKey: ["photos", albumId, q],
        //GET by albumid
        queryFn: () => fetcher(`/photos${toSearchPrams({albumId, q})}`)
    })

    return {
        photos: data || [],
        isloadingPhotos: isLoading,
        filters:{
            albumId,
            setalbumId,
            q,
            setQ
        }
    }
}