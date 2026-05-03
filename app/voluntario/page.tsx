import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voluntariado · Bàaxal Wayak'",
  description:
    "Próximamente: formulario para sumarte como voluntario o voluntaria al programa comunitario de robótica e impresión 3D en Mérida.",
};

export default function VoluntarioPage() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center gap-6 px-5 py-16"
    >
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Voluntariado — próximamente
      </h1>
      <p className="text-lg text-neutral-700 dark:text-neutral-300">
        Si quieres acompañarnos como mentor, mentora o apoyo logístico,
        cuéntanos en{" "}
        <a
          href="mailto:hola@baaxalwayak.org"
          className="underline decoration-neutral-400 underline-offset-4 hover:decoration-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:hover:decoration-neutral-200"
        >
          hola@baaxalwayak.org
        </a>
        . Estamos por publicar el formulario formal y te avisaremos cuando
        esté listo.
      </p>
      <Link
        href="/"
        className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-base font-semibold text-neutral-900 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
      >
        ← Volver al inicio
      </Link>
    </main>
  );
}
