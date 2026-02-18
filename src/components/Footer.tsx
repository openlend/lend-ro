export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <aside>
        <p className="font-bold text-2xl">lend.ro</p>
        <p>Platforma ta de comparare credite ipotecare</p>
        <p>© 2026 - Toate drepturile rezervate</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="/termeni-conditii" className="link link-hover">Termeni</a>
          <a href="/politica-confidentialitate" className="link link-hover">Confidențialitate</a>
          <a href="/politica-cookies" className="link link-hover">Cookies</a>
          <a href="https://anpc.ro" target="_blank" className="link link-hover">ANPC</a>
        </div>
      </nav>
    </footer>
  );
}
