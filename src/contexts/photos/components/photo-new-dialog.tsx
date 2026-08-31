import type React from "react";
import { Dialog, DialogBody, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "../../../components/dialog";
import Button from "../../../components/button";
import InpuText from "../../../components/input-text";
import Alert from "../../../components/alert";
import InputSingleFile from "../../../components/input-single-file";
import ImagePreview from "../../../components/imagepreview";
import Text from "../../../components/text";
import type { Album } from "../../albums/models/album";
import Skeleton from "../../../components/skeleton";
import { useForm } from "react-hook-form";
import useAlbums from "../../albums/hooks/use-albuns";

interface PhotoNewDialogProps {
    trigger: React.ReactNode;
}


export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
    const {albums, isloadingAlbums} = useAlbums();
    const form = useForm()

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>Adicionar foto</DialogHeader>

                <DialogBody>
                    <InpuText placeholder="Adicione um titulo" maxLength={255} />

                    <Alert>
                        Tamanho maximo 50MB
                        <br />
                        Voce pode selecionar arquivo em png, jpg ou jpeg
                    </Alert>

                    <InputSingleFile form={form} allowedExtentions={['png', 'jpg']} maxFileSizeInMb={50} replaceBy={<ImagePreview className="w-full h-56" />} />

                    <div className="space-y-3">
                        <div className="flex flex-wrap gap-3">
                            <Text variant="label-small">Selecionar album</Text>
                            {!isloadingAlbums && albums.length > 0 && albums.map(album =>
                                <Button key={album.id} variant="ghost" size="sm" className="truncate"> {album.title}</Button>
                            )}
                            {isloadingAlbums && Array.from({ length: 5 }).map((_, index) =>
                                <Skeleton key={index} className="w-20 h-7" />
                            )}
                        </div>
                    </div>

                </DialogBody>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="secondary">Cancelar</Button>
                    </DialogClose>
                    <Button>Adicionar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

