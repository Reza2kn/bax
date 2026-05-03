export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center gap-4 px-6 py-16">
      <h1 className="text-3xl font-semibold">Página no encontrada</h1>
      <p className="text-neutral-600 dark:text-neutral-300">
        La página que buscas no existe o se movió. Vuelve al inicio.
      </p>
    </main>
  );
}
