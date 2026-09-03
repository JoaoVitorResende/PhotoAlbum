import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api, fetcher } from "../../../helpers/api";
import type { Photo } from "../models/photo";
import type { PhotoNewFromSchema } from "../schemas";
import {toast} from 'sonner';
import usePhotoAlbums from "./use-photo-albums";
import { useNavigate } from "react-router";

interface PhotoDetailsResponse extends Photo {
  nextPhotoId?: string;
  previousPhotoId?: string;
}

export default function usePhoto(id?: string) {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery<PhotoDetailsResponse>({
    queryKey: ["photo", id],
    queryFn: () => fetcher(`/photos/${id}`),
    enabled: !!id,
  });
  const {managePhotoOnAlbum} = usePhotoAlbums();

  const queryClient = useQueryClient();

  async function createPhoto(payload: PhotoNewFromSchema) {
    try {
      const { data: photo } = await api.post<Photo>("/photos", {
        title: payload.title,
      });
      await api.post(
        `/photos/${photo.id}/image`,
        { file: payload.file[0] },
        { headers: { "content-Type": "multipart/form-data" } },
      );

      if (payload.AlbunsIds && payload.AlbunsIds.length > 0) {
        await managePhotoOnAlbum(photo.id, payload.AlbunsIds)
      }
      queryClient.invalidateQueries({ queryKey: ["photos"] });
      toast.success("Foto criada com sucesso")
    } catch (error) {
      toast.error("erro ao criar foto")
      throw error;
    }
  }

  async function deletePhoto(photoId: string) {
  try {
    await api.delete(`/photos/${photoId}`)
    toast.success("foto deletada com sucesso")
    navigate('/')
  } catch (error) {
    toast.error("erro ao deletar a foto")
    throw error
  }
}
  return {
    photo: data,
    nextPhotoId: data?.nextPhotoId,
    previousPhotoId: data?.previousPhotoId,
    isLoadingPhoto: isLoading,
    createPhoto,
    deletePhoto,
  };
}
