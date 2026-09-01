import{z} from "zod";

export const photoNewFromSchema = z.object({
    title: z.string().min(1,{message:"Campo obrigatorio"}).max(255),
    file: z.instanceof(FileList).refine((file) => file.length > 0,{
        message: "Campo obrigatorio",
    }),
        AlbunsIds: z.array(z.string().uuid()).optional()
})

export type PhotoNewFromSchema = z.infer<typeof photoNewFromSchema>