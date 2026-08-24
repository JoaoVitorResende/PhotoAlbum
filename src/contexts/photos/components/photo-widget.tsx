import ImagePreview from "../../../components/imagepreview";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { Photo } from "../models/photo";

interface PhotoWidgetProps{
    photo: Photo;
    loading?: boolean;
}

export default function PhotoWidget({photo, loading}: PhotoWidgetProps){
    return (
        <div className="flex flex-col gap-4">
          {!loading ? (
            <ImagePreview 
            src={`/images/${photo.imageId}`}
            title={photo.title}
            imageClassName="w-[10.875rem] h-[10.875rem] rounded-lg"/>
          ) : (
            <Skeleton className="w-[10.875rem] h-[10.875rem] rounded-lg"/>
          )}  

          <div className="flex flex-col gap-2">
            {!loading ?(
                <Text variant="paragraph-large" className="truncate">{photo.title}</Text>
            ):
            <Skeleton className="w-full h-6"/>
            }
          </div>
        </div>
    )
}