import { useParams } from "react-router";
import Text from "../components/text";
import Container from "../components/container";
import type { Photo } from "../contexts/photos/models/photo";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";
import ImagePreview from "../components/imagepreview";
import Button from "../components/button";

export default function PhotoDetails() {
    const { id } = useParams();
    const isloading = false;
    const photo = {
        id: '23',
        title: 'teste',
        imageId: 'portrait-tower.png',
        albums: [
            { id: '1', title: 'Album 1' },
            { id: '2', title: 'Album 2' },
            { id: '3', title: 'Album 3' }
        ],
    } as Photo
    return (
        <Container>
            <header className="flex items-center justify-between gap-8 mb-8">
                {!isloading ? (<Text variant="heading-large">{photo?.title}</Text>)
                : (<Skeleton className="w-48 h-8" />)}
                <PhotosNavigator loading={isloading} />
            </header>
            <div className="grid grid-cols-[21rem] gap-24">
                <div className="space-y-3">
                    {!isloading ? (<ImagePreview src={`/images/${photo?.imageId}`} title={photo?.title} imageClassName="h-[21rem]"/>)
                    :(<Skeleton className="h-[21rem]"/>)}
                    {!isloading ?(<Button variant="destructive">Excluir</Button>):(<Skeleton className="w-20 h-10"/>)}
                </div>
            </div>
        </Container>
    )
}