import React from "react";
import { Dialog, DialogBody, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../../components/dialog";
import Button from "../../../components/button";
import InpuText from "../../../components/input-text";
import Alert from "../../../components/alert";
import InputSingleFile from "../../../components/input-single-file";
import ImagePreview from "../../../components/imagepreview";
import Text from "../../../components/text";
import Skeleton from "../../../components/skeleton";
import { useForm } from "react-hook-form";
import useAlbums from "../../albums/hooks/use-albuns";
import { photoNewFromSchema, type PhotoNewFromSchema } from "../schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import usePhoto from "../hooks/use-photo";

interface PhotoNewDialogProps {
    trigger: React.ReactNode;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
    const { albums, isloadingAlbums } = useAlbums();
    const [modalOpen, setModalOpen] = React.useState(false)
    const form = useForm<PhotoNewFromSchema>({resolver: zodResolver(photoNewFromSchema)});
    const [isCreatingPhoto, setIsCreatingPhoto] = React.useTransition()
    const albumsIds = form.watch("AlbunsIds")
    const file = form.watch("file");
    const fileSource = file?.[0] ? URL.createObjectURL(file[0]) : undefined;
    const {createPhoto} = usePhoto()

    React.useEffect(() => {
        if (!modalOpen) {
            form.reset()
        }
    }, [modalOpen, form])

    function handleToggleAlbum(albumId: string) {
        const albumsIds = form.getValues("AlbunsIds") || []
        const albumsSet = new Set(albumsIds)

        if (albumsSet.has(albumId)) {
            albumsSet.delete(albumId)
        } else {
            albumsSet.add(albumId)
        }
        form.setValue("AlbunsIds", Array.from(albumsSet))
    }

    function handleSubmit(payload: PhotoNewFromSchema) {
        setIsCreatingPhoto(async () =>{
            await createPhoto(payload)
            setModalOpen(false)
        })
    }

    return (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <DialogHeader>Adicionar foto</DialogHeader>

                    <DialogBody>
                        <InpuText placeholder="Adicione um titulo"
                            maxLength={255}
                            error={form.formState.errors.title?.message}
                            {...form.register("title")}
                        />

                        <Alert>
                            Tamanho maximo 50MB
                            <br />
                            Voce pode selecionar arquivo em png, jpg ou jpeg
                        </Alert>

                        <InputSingleFile
                            form={form}
                            allowedExtentions={['png', 'jpg']}
                            maxFileSizeInMb={50}
                            replaceBy={<ImagePreview src={fileSource} className="w-full h-56" />}
                            error={form.formState.errors.file?.message}
                            {...form.register("file")} />

                        <div className="space-y-3">
                            <div className="flex flex-wrap gap-3">
                                <Text variant="label-small">Selecionar album</Text>
                                {!isloadingAlbums && albums.length > 0 && albums.map(album =>
                                    <Button key={album.id}
                                        variant={albumsIds?.includes(album.id) ? "primary" : "ghost"}
                                        size="sm"
                                        className="truncate"
                                        onClick={() => handleToggleAlbum(album.id)}> {album.title}</Button>
                                )}
                                {isloadingAlbums && Array.from({ length: 5 }).map((_, index) =>
                                    <Skeleton key={index} className="w-20 h-7" />
                                )}
                            </div>
                        </div>

                    </DialogBody>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button disabled={isCreatingPhoto} variant="secondary">Cancelar</Button>
                        </DialogClose>
                        <Button disabled={isCreatingPhoto} handling={isCreatingPhoto} type="submit">{isCreatingPhoto ? "Adicionando..." : "adicionado"}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    )
}

