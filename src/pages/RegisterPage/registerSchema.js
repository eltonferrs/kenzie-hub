import { z } from "zod"
/*
export const exampleSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string()
    .min(1, "O e-mail é obrigatório")
    .email("O e-mail deve estar no formato correto"),
  password: z.string()
    .min(8, { message: "A senha é obrigatória e precisa de mínimo 8 caracteres"})
    .regex(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número"),
  confirm: z.string().min(1, "A confirmação de senha é obrigatória")
}).refine(({password, confirm}) => password === confirm, {
  message: "As senhas precisam corresponderem",
  path: ["confirm"],
})*//*/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'A senha deve conter pelo menos uma letra, um número e um caractere especial' */
export const registerSchema= z.object({
    email: z.string().nonempty("O e-mail é obrigatório").email("Insira e-mail válido"),
    name: z.string().nonempty("O nome é obrigatório").min(2,"Insira um nome válido"),
    bio: z.string().nonempty("Campo Obrigatório").min(9,"Escreva em poucas palavras sobre você"),
    contact: z.string().nonempty("Contato é obrigatório").min(9),
    course_module: z.string().nonempty("selecione módulo"),
    password: z.string().nonempty("Insira uma senha").min(8,"É nescessário conter pelo menos 8 caracters")
    .regex(/(?=.*[A-Za-z])/, "A senha deve conter pelo menos uma letra")
    .regex(/(?=.*\d)/,"A senha deve conter pelo menos um número")
    .regex(/(?=.*[@$!%*#?&])/,"A senha deve conter pelo um caractere especial Ex: @, $, !, %, *, #, ? ou &."), //,  e "),
    confirm: z.string().min(8,"É nescessário conter pelo menos 8 caracters")
}).refine(({password,confirm})=> password === confirm,{
  message: "As senhas precisam ser iguais", path: ["confirm"]})