import Container from "../components/container";
import PhotoWidget from "../contexts/photos/components/photo-widget";

export default function PageHome(){
    return(
        <Container>
            <div className="grid grid-cols-4 gap-9">
                <PhotoWidget photo={{
                id: '23',
                title: 'teste',
                imageId: 'portrait-tower.png',
                albums:[
                    {id: '1', title: 'Album 1'},
                    {id: '2', title: 'Album 2'},
                    {id: '3', title: 'Album 3'}
                ]
            }}/>
            </div>
        </Container>
    )
}