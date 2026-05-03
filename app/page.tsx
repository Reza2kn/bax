export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center gap-6 px-6 py-16">
      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">
        BAX · Mérida
      </span>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Hola, mundo.
      </h1>
      <p className="text-lg text-neutral-600 dark:text-neutral-300">
        Programa comunitario gratuito de robótica e impresión 3D para
        familias de Mérida. Sitio en construcción.
      </p>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Si quieres participar, escríbenos: pronto publicaremos el formulario
        de inscripción y los horarios de los talleres.
      </p>
    </main>
  );
}
