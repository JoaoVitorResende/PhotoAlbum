import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import useAlbums from "../contexts/albums/hooks/use-albuns";
import PhotoList from "../contexts/photos/components/photo-list";

export default function PageHome(){
    const {albums, isloadingAlbums} = useAlbums();
    return(
        <Container>
           <AlbumsFilter albums={albums} loading={isloadingAlbums} className="mb-9"/>
           <PhotoList photos={[
            {
                id: '23',
                title: 'teste',
                imageId: 'portrait-tower.png',
                albums: [
                    { id: '1', title: 'Album 1' },
                    { id: '2', title: 'Album 2' },
                    { id: '3', title: 'Album 3' }
                ],}
           ]}/>
        </Container>
    )
}