import StructuredData from '@/components/StructuredData';
import fs from 'fs';
import path from 'path';
const content = fs.readFileSync(path.join(process.cwd(),'src','app','resurse','ghid-complet','content.md'),'utf8');

export default function GhidComplet() {
  return (
    <main className="prose mx-auto py-16">
      <h1>Ghid complet — Credite & Finanțare</h1>
      <p>Acesta este un hub central care leagă ghidul principal, instrumentele și articolele importante. (Copy placeholder — înlocuiți cu textul final.)</p>
      <section>
        <article className="prose" dangerouslySetInnerHTML={{__html: content.split('\n').join('<br/>') }} />
      </section>
      <StructuredData type="breadcrumb" data={{items:[{name:'Resurse',url:'https://lend.ro/resurse'},{name:'Ghid complet',url:'https://lend.ro/resurse/ghid-complet'}]}}/>
      <aside className="mt-8">
        <a href="/contact" className="btn-primary">Contactează un specialist</a>
      </aside>
    </main>
  )
}
