import Button from "../../../components/button"
import { Dialog, DialogBody, DialogContent, DialogFooter, DialogHeader, DialogTrigger, DialogClose } from "../../../components/dialog"
import InpuText from "../../../components/input-text"
import Text from "../../../components/text"
import type { Photo } from "../../photos/models/photo"
import SelectedCheckboxIllustration from "../../../assets/images/select-checkbox.svg?react"
import Skeleton from "../../../components/skeleton"
import ImagePreview from "../../../components/imagepreview"
import type { Title } from "@radix-ui/react-dialog"
interface AlbumNewDialogProps {
    trigger: React.ReactNode
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
    const isloading = false
    const photos: Photo[] = [
        {
            id: '23',
            title: 'teste',
            imageId: 'portrait-tower.png',
            albums: [
                { id: '1', title: 'Album 1' },
                { id: '2', title: 'Album 2' },
                { id: '3', title: 'Album 3' }
            ],
        }
    ]
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Criar album</DialogHeader>

                <DialogBody className="flex flex-col gap-5">
                    <InpuText placeholder="Adicione o titulo" />

                    <div className="sapce-y-3">
                        <Text as="div" variant="label-small">
                            Fotos cadastradas
                        </Text>

                        {!isloading && photos.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {photos.map(photo => (<ImagePreview
                                    key={photo.id}
                                    src={`/images/${photo.imageId}`}
                                    title={photo.title}
                                    className="w-20 h-20 rounded"
                                />))}
                            </div>
                        )}
                        {isloading && (
                            <div className="flex flex-wrap gap-2">
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <Skeleton
                                        key={`photo-loading-${index}`}
                                        className="w-20 h-20 rounded" />
                                ))}
                            </div>
                        )}
                        {!isloading && photos.length === 0 && (
                            <div className="w-full flex flex-col justify-center items-center gap-3">
                                <SelectedCheckboxIllustration />
                                <Text variant="paragraph-medium" className="text-center">
                                    Nenhuma foto disponivel para selecao
                                </Text>
                            </div>)}
                    </div>
                </DialogBody>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancelar</Button>
                    </DialogClose>
                    <Button>Criar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}