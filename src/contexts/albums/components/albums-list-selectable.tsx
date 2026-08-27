import Divider from "../../../components/divider";
import InputCheckbox from "../../../components/input-checkbox";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Photo } from "../../photos/models/photo";
import type { Album } from "../models/album";

interface AlbumsListSelectableProps {
    loading?: boolean;
    albums: Album[];
    photo: Photo;
}

export default function AlbumsListSelectable({ albums, photo, loading }: AlbumsListSelectableProps) {

    function isChecked(albumID: string) {
        return photo?.albums?.some(album => album.id === albumID)
    }

    function handlePhotoOnAlbuns(albumId: string) {
        let albumIds = []
        if (isChecked(albumId)) {
            albumIds = photo.albums
                .filter((album) => album.id !== albumId)
                .map((album) => album.id)
        }
        else {
            albumIds = [...photo.albums.map((album) => album.id), albumId];
        }
        console.log("fotos que vamos enviar para o backend", albumIds)
    }

    return (
        <ul className="flex flex-col gap-4">
            {!loading && albums?.length > 0 && albums.map((album, index) => (
                <li key={album.id}>
                    <div className="flex items-center justify-between gap-1">
                        <Text variant="paragraph-large" className="truncate">{album.title}</Text>
                        <InputCheckbox defaultChecked={isChecked(album.id)} onClick={() => handlePhotoOnAlbuns(album.id)}/>
                    </div>
                    {index !== albums.length - 1 && <Divider className="mt-4" />}
                </li>
            ))}
            {loading && Array.from({ length: 5 }).map((_, index) => (
                <li key={`albums-list-${index}`}>
                    <Skeleton className="h-[2.5rem]" />
                </li>
            ))}
        </ul>
    )
}