export default function SeoArticleSection({bankSlug, bankName}:{bankSlug:string, bankName:string}){
  return (
    <section className="container mx-auto max-w-5xl px-6 py-12 prose">
      <h2>Articol: Tot ce trebuie să știi despre creditele la {bankName}</h2>
      <p>Secțiune SEO dedicată cu copy specific bancii. Folosește această zonă pentru a adăuga conținut unic, review-uri, avantaje detaliate și linkuri interne. (Placeholder)</p>
      <p>Unde să lipești copy: /data/.openclaw/workspace/projects/lend-ro-nextjs/src/data/bank-seo-copy.json (mapat după slug, fallback generic)</p>
      <div className="mt-6">
        <a href="/resurse/ghid-complet" className="btn-outline">Citește ghidul complet</a>
      </div>
    </section>
  )
}
