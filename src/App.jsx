import { useState } from 'react';
import {
  Sun, Zap, TrendingUp, Leaf, BatteryCharging, Activity,
  CalendarDays, ChevronDown, CircleHelp, LayoutDashboard,
  ChartNoAxesCombined, Settings, Bell, ArrowUpRight, Info
} from 'lucide-react';

const periods = ['Hoje', '7 dias', '30 dias'];

function Metric({ icon: Icon, label, value, unit, change, tone='blue' }) {
  return <article className="metric-card">
    <div className={`metric-icon ${tone}`}><Icon size={21}/></div>
    <p className="metric-label">{label}</p>
    <div className="metric-value">{value}<small>{unit}</small></div>
    <span className="metric-change"><TrendingUp size={14}/> {change}</span>
  </article>;
}

export default function App() {
  const [period, setPeriod] = useState('Hoje');
  const [tab, setTab] = useState('Visão geral');
  const [notice, setNotice] = useState(false);

  const data = {
    'Hoje': { production:'18,6', efficiency:'94,2', saved:'R$ 14,80', co2:'8,1', bars:[35,52,44,68,82,75,93,66,86,100,78,55] },
    '7 dias': { production:'126,4', efficiency:'92,8', saved:'R$ 103,60', co2:'55,2', bars:[48,62,58,74,82,69,91,78,96,88,72,100] },
    '30 dias': { production:'542,8', efficiency:'93,5', saved:'R$ 438,20', co2:'236,7', bars:[55,64,72,61,80,76,89,68,95,82,91,100] }
  }[period];

  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark"><Sun size={25}/><Zap size={15}/></div>
        <div><strong>Solar<span>Track</span></strong><small>ENERGIA INTELIGENTE</small></div>
      </div>
      <div className="side-label">MENU PRINCIPAL</div>
      {[
        [LayoutDashboard,'Visão geral'],
        [ChartNoAxesCombined,'Relatórios'],
        [BatteryCharging,'Sistema'],
        [Settings,'Configurações']
      ].map(([Icon,name])=><button key={name} className={`nav-item ${tab===name?'active':''}`} onClick={()=>setTab(name)}>
        <Icon size={19}/>{name}
      </button>)}
      <div className="sidebar-bottom">
        <div className="help-card"><CircleHelp size={20}/><b>Precisa de ajuda?</b><p>Acompanhe seus dados de energia com facilidade.</p></div>
        <div className="student-tag">PROJETO ACADÊMICO <b>ALUNO #24</b></div>
      </div>
    </aside>

    <main className="main-content">
      <header className="topbar">
        <div className="mobile-brand"><Sun size={22}/> Solar<span>Track</span></div>
        <div className="breadcrumb">Painel <span>/</span> {tab}</div>
        <button className="icon-button" aria-label="Notificações" onClick={()=>setNotice(!notice)}><Bell size={19}/><i/></button>
        {notice && <div className="notice-pop"><b>Tudo em dia!</b><p>Seu painel está atualizado com dados demonstrativos.</p></div>}
        <div className="avatar">24</div>
      </header>

      <section className="welcome">
        <div>
          <div className="eyebrow"><span className="live-dot"/> MONITORAMENTO ENERGÉTICO</div>
          <h1>{tab === 'Visão geral' ? 'Visão geral' : tab}</h1>
          <p>Acompanhe a produção e a eficiência do seu sistema solar.</p>
        </div>
        <div className="period-select"><CalendarDays size={17}/><select value={period} onChange={e=>setPeriod(e.target.value)} aria-label="Período">
          {periods.map(p=><option key={p}>{p}</option>)}
        </select><ChevronDown size={15}/></div>
      </section>

      {tab === 'Visão geral' ? <>
        <div className="status-banner"><div className="status-symbol"><Sun size={23}/></div><div><b>Sistema operando normalmente</b><p>Seu sistema está produzindo energia dentro do esperado.</p></div><span className="status-pill">● ONLINE</span></div>

        <section className="metrics-grid">
          <Metric icon={Zap} label="Energia produzida" value={data.production} unit=" kWh" change="+12,4% vs. período anterior" tone="yellow"/>
          <Metric icon={Activity} label="Eficiência do sistema" value={data.efficiency} unit="%" change="Desempenho muito bom" tone="green"/>
          <Metric icon={TrendingUp} label="Economia estimada" value={data.saved} unit="" change="Economia acumulada" tone="blue"/>
          <Metric icon={Leaf} label="CO₂ evitado" value={data.co2} unit=" kg" change="Impacto ambiental positivo" tone="mint"/>
        </section>

        <section className="content-grid">
          <article className="panel production-panel">
            <div className="panel-heading"><div><h2>Produção de energia</h2><p>Geração solar ao longo do período</p></div><span className="unit-label">kWh</span></div>
            <div className="chart">
              <div className="y-labels"><span>20</span><span>15</span><span>10</span><span>5</span><span>0</span></div>
              <div className="chart-area">
                <div className="grid-lines"><i/><i/><i/><i/><i/></div>
                <div className="bars">{data.bars.map((v,i)=><div className="bar-wrap" key={i}><div className="bar" style={{height:`${v}%`}}/></div>)}</div>
                <div className="x-labels"><span>06h</span><span>08h</span><span>10h</span><span>12h</span><span>14h</span><span>16h</span><span>18h</span></div>
              </div>
            </div>
            <div className="chart-foot"><span><i className="legend-dot"/> Energia gerada</span><small>Dados ilustrativos para demonstração</small></div>
          </article>

          <article className="panel system-panel">
            <div className="panel-heading"><div><h2>Resumo do sistema</h2><p>Informações do equipamento</p></div><div className="system-icon"><BatteryCharging size={20}/></div></div>
            <div className="system-illustration"><div className="sun-disc"><Sun size={43}/></div><div className="panel-art"><span/><span/><span/><span/><span/><span/></div></div>
            <div className="system-row"><span>Estado</span><b className="good">● Funcionando</b></div>
            <div className="system-row"><span>Potência instalada</span><b>5,4 kWp</b></div>
            <div className="system-row"><span>Inversor</span><b>5 kW</b></div>
            <div className="system-row"><span>Última atualização</span><b>Agora</b></div>
          </article>
        </section>

        <section className="bottom-grid">
          <article className="mini-panel"><div className="mini-icon"><Sun size={19}/></div><div><b>Energia limpa</b><p>Transformando luz solar em um futuro mais sustentável.</p></div></article>
          <article className="mini-panel"><div className="mini-icon green-bg"><Leaf size={19}/></div><div><b>Menor impacto ambiental</b><p>Acompanhe sua contribuição para o meio ambiente.</p></div></article>
          <article className="mini-panel"><div className="mini-icon blue-bg"><TrendingUp size={19}/></div><div><b>Decisões inteligentes</b><p>Use indicadores para entender o desempenho do sistema.</p></div></article>
        </section>
      </> : <section className="panel placeholder-panel"><div className="placeholder-icon"><Info size={30}/></div><h2>{tab}</h2><p>Esta área faz parte da demonstração visual do SolarTrack. O painel principal apresenta indicadores simulados de produção e eficiência solar.</p><button className="back-button" onClick={()=>setTab('Visão geral')}>Voltar para visão geral <ArrowUpRight size={16}/></button></section>}

      <footer>SolarTrack <span>•</span> Projeto acadêmico PPDM2 <span>•</span> Aluno #24 <span>•</span> Valores demonstrativos</footer>
    </main>
  </div>;
}