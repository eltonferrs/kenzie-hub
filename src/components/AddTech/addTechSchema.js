import { z } from "zod"

export const AddTechSchema= z.object({
    title: z.string().nonempty("Nome da tecnologia é obrigatório."),
    status: z.string().nonempty("Status é obrigatório.")
})