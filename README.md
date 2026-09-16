# cypress-actions-pipeline

Projeto de testes E2E com Cypress, com execucao automatica agendada via GitHub Actions.

## Nomes

- Alisson Correa Lima
- Vitor Oliveira

## Sobre o projeto

Automacao que verifica diariamente se os componentes basicos de um formulario continuam
respondendo corretamente na pagina [Actions do Cypress Example](https://example.cypress.io/commands/actions):

- Preenchimento do campo de e-mail (`.action-email`) e validacao do valor digitado.
- Selecao de uma checkbox habilitada na secao de checkboxes e validacao do estado marcado.

## Como rodar localmente

```bash
npm ci
npm test
```

Para abrir a interface interativa do Cypress:

```bash
npm run cy:open
```

## Pipeline (GitHub Actions)

O workflow esta em `.github/workflows/scheduled-tests.yml` e pode ser executado de duas formas:

- **Manualmente**, pela aba Actions do repositorio (`workflow_dispatch`).
- **Automaticamente**, todos os dias as 21h no horario de Brasilia (`cron: '0 21 * * *'`,
  `timezone: 'America/Sao_Paulo'`).

Em caso de falha, screenshots e videos dos testes sao salvos como artefatos do workflow.
