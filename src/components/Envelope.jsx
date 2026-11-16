import { StarDoodle } from "./Doodles";

export default function Envelope({ to, from, stage, onOpen, envelopeRef }) {
  const opening = stage !== "closed";
  const initial = from.trim().charAt(0).toUpperCase() || "T";

  return (
    <div className="relative mx-auto w-full max-w-140">
      <div className="envelope-enter">
        <div
          ref={envelopeRef}
          role="button"
          tabIndex={0}
          aria-label="Buka amplop"
          onClick={onOpen}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onOpen();
            }
          }}
          className={`envelope group relative block w-full cursor-pointer select-none rounded-md text-left ${
            opening ? "is-opening" : ""
          }`}
        >
          <div className="envelope-stage relative aspect-[1.48/1] w-full transition-transform duration-500 ease-out group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
            {/* Envelope body */}
            <div className="absolute inset-0 overflow-hidden rounded-md bg-[#f1e7d4] shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_2px_3px_rgba(53,42,27,0.08),0_30px_60px_-28px_rgba(53,42,27,0.55)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 100 66"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
              >
                <path d="M0 66 L50 36 L100 66 Z" fill="#ece0cb" opacity="0.65" />
                <path
                  d="M0 0 L50 36 L100 0"
                  fill="none"
                  stroke="rgba(60,48,32,0.09)"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M0 66 L50 36 L100 66"
                  fill="none"
                  stroke="rgba(60,48,32,0.13)"
                  strokeWidth="0.4"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Address written on the lower half */}
              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 px-6 pb-5 sm:px-8 sm:pb-6">

                <span
                  aria-hidden="true"
                  className="hidden pb-1 font-hand text-[1.15rem] leading-tight text-rust/55 sm:block"
                >
                  sebuah terima kasih kecil
                </span>
              </div>
            </div>

            {/* Flap, hinged at the top edge */}
            <div className="envelope-flap absolute inset-x-0 top-0 z-20 h-[55%]">
              <svg
                aria-hidden="true"
                viewBox="0 0 100 55"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full drop-shadow-[0_2px_2px_rgba(53,42,27,0.08)]"
              >
                <polygon
                  points="0,0 100,0 50,55"
                  fill="#f8f2e7"
                  stroke="rgba(60,48,32,0.16)"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <div className="flap-details">
                <p className="absolute left-5 top-5 max-w-64 -rotate-2 font-hand text-[1.05rem] leading-tight text-ink/45 sm:left-7 sm:top-6 sm:text-[1.2rem]">
                  mok bukak hp mu kenek virus
                </p>
              </div>

              {/* Wax seal, sitting right on the flap tip */}
              <div className="absolute left-1/2 top-full z-30 -translate-x-1/2 -translate-y-1/2">
                <div className="wax-seal grid h-14 w-14 place-items-center sm:h-19 sm:w-19">
                  <div className="grid h-9.5 w-9.5 place-items-center rounded-full border border-[#f6e7d3]/35 sm:h-13 sm:w-13">
                    <span className="font-display text-[1.35rem] italic leading-none text-[#f6e7d3]/80 [text-shadow:0_1px_0_rgba(255,255,255,0.25),0_-1px_1px_rgba(0,0,0,0.35)] sm:text-[1.8rem]">
                      {initial}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p
        className={`mt-6 text-center font-hand text-[1.25rem] text-ink/50 transition-opacity duration-300 ${
          opening ? "opacity-0" : "opacity-100"
        }`}
      >
        penceten lek panggah ngeyel
      </p>
    </div>
  );
}
