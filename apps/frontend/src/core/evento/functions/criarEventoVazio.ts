import { Id } from "@/src/core/shared";
import Evento from "../models/Evento";

export default function criarEventoVazio(): Partial<Evento> {
  return {
    id: Id.novo(),
    nome: "",
    descricao: "",
    data: new Date(),
    local: "",
    publicoEsperado: 1,
    imagem: "",
    imagemBackground: "",
  };
}
