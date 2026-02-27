export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Întrebări frecvente (FAQ)</h1>
        <p className="text-gray-600 mb-6">Răspunsuri la cele mai frecvente întrebări despre credite ipotecare, calculatoare și serviciile noastre.</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Pot aplica pentru credit cu venit minim?</h2>
            <p className="text-gray-600">Depinde de bancă și de raportul rată/venit. Verifică criteriile din calculatorul nostru sau contactează-ne pentru asistență.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Ce documente sunt necesare?</h2>
            <p className="text-gray-600">Vezi checklist-ul complet în ghidul nostru sau descarcă lista de documente din secțiunea 'Ghid complet'.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Cum pot compara ofertele băncilor?</h2>
            <p className="text-gray-600">Folosește calculatorul nostru și compară DAE, comisioane și condiții pentru 12+ bănci.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
