# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This repository is currently empty of source code. It contains only editor configuration (`.vscode/settings.json`). There is no build system, package manifest, source tree, or test suite to document yet.

When code is added to this project, update this file with:
- Build, lint, and test commands (including how to run a single test)
- The high-level architecture and structure of the codebase
# 🛡️ CentroSeg - Sistema de Gestão Integrada de Segurança Patrimonial

**Status:** Protótipo Funcional  
**Versão:** 1.0  
**Última Atualização:** 2026

---

## 📋 Sumário Executivo

**CentroSeg** é um sistema integrado de gestão de segurança patrimonial que fornece monitoramento avançado, telemetria em tempo real e controle operacional completo das unidades regionais em uma única plataforma blindada.

### Principais Características:
- 🎯 **Monitoramento 24/7** com SLA de 99.9% de conectividade
- 📊 **Painel Executivo** com KPIs em tempo real
- 💰 **Gestão Financeira** com faturamento por linha de negócio
- 📈 **Central de Vendas** com funil de conversão
- 👥 **Gestão de Clientes** com 1.247 contratos ativos
- ⚠️ **Alertas Críticos** e monitoramento de SLA

---

## 🏗️ Estrutura de Módulos

### 1. **Login** 📱
**Arquivo:** `Login.jsx`  
**URL Figma:** https://www.figma.com/design/b82WvxnZEZ0c86L6U9Xnf1/Sem-t%C3%ADtulo?node-id=23-4&m=dev

**Funcionalidades:**
- Autenticação corporativa
- Seleção de unidade operacional (Curitiba/Ponta Grossa)
- Validação de credenciais
- Recuperação de senha
- Protocolo AES-256 Ativo

**Estados:**
- Input email vazio
- Input senha vazio
- Carregando autenticação
- Autenticado
- Erro de credenciais

---

### 2. **Visão Geral (Dashboard Principal)** 📊
**Arquivo:** `Dashboard.jsx`  
**URL Figma:** https://www.figma.com/design/b82WvxnZEZ0c86L6U9Xnf1/Sem-t%C3%ADtulo?node-id=5-5&m=dev

**Componentes:**
```
┌─ Header (Usuário + Notificações)
├─ KPIs Cards
│  ├ Faturamento Mensal: R$ 482.400 (+12.2%)
│  ├ Clientes Ativos: 1.847 (+3.1%)
│  ├ Chamados em Aberto: 14 (-8%)
│  └ NPS Operacional: 78 (+2)
├─ Gráfico Crescimento de Receita (Jan-Jun)
├─ Gráfico Distribuição por Categoria
│  ├ Patrimonial (66%)
│  ├ Monitoramento (17%)
│  └ Seguro Vida (17%)
└─ Atividade Recente (últimos eventos)
```

**Dados Estáticos:**
```json
{
  "faturamento_mensal": "482.400",
  "percentual_faturamento": "+12.2%",
  "clientes_ativos": "1.847",
  "percentual_clientes": "+3.1%",
  "chamados_abertos": "14",
  "percentual_chamados": "-8%",
  "nps": "78",
  "percentual_nps": "+2"
}
```

---

### 3. **Clientes e Contratos** 👥
**Arquivo:** `ClientesContratos.jsx`  
**URL Figma:** https://www.figma.com/design/b82WvxnZEZ0c86L6U9Xnf1/Sem-t%C3%ADtulo?node-id=5-211&m=dev

**Componentes:**
```
┌─ Filtros & Busca
│  └ Buscar por: cliente, CNPJ, contrato
├─ Cards de Resumo
│  ├ Contratos Ativos: 1.247 (+24 este mês)
│  ├ Valor Total Carteira: R$ 5.280.000/ano
│  ├ Novos Clientes YTD: 156 (+12.5%)
├─ Tabela de Clientes
│  ├ Razão Social
│  ├ CNPJ
│  ├ Serviço Contratado
│  ├ Status (Ativo/Inativo/Vencido)
│  ├ Valor Mensal
│  └ Data de Renovação
└─ Ações: Adicionar Cliente | Exportar CSV
```

**Dados de Exemplo:**
```json
[
  {
    "razao_social": "Condomínio Edifício Solar",
    "cnpj": "12.345.678/0001-90",
    "servico": "Segurança 24h",
    "status": "Ativo",
    "valor_mensal": "R$ 4.500",
    "renovacao": "12/10/2026"
  }
]
```

---

### 4. **Comercial - Funil de Vendas** 💼
**Arquivo:** `Comercial.jsx`  
**URL Figma:** https://www.figma.com/design/b82WvxnZEZ0c86L6U9Xnf1/Sem-t%C3%ADtulo?node-id=10-8&m=dev

**Componentes:**
```
┌─ KPIs de Performance
│  ├ Taxa de Conversão: 7.9% (↑1.2pp)
│  ├ Ticket Médio: R$ 4.280 (↑8%)
│  ├ Meta Mensal: R$ 580k (77% concluída)
│  └ Novos Leads Mês: 156 (↓12%)
├─ Funil de Vendas (Visualização em Cascata)
│  ├ LEADS: 847
│  ├ PROPOSTAS: 312
│  ├ EM NEGOCIAÇÃO: 145
│  └ FECHAMENTO: 67
├─ Gráfico Comparativo (Curitiba vs Ponta Grossa)
└─ Ranking de Vendedores
   ├ 1º Gabriel Menezes (R$ 119.840 | 11.2%)
   ├ 2º Patricia Alves (R$ 102.720 | 9.8%)
   └ ...
```

---

### 5. **Contratos e Clientes (Detalhado)** 📋
**Arquivo:** `ContratosDetalhado.jsx`  
**URL Figma:** https://www.figma.com/design/b82WvxnZEZ0c86L6U9Xnf1/Sem-t%C3%ADtulo?node-id=10-154&m=dev

**Componentes:**
```
┌─ Cards de Resumo
│  ├ Contratos Ativos: 1.247 (+4.3%)
│  ├ Vencendo em 30 dias: 89 ⚠️ (Necessita renovação urgente)
│  ├ Taxa de Renovação: 91.3% (↑2.1%)
│  └ Churn Mensal: 2.1% (↑0.4%)
├─ Gráfico Distribuição por Tipo
│  ├ Monitoramento (45%)
│  ├ CFTV (30%)
│  ├ Alarme (15%)
│  └ Integrado (10%)
├─ Tabela Contratos Ativos
└─ Alerta de Churn Risk
   ├ Mercado Alvorada (84% Risco)
   ├ Logística Pinheiro (72% Risco)
   └ Cond. Jardins (65% Risco)
```

---

### 6. **Financeiro** 💰
**Arquivo:** `Financeiro.jsx`  
**URL Figma:** https://www.figma.com/design/b82WvxnZEZ0c86L6U9Xnf1/Sem-t%C3%ADtulo?node-id=10-297&m=dev

**Componentes:**
```
┌─ KPIs Financeiros
│  ├ Receita Mensal: R$ 482.400 (+8.2%)
│  ├ Despesas Totais: R$ 148.900 (-3.1%)
│  ├ Margem de Lucro: 69.1% (↑1.5%)
│  └ Inadimplência: 2.1% (↓0.4%)
├─ Faturamento por Linha de Negócio
│  ├ Segurança Residencial: R$ 192k (40%)
│  ├ Monitoramento Comercial: R$ 144k (30%)
│  ├ Seguro Corporativo: R$ 96k (20%)
│  └ Segurança Armada: R$ 50k (10%)
└─ Faturas em Atraso (Crítico)
   ├ Metais do Paraná S.A - R$ 14.500 (Notificado)
   ├ Academia SportFit - R$ 2.800 (Cobrança)
   └ Restaurante Bom Paladar - R$ 1.900 (Notificado)
```

---

### 7. **Operacional** ⚙️
**Arquivo:** `Operacional.jsx`  
**URL Figma:** https://www.figma.com/design/b82WvxnZEZ0c86L6U9Xnf1/Sem-t%C3%ADtulo?node-id=10-434&m=dev

**Componentes:**
```
┌─ KPIs Operacionais
│  ├ Chamados Ativos: 14 (+2 urgentes)
│  ├ Tempo Médio Resposta: 8min 12s (↓12%)
│  ├ SLA Cumprido (Mês): 98.4% (↑0.4%)
│  └ Utilização de Equipe: 84%
├─ Gráfico Incidências por Dia da Semana
│  └ Seg(8) | Ter(9) | Qua(7) | Qui(6) | Sex(11) | Sab(12) | Dom(8)
└─ Alertas Críticos Ativos
   ├ 🔴 Shopping Curitiba - Falha de comunicação de link
   ├ 🟡 Condomínio Água Verde - Disparo de alarme - Zona 4
   └ 🟢 Centro Distribuição Sul - Ronda preventiva iniciada
```

---

### 8. **Relatórios** 📑
**Arquivo:** `Relatorios.jsx`  
**URL Figma:** https://www.figma.com/design/b82WvxnZEZ0c86L6U9Xnf1/Sem-t%C3%ADtulo?node-id=10-579&m=dev

**Componentes:**
```
┌─ Filtros
│  ├ Período: Últimos 30 dias
│  └ Formato: PDF, CSV, XLSX
├─ Cards de Relatórios Disponíveis
│  ├ Relatório de Vendas
│  │  ├ Performance comercial, metas, conversão
│  │  └ Formatos: PDF, CSV, XLSX
│  ├ Relatório Financeiro
│  │  ├ Receitas, despesas, fluxo de caixa
│  │  └ Formatos: PDF, CSV, XLSX
│  ├ Relatório de Clientes
│  │  ├ Análise de carteira, renovações, churn
│  │  └ Formatos: PDF, CSV, XLSX
│  ├ Relatório Operacional
│  │  ├ Chamados, SLA, incidências por região
│  │  └ Formatos: PDF, CSV, XLSX
│  ├ Relatório de Comissões
│  │  ├ Cálculo de comissionamento mensal
│  │  └ Formatos: PDF, CSV, XLSX
│  └ Relatório Executivo
│     ├ Visão consolidada para diretoria
│     └ Formatos: PDF, CSV, XLSX
└─ Botão: Configurar Agendamentos (para envio automático)
```

---

## 🎨 Design System

### Cores
```
Verde Primário:    #22C55E (ativo, sucesso)
Verde Escuro:      #16A34A (hover)
Vermelho Alerta:   #EF4444 (erro, crítico)
Amarelo Aviso:     #FBBF24 (atenção)
Fundo:             #0F172A (very dark blue)
Texto:             #FFFFFF (white)
Cinza Secundário:  #6B7280 (texto dimmed)
```

### Tipografia
```
Títulos: Inter Bold 24-32px
Subtítulos: Inter SemiBold 16-20px
Corpo: Inter Regular 14-16px
Labels: Inter Medium 12-13px
```

### Componentes Padrão
- **Cards Métrica:** Fundo escuro, borda sutil, ícone + valor + percentual
- **Tabelas:** Header sticky, alternância de cores, ações hover
- **Gráficos:** Charts.js ou Recharts com tema dark
- **Alertas:** Toast com ícone, título, mensagem, ação
- **Botões:** Verde primário, estados disabled/hover/active

---

## 📁 Estrutura de Diretórios Recomendada

```
centroseg-sistema/
├── README.md                      # Instruções iniciais
├── claude.md                       # Este arquivo
│
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Layout.jsx
│   │   ├── common/
│   │   │   ├── Card.jsx
│   │   │   ├── MetricCard.jsx
│   │   │   ├── Chart.jsx
│   │   │   └── Table.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ClientesContratos.jsx
│   │   │   ├── Comercial.jsx
│   │   │   ├── ContratosDetalhado.jsx
│   │   │   ├── Financeiro.jsx
│   │   │   ├── Operacional.jsx
│   │   │   └── Relatorios.jsx
│   │
│   ├── data/
│   │   ├── mockData.js            # Dados estáticos para prototipagem
│   │   └── charts.js              # Dados de gráficos
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── theme.css
│   │
│   └── App.jsx                    # Componente raiz
│
└── package.json
```

---

## 🚀 Próximos Passos de Desenvolvimento

### Fase 1: Prototipagem (Atual)
- [x] Design de telas no Figma
- [ ] Implementar componentes básicos
- [ ] Conectar navegação entre páginas
- [ ] Mock data para todos os módulos

### Fase 2: Backend
- [ ] API REST / GraphQL
- [ ] Autenticação JWT
- [ ] Banco de dados (PostgreSQL)
- [ ] Integração de dados em tempo real

### Fase 3: Features Avançadas
- [ ] WebSockets para alertas em tempo real
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Agendamento automático de relatórios
- [ ] Dashboard customizável por usuário
- [ ] API de integração para partners

---

## 📞 Informações de Contato

**Central de Monitoramento 24H**  
📞 (41) 3321-4500  
📧 suporte@centroseg.com.br

**Protocolo de Conexão:** AES-256 Ativo  
**Status de Conectividade:** 100% Online  

---

## 📄 Notas Adicionais

- Sistema desenvolvido em **React** com componentes funcionais
- Design segue padrão **Dark Mode** para redução de fadiga ocular
- Integração com **Figma** via links de design diretos
- Dados de prototipagem armazenados em arquivo `mockData.js`
- Escalabilidade preparada para multi-regiões

---

**Última atualização:** 17 de Julho de 2026  
**Versão:** 1.0 - Protótipo Funcional