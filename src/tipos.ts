
//ELE DEFINE O TIPO DE TAREFAS 

export type Prioridade = "curto_prazo" | "medio prazo" | "longo prazo";
export type Status = "aberto" | "lotado" | "encerrado";

export interface Tarefa {
    readonly id: number;
    titulo: string;
    descricao?: string;
    prioridade: Prioridade;
    status: Status;
    tags: string[];
    criadaEm: Date;
}

// O que o usuário informa ao cadastrar:
// id, status e criadaEm são responsabilidade do sistema
export type NovaTarefa = Omit<Tarefa, "id" | "status" | "criadaEm">;