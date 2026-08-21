import {useParams} from "react-router";
import Text from "../components/text";

export default function PhotoDetails(){
    const{id} = useParams();
    return(
        <>
            <Text variant="heading-medium">Pagina detalhes da foto</Text>
            <hr />
             <Text variant="heading-medium">ID da foto: {id}</Text>
        </>
    )
}