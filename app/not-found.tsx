export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center">
      <h1 className="font-display text-6xl font-extrabold text-primary">404</h1>
      <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Halaman tidak ditemukan.</h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
      </p>
      <a
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-md transition-all hover:shadow-xl hover:-translate-y-0.5"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
}
