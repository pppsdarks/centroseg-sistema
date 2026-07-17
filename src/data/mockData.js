export const dashboardData = {
  faturamento_mensal: '482.400',
  percentual_faturamento: '+12.2%',
  clientes_ativos: '1.847',
  percentual_clientes: '+3.1%',
  chamados_abertos: '14',
  percentual_chamados: '-8%',
  nps: '78',
  percentual_nps: '+2',
};

export const clientesData = [
  {
    razao_social: 'Condomínio Edifício Solar',
    cnpj: '12.345.678/0001-90',
    servico: 'Segurança 24h',
    status: 'Ativo',
    valor_mensal: 'R$ 4.500',
    renovacao: '12/10/2026',
  },
  {
    razao_social: 'Supermercados Rossi Ltda',
    cnpj: '98.765.432/0001-21',
    servico: 'Monitoramento Câmeras',
    status: 'Ativo',
    valor_mensal: 'R$ 3.200',
    renovacao: '05/11/2026',
  },
  {
    razao_social: 'Hospital São Lucas',
    cnpj: '45.678.901/0001-12',
    servico: 'Segurança e Escolta',
    status: 'Inativo',
    valor_mensal: 'R$ 12.800',
    renovacao: 'Expired',
  },
  {
    razao_social: 'Indústrias MetalMec',
    cnpj: '23.456.789/0001-34',
    servico: 'Alarme e Ronda',
    status: 'Ativo',
    valor_mensal: 'R$ 5.900',
    renovacao: '18/12/2026',
  },
  {
    razao_social: 'Colégio Anglo Curitiba',
    cnpj: '34.567.890/0001-56',
    servico: 'Monitoramento Câmeras',
    status: 'Ativo',
    valor_mensal: 'R$ 2.400',
    renovacao: '01/09/2026',
  },
];

export const clientesResumo = {
  contratos_ativos: '1.247',
  contratos_ativos_delta: '+24 este mês',
  valor_carteira: 'R$ 5.280.000 / ano',
  novos_clientes_ytd: '156',
  novos_clientes_delta: '+12.5%',
};

export const comercialData = {
  kpis: {
    taxa_conversao: '7.9%',
    taxa_conversao_delta: '+1.2pp',
    ticket_medio: 'R$ 4.280',
    ticket_medio_delta: '+8%',
    meta_mensal: 'R$ 580k',
    meta_progresso: 77,
    novos_leads: '156',
    novos_leads_delta: '-12%',
  },
  funil: [
    { etapa: 'LEADS', valor: 847 },
    { etapa: 'PROPOSTAS', valor: 312 },
    { etapa: 'EM NEGOCIAÇÃO', valor: 145 },
    { etapa: 'FECHAMENTO', valor: 67 },
  ],
  comparativoRegional: [
    { mes: 'Jan', curitiba: 62, pontaGrossa: 38 },
    { mes: 'Fev', curitiba: 74, pontaGrossa: 45 },
    { mes: 'Mar', curitiba: 58, pontaGrossa: 40 },
    { mes: 'Abr', curitiba: 90, pontaGrossa: 52 },
    { mes: 'Mai', curitiba: 96, pontaGrossa: 58 },
    { mes: 'Jun', curitiba: 104, pontaGrossa: 66 },
  ],
  ranking: [
    { pos: 1, nome: 'Gabriel Menezes', filial: 'Curitiba', fechamentos: 28, receita: 'R$ 119.840', taxa: '11.2%' },
    { pos: 2, nome: 'Patricia Alves', filial: 'Curitiba', fechamentos: 24, receita: 'R$ 102.720', taxa: '9.8%' },
    { pos: 3, nome: 'Bruno Costa', filial: 'Ponta Grossa', fechamentos: 19, receita: 'R$ 81.320', taxa: '8.4%' },
    { pos: 4, nome: 'Leticia Rossi', filial: 'Ponta Grossa', fechamentos: 16, receita: 'R$ 68.480', taxa: '7.9%' },
    { pos: 5, nome: 'Thiago Ramos', filial: 'Curitiba', fechamentos: 12, receita: 'R$ 51.360', taxa: '6.8%' },
  ],
};

export const contratosData = {
  kpis: {
    contratos_ativos: '1.247',
    contratos_ativos_delta: '+4.3%',
    vencendo_30_dias: '89',
    taxa_renovacao: '91.3%',
    taxa_renovacao_delta: '+2.1%',
    churn_mensal: '2.1%',
    churn_mensal_delta: '+0.4%',
  },
  distribuicaoPorTipo: [
    { tipo: 'Monitoramento', percentual: 45 },
    { tipo: 'CFTV', percentual: 30 },
    { tipo: 'Alarme', percentual: 15 },
    { tipo: 'Integrado', percentual: 10 },
  ],
  contratosAtivos: [
    { cliente: 'Supermercados Condor', contrato: 'CS-9844', servico: 'Monitoramento', valor: 'R$ 4.500', expiracao: '15/12/2026', status: 'Ativo' },
    { cliente: 'Indústria MetalLeve', contrato: 'CS-8812', servico: 'CFTV', valor: 'R$ 8.900', expiracao: '22/10/2025', status: 'Ativo' },
    { cliente: 'Condomínio Vista Alegre', contrato: 'CS-4511', servico: 'Alarme', valor: 'R$ 1.800', expiracao: '05/12/2023', status: 'Vencendo' },
    { cliente: 'Panificadora Bella', contrato: 'CS-3342', servico: 'Integrado', valor: 'R$ 2.400', expiracao: '10/11/2023', status: 'Vencendo' },
    { cliente: 'Clínica Médica Paraná', contrato: 'CS-7711', servico: 'Monitoramento', valor: 'R$ 3.100', expiracao: '14/01/2024', status: 'Ativo' },
    { cliente: 'Escola Maple Bear', contrato: 'CS-2190', servico: 'CFTV', valor: 'R$ 5.400', expiracao: '30/08/2023', status: 'Cancelado' },
  ],
  churnRisk: [
    { cliente: 'Mercado Alvorada', motivo: 'Faturamento mensal recorrente', risco: 84 },
    { cliente: 'Logística Pinheiro', motivo: 'Faturamento mensal recorrente', risco: 72 },
    { cliente: 'Cond. Jardins', motivo: 'Faturamento mensal recorrente', risco: 65 },
  ],
};

export const financeiroData = {
  kpis: {
    receita_mensal: 'R$ 482.400',
    receita_mensal_delta: '+8.2%',
    despesas_totais: 'R$ 148.900',
    despesas_totais_delta: '-3.1%',
    margem_lucro: '69.1%',
    margem_lucro_delta: '+1.5%',
    inadimplencia: '2.1%',
    inadimplencia_delta: '-0.4%',
  },
  faturamentoPorLinha: [
    { linha: 'Segurança Residencial', valor: 192, percentual: 40 },
    { linha: 'Monitoramento Comercial', valor: 144, percentual: 30 },
    { linha: 'Seguro Corporativo', valor: 96, percentual: 20 },
    { linha: 'Segurança Armada', valor: 50, percentual: 10 },
  ],
  faturasEmAtraso: [
    { cliente: 'Metais do Paraná S.A', valor: 'R$ 14.500', atraso: '15 dias', status: 'Notificado' },
    { cliente: 'Academia SportFit', valor: 'R$ 2.800', atraso: '8 dias', status: 'Cobrança' },
    { cliente: 'Restaurante Bom Paladar', valor: 'R$ 1.900', atraso: '4 dias', status: 'Notificado' },
  ],
};

export const operacionalData = {
  kpis: {
    chamados_ativos: '14',
    chamados_ativos_nota: '+2 urgentes',
    tempo_medio_resposta: '8min 12s',
    tempo_medio_resposta_delta: '-12%',
    sla_cumprido: '98.4%',
    sla_cumprido_delta: '+0.4%',
    utilizacao_equipe: '84%',
  },
  incidenciasPorDia: [
    { dia: 'Seg', valor: 8 },
    { dia: 'Ter', valor: 9 },
    { dia: 'Qua', valor: 7 },
    { dia: 'Qui', valor: 6 },
    { dia: 'Sex', valor: 11 },
    { dia: 'Sáb', valor: 12 },
    { dia: 'Dom', valor: 8 },
  ],
  alertasCriticos: [
    { local: 'Shopping Curitiba', descricao: 'Falha de comunicação de link', nivel: 'Alta', tempo: 'Há 4 mins' },
    { local: 'Condomínio Água Verde', descricao: 'Disparo de alarme - Zona 4', nivel: 'Média', tempo: 'Há 12 mins' },
    { local: 'Centro Distribuição Sul', descricao: 'Ronda preventiva iniciada', nivel: 'Informativo', tempo: 'Há 32 mins' },
  ],
};

export const relatoriosData = [
  {
    id: 'vendas',
    titulo: 'Relatório de Vendas',
    descricao: 'Performance comercial, metas, conversão e fechamento de novos negócios.',
    formatos: ['PDF', 'CSV', 'XLSX'],
  },
  {
    id: 'financeiro',
    titulo: 'Relatório Financeiro',
    descricao: 'Demonstrativo de receitas, despesas e fluxo de caixa mensal.',
    formatos: ['PDF', 'CSV', 'XLSX'],
  },
  {
    id: 'clientes',
    titulo: 'Relatório de Clientes',
    descricao: 'Análise da carteira, renovações, churn e satisfação.',
    formatos: ['PDF', 'CSV', 'XLSX'],
  },
  {
    id: 'operacional',
    titulo: 'Relatório Operacional',
    descricao: 'Chamados, SLA, tempo de resposta e incidências por região.',
    formatos: ['PDF', 'CSV', 'XLSX'],
  },
  {
    id: 'comissoes',
    titulo: 'Relatório de Comissões',
    descricao: 'Cálculo de comissionamento da equipe de vendas mensal.',
    formatos: ['PDF', 'CSV', 'XLSX'],
  },
  {
    id: 'executivo',
    titulo: 'Relatório Executivo',
    descricao: 'Visão consolidada para diretoria e stakeholders.',
    formatos: ['PDF', 'CSV', 'XLSX'],
  },
];

export const graficosData = {
  crescimentoReceita: [
    { mes: 'Jan', valor: 62 },
    { mes: 'Fev', valor: 74 },
    { mes: 'Mar', valor: 68 },
    { mes: 'Abr', valor: 88 },
    { mes: 'Mai', valor: 92 },
    { mes: 'Jun', valor: 100 },
  ],
  distribuicaoCategoria: [
    { categoria: 'Patrimonial', percentual: 66 },
    { categoria: 'Monitoramento', percentual: 17 },
    { categoria: 'Seguro Vida', percentual: 17 },
  ],
  atividadeRecente: [
    { texto: 'Contrato renovado: Condomínio Solar (Curitiba)', tipo: 'sucesso' },
    { texto: 'Alerta SLA: Resolução técnica em andamento', tipo: 'aviso' },
    { texto: 'Novo lead cadastrado: Supermercados Rossi', tipo: 'info' },
  ],
};

export const marketingData = {
  kpis: {
    sessoes: '38.240',
    sessoes_delta: '+9.4%',
    conversoes: '612',
    conversoes_delta: '+14.1%',
    investimento_total: 'R$ 22.480',
    investimento_delta: '+5.2%',
    cpl: 'R$ 36,70',
    cpl_delta: '-6.8%',
    roas: '4.8x',
    roas_delta: '+0.6',
    taxa_conversao: '1.6%',
    taxa_conversao_delta: '+0.2pp',
  },
  sessoesPorSemana: [
    { semana: 'S1', sessoes: 7800 },
    { semana: 'S2', sessoes: 8100 },
    { semana: 'S3', sessoes: 8900 },
    { semana: 'S4', sessoes: 8420 },
    { semana: 'S5', sessoes: 9600 },
  ],
  origemTrafego: [
    { canal: 'Meta Ads', percentual: 34 },
    { canal: 'Google Ads', percentual: 28 },
    { canal: 'Orgânico', percentual: 22 },
    { canal: 'Direto', percentual: 10 },
    { canal: 'Indicação', percentual: 6 },
  ],
  campanhas: [
    { nome: 'Segurança Patrimonial - Curitiba', plataforma: 'Meta Ads', investimento: 'R$ 6.200', cliques: 4180, conversoes: 142, cpl: 'R$ 43,66', status: 'Ativo' },
    { nome: 'Monitoramento CFTV - Busca', plataforma: 'Google Ads', investimento: 'R$ 5.400', cliques: 2960, conversoes: 118, cpl: 'R$ 45,76', status: 'Ativo' },
    { nome: 'Remarketing - Orçamento', plataforma: 'Meta Ads', investimento: 'R$ 3.100', cliques: 3320, conversoes: 165, cpl: 'R$ 18,79', status: 'Ativo' },
    { nome: 'Alarme Residencial - Display', plataforma: 'Google Ads', investimento: 'R$ 2.780', cliques: 1740, conversoes: 61, cpl: 'R$ 45,57', status: 'Pausado' },
    { nome: 'Condomínios - Leads', plataforma: 'Meta Ads', investimento: 'R$ 5.000', cliques: 3860, conversoes: 126, cpl: 'R$ 39,68', status: 'Ativo' },
  ],
  eventosGTM: [
    { evento: 'Clique no WhatsApp', contagem: '1.842', variacao: '+11%' },
    { evento: 'Envio Formulário de Orçamento', contagem: '612', variacao: '+14%' },
    { evento: 'Clique em Ligar', contagem: '389', variacao: '+4%' },
    { evento: 'Scroll 90% - Landing Page', contagem: '9.140', variacao: '+7%' },
  ],
  mapaClientes: [
    { nome: 'Condomínio Edifício Solar', cidade: 'Curitiba', lat: -25.4284, lng: -49.2733, status: 'Ativo' },
    { nome: 'Supermercados Rossi Ltda', cidade: 'Curitiba', lat: -25.4478, lng: -49.2731, status: 'Ativo' },
    { nome: 'Hospital São Lucas', cidade: 'Curitiba', lat: -25.4025, lng: -49.2648, status: 'Inativo' },
    { nome: 'Indústrias MetalMec', cidade: 'Ponta Grossa', lat: -25.0916, lng: -50.1668, status: 'Ativo' },
    { nome: 'Colégio Anglo Curitiba', cidade: 'Curitiba', lat: -25.4544, lng: -49.2921, status: 'Ativo' },
    { nome: 'Shopping Curitiba', cidade: 'Curitiba', lat: -25.4372, lng: -49.2695, status: 'Ativo' },
    { nome: 'Centro Distribuição Sul', cidade: 'Ponta Grossa', lat: -25.1046, lng: -50.1592, status: 'Ativo' },
    { nome: 'Mercado Alvorada', cidade: 'Ponta Grossa', lat: -25.0805, lng: -50.1435, status: 'Risco' },
  ],
};

export const currentUser = {
  nome: 'Roberto Silva',
  cargo: 'Diretor Regional',
};

export const unidades = ['Curitiba', 'Ponta Grossa', 'Consolidado'];
