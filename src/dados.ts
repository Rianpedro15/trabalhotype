
// TABBELA DOS BANCO DE DADOS, CRIA AS PRIMEIRAS TAREFAS DO SITE


import type { Tarefa } from "./tipos";

export const tarefas: Tarefa[] = [
    { 
        id: 1, 
        titulo: "evento 1", 
        prioridade: "longo prazo", 
        status: "aberto",
        tags: ["estudo", "ts"], 
        criadaEm: new Date() 
    },
    { 
        id: 2, 
        titulo: "Comprar café", 
        prioridade: "curto_prazo", 
        status: "encerrado",
        tags: ["casa"], 
        criadaEm: new Date() 
    },
    { 
        id: 3, 
        titulo: "Revisar pull request", 
        descricao: "PR #42", 
        prioridade: "longo prazo",
        status: "lotado", 
        tags: ["trabalho"], 
        criadaEm: new Date() 
    },
    { 
        id: 4, 
        titulo: "Praticar laços", 
        prioridade: "medio prazo", 
        status: "aberto",
        tags: ["estudo", "ts"], 
        criadaEm: new Date() 
    },
    { 
        id: 5, 
        titulo: "Agendar dentista", 
        prioridade: "medio prazo", 
        status: "aberto",
        tags: ["saude"], 
        criadaEm: new Date() 
    },
    { 
        id: 6, 
        titulo: "Organizar a mesa", 
        prioridade: "curto_prazo", 
        status: "aberto",
        tags: ["casa"], 
        criadaEm: new Date() 
    },
];