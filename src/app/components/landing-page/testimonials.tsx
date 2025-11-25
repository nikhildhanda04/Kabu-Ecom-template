import testimonials from "./testimonials-data";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="relative flex flex-col gap-12 bg-background px-18 py-28 z-30">
      <h2 className="font-primary text-8xl text-lime-100">
        What Our Clients Say?
      </h2>

      {/* masonry container using CSS columns */}
      <div className="mx-auto w-full mask-b-from-0% columns-1 sm:columns-2 lg:columns-3 gap-3 lg:gap-3">
        {testimonials.map((t, i) => (
          <article
            key={i}
            className="mb-3 break-inside-avoid bg-stone-900 px-8 py-6 font-secondary text-lg text-neutral-100"
          >
            <div className="whitespace-pre-line text-base leading-relaxed">
              {t.review}
            </div>

            <div className="mt-3 flex gap-3 items-center">
              <div className="rounded-full w-10 h-10 overflow-hidden">
                <Image
                  src={t.avatar}
                  alt={t.name ?? "avatar"}
                  width={1920}
                  height={1080}
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="font-light text-sm text-lime-100">{t.name}</div>
                <div className="font-light text-xs text-neutral-500">{t.role}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
