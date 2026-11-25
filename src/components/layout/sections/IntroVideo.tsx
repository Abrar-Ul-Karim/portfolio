
export default function IntroVideo() {
  return (
    <section
      id="intro-video"
      className="w-full pt-2 pb-12 sm:pt-4 sm:pb-16"
    >
      <div className="mx-auto max-w-5xl px-0 sm:px-2 lg:px-0">
        {/* Section Heading */}
        <div className="mb-5 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            A Little About Me
          </h2>
        </div>

        {/* Video Player */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-xl">
          <video
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full"
          >
            <source
              src="/videos/intro.mp4"
              type="video/mp4"
            />

            Your browser does not support video playback.
          </video>
        </div>

        {/* Video Description */}
        <p className="mt-4 text-sm text-muted-foreground">
          A short introduction to my background,
          interests, and work.
        </p>
      </div>
    </section>
  );
}

