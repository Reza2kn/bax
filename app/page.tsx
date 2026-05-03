import Link from "next/link";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-blue-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Saltar al contenido principal
      </a>
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <p className="text-base font-semibold tracking-tight">
            <em className="not-italic">Bàaxal Wayak&apos;</em>
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Mérida, Yucatán
          </p>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-5xl px-5">
        {/* Hero */}
        <section className="py-14 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Robótica e impresión 3D, gratis, para niñas y niños de Mérida.
          </h1>
          <p className="mt-5 text-lg text-neutral-700 dark:text-neutral-300 sm:text-xl">
            Programa comunitario sin costo. Cohortes pequeñas, proyectos
            reales, mentores presentes.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/inscribir"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Inscribir a un niño/niña
            </Link>
            <Link
              href="/voluntario"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-base font-semibold text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
            >
              Quiero ser voluntario/a
            </Link>
          </div>
        </section>

        {/* Qué ofrecemos */}
        <section className="border-t border-neutral-200 py-14 dark:border-neutral-800 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Qué ofrecemos
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-3">
            <li className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
              <h3 className="text-lg font-semibold">Cohortes pequeñas</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Grupos de hasta 10 participantes para que cada niño y niña
                reciba atención.
              </p>
            </li>
            <li className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
              <h3 className="text-lg font-semibold">Proyectos prácticos</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Construimos, programamos e imprimimos en 3D desde el primer
                día. Nada de teoría sin manos.
              </p>
            </li>
            <li className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800">
              <h3 className="text-lg font-semibold">Sin costo</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                Materiales, herramientas y mentoría son gratuitos para las
                familias. Siempre.
              </p>
            </li>
          </ul>
        </section>

        {/* Quién lo dirige */}
        {/* CEO: replace bio block before public launch */}
        <section className="border-t border-neutral-200 py-14 dark:border-neutral-800 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Quién lo dirige
          </h2>
          <p className="mt-5 max-w-2xl text-neutral-700 dark:text-neutral-300">
            <em>
              Texto pendiente del equipo fundador. Pronto compartiremos
              quiénes somos y por qué creemos en la robótica como
              herramienta para la comunidad.
            </em>
          </p>
        </section>

        {/* Dónde y cuándo */}
        <section className="border-t border-neutral-200 py-14 dark:border-neutral-800 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Dónde y cuándo
          </h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Sede
              </dt>
              <dd className="mt-1 text-neutral-800 dark:text-neutral-200">
                Mérida, Yucatán — sede por confirmar.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Horario
              </dt>
              <dd className="mt-1 text-neutral-800 dark:text-neutral-200">
                Sesiones los sábados (horario por confirmar).
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Contacto
              </dt>
              <dd className="mt-1 text-neutral-800 dark:text-neutral-200">
                <a
                  href="mailto:hola@baaxalwayak.org"
                  className="underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:hover:decoration-neutral-200"
                >
                  hola@baaxalwayak.org
                </a>
              </dd>
            </div>
          </dl>
        </section>

        {/* CTA repeat */}
        <section className="border-t border-neutral-200 py-14 dark:border-neutral-800 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            ¿Listas, listos para empezar?
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/inscribir"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-blue-700 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2"
            >
              Inscribir a un niño/niña
            </Link>
            <Link
              href="/voluntario"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-base font-semibold text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
            >
              Quiero ser voluntario/a
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-5xl px-5 py-8 text-sm text-neutral-600 dark:text-neutral-400">
          © 2026 <em className="not-italic">Bàaxal Wayak&apos;</em> · Mérida,
          Yucatán ·{" "}
          <a
            href="mailto:hola@baaxalwayak.org"
            className="underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:hover:decoration-neutral-200"
          >
            hola@baaxalwayak.org
          </a>
        </div>
      </footer>
    </>
  );
}
