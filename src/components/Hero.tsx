export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[75vh] md:h-[90vh] lg:h-[calc(100vh-40px)] overflow-hidden bg-brand-dark">
      <video
        className="w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
}
