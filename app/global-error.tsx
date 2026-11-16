"use client"

export default function GlobalError({
  reset,
}: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="es">
      <head>
        <style>{`
          * { box-sizing: border-box; }
          body { margin: 0; min-height: 100vh; display: grid; place-items: center;
            padding: 24px; background: #f6f3e9; color: #243c30;
            font-family: system-ui, sans-serif; }
          main { width: min(100%, 520px); }
          p { line-height: 1.7; }
          .label { color: #94543a; font-size: .75rem; letter-spacing: .12em; }
          h1 { margin: 24px 0; font-size: clamp(2.5rem, 8vw, 5rem);
            letter-spacing: -.06em; line-height: 1.05; }
          .actions { display: flex; flex-wrap: wrap; align-items: center; gap: 18px; margin-top: 30px; }
          button { min-height: 48px; padding: 12px 22px; border: 0; border-radius: 50px;
            background: #243c30; color: #fff; font: inherit; cursor: pointer; }
          a { color: inherit; text-underline-offset: 4px; }
          :focus-visible { outline: 3px solid #a85b21; outline-offset: 4px; }
        `}</style>
      </head>
      <body>
        <main>
          <p className="label">LA VIDA DE NICO</p>
          <h1>Algo salió mal.</h1>
          <p>No pudimos cargar esta página. Prueba otra vez o vuelve al inicio.</p>
          <div className="actions">
            <button type="button" onClick={reset}>
              Intentar de nuevo
            </button>
            <a href="/">Volver al inicio</a>
          </div>
        </main>
      </body>
    </html>
  )
}
