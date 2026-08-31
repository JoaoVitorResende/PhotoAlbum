import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import useAlbums from "../contexts/albums/hooks/use-albuns";
import PhotoList from "../contexts/photos/components/photo-list";
import usePhotos from "../contexts/photos/hooks/use-photos";

export default function PageHome(){
    const {albums, isloadingAlbums} = useAlbums();
    const {photos, isloadingPhotos} = usePhotos();
    return(
        <Container>
           <AlbumsFilter albums={albums} loading={isloadingAlbums} className="mb-9"/>
           <PhotoList photos={photos} loading={isloadingPhotos}/>
        </Container>
    )
}