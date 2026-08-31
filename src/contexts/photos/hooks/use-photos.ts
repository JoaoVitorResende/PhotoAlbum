import { useQuery } from "@tanstack/react-query";
import type { Photo } from "../models/photo";
import { fetcher } from "../../../helpers/api";
import { useQueryState, createSerializer, parseAsString } from "nuqs";

const toSearchPrams = createSerializer({albumId: parseAsString})

export default function usePhotos(){
    const [albumId, setalbumId] = useQueryState("albumId")
    const {data, isLoading} = useQuery<Photo[]>({
        queryKey: ["photos", albumId],
        //GET by albumid
        queryFn: () => fetcher(`/photos${toSearchPrams({albumId})}`)
    })

    return {
        photos: data || [],
        isloadingPhotos: isLoading,
        filters:{
            albumId,
            setalbumId
        }
    }
}