import { useEffect, useMemo, useRef, useState } from "react";
import Envelope from "./components/Envelope";
import { Paperclip, StarDoodle } from "./components/Doodles";

function getParam(name) {
  const value = new URLSearchParams(window.location.search).get(name);
  return value ? value.trim().slice(0, 28) : "";
}

function formatDate() {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function App() {
  const to = useMemo(() => getParam("untuk") || "DitaGPT", []);
  const from = useMemo(() => getParam("dari") || "Cotet", []);
  const date = useMemo(formatDate, []);

  const [stage, setStage] = useState("closed");
  const envelopeRef = useRef(null);
  const cardRef = useRef(null);
  const timerRef = useRef(null);
  const hasOpened = useRef(false);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  useEffect(() => {
    if (stage === "open") {
      hasOpened.current = true;
      cardRef.current?.focus({ preventScroll: true });
    } else if (stage === "closed" && hasOpened.current) {
      envelopeRef.current?.focus({ preventScroll: true });
    }
  }, [stage]);

  function openEnvelope() {
    if (stage !== "closed") return;

    if (prefersReducedMotion()) {
      setStage("open");
      return;
    }

    setStage("opening");
    timerRef.current = setTimeout(() => setStage("open"), 820);
  }

  function returnToEnvelope() {
    clearTimeout(timerRef.current);
    setStage("closed");
  }

  return (
    <div className="relative flex min-h-svh flex-col overflow-x-clip">
      {/* Quiet things in the background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="cup-ring absolute -bottom-10 -left-20 h-64 w-64 rotate-12 opacity-80 sm:-left-10" />
        <div className="cup-ring absolute right-16 top-24 h-40 w-40 opacity-50" />
        <StarDoodle className="absolute right-[7%] top-[14%] h-6 w-6 rotate-12 text-rust/25 sm:h-8 sm:w-8" />
        <StarDoodle className="absolute bottom-[16%] left-[6%] h-4 w-4 text-ink/15 sm:h-5 sm:w-5" />
      </div>

      <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-5 pt-6 font-mono text-[9px] uppercase tracking-[0.24em] text-ink/50 sm:px-8 sm:pt-8">
        <span className="flex items-center gap-2.5">
          <StarDoodle className="h-3 w-3 text-rust" />
          mboh pokok ngene dadine
        </span>
        <span className="hidden sm:block">no. 001 · setelah ujian</span>
      </header>

      <main className="relative flex flex-1 items-center justify-center px-4 py-10 sm:px-8">
        {stage === "open" ? (
          <div className="relative flex w-full flex-col items-center">
            <div className="relative w-full max-w-180">
              <article
                ref={cardRef}
                tabIndex={-1}
                className="card-enter relative rotate-[-0.4deg] bg-[#fcf7ec] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_2px_3px_rgba(53,42,27,0.08),0_34px_70px_-32px_rgba(53,42,27,0.5)]"
              >
                {/* Notebook margin + punched holes */}
                <span
                  aria-hidden="true"
                  className="absolute inset-y-5 left-10 hidden w-px bg-rust/15 sm:block"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-12 hidden h-2.5 w-2.5 rounded-full bg-ink/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)] sm:block"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-12 left-4 hidden h-2.5 w-2.5 rounded-full bg-ink/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.25)] sm:block"
                />

                <div className="relative px-5 py-8 sm:py-10 sm:pl-16 sm:pr-10 md:py-10 md:pl-20 md:pr-14">
                  <div className="flex flex-wrap items-start justify-between gap-5 pr-16 sm:pr-20">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 sm:gap-x-10">
                      <div>
                        <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-ink/40">
                          Kepada
                        </p>
                        <p className="mt-1 font-sans text-[12px] text-ink/75">{to}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-ink/40">
                          Dari
                        </p>
                        <p className="mt-1 font-sans text-[12px] text-ink/75">{from}</p>
                      </div>
                      <div className="hidden sm:block">
                        <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-ink/40">
                          Tanggal
                        </p>
                        <p className="mt-1 font-sans text-[12px] text-ink/75">{date}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink">
                    [16/11, 16.27] Ditaleni Rafia: ga rispek, ga bilang makasi
                  </div>

                  <h1 className="mt-4 wrap-break-words font-display text-[clamp(3.4rem,9vw,6.4rem)] leading-[0.9] tracking-[-0.045em] text-ink">
                    Matur Suwun<span className="text-rust">.</span>
                  </h1>

                  <p className="relative mt-4 inline-block -rotate-1 font-hand text-[1.5rem] leading-tight text-ink/70 sm:text-[1.85rem]">
                    <span className="relative z-10">gae jawaban ujiane</span>
                    <span
                      aria-hidden="true"
                      className="absolute -inset-x-1 bottom-0.5 h-2.5 -rotate-1 bg-butter/60 sm:h-3"
                    />
                  </p>

                  <div className="mt-6 max-w-132 space-y-4 font-display text-[16.5px] leading-[1.7] text-ink/80 sm:text-[18px]">
                    <p>
                      kapan kapan kirim ono neh jawaban e, soale mau ws mls
                      moco pertanyaane maleh langsung jawab teko sng mok kirimi
                    </p>
                    <p>
                      intine matur suwun, gausah njaluk traktir soal e iki
                      dompet ws kosong isine gur ktp
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t border-dashed border-ink/20 pt-5">
                    <p className="font-hand text-[1.4rem] leading-tight text-ink/60 sm:text-[1.55rem]">
                      THANKS A LOT.
                    </p>

                    <div className="text-right">
                      <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-ink/90">
                        dari,
                      </p>
                      <p className="mt-1 max-w-48 wrap-break-words font-hand text-[2.4rem] leading-none text-ink sm:text-[2.8rem]">
                        {from}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-4 border-t border-ink/10 pt-3.5 font-mono text-[8px] uppercase tracking-[0.16em] text-ink/35">
                    <span className="hidden shrink-0 font-hand text-base normal-case tracking-normal text-ink/45 sm:inline">
                      terima kasih
                    </span>
                  </div>
                </div>
              </article>

              {/* Paperclip holding it all together */}
              <Paperclip className="paperclip-in pointer-events-none absolute -top-5 left-10 h-14 w-10 rotate-18 text-ink/25 drop-shadow-[0_2px_2px_rgba(53,42,27,0.18)] sm:left-16 sm:h-16 sm:w-12" />
            </div>

            <button
              type="button"
              onClick={returnToEnvelope}
              className="mt-8 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.22em] text-ink/40 transition-colors hover:text-ink/70"
            >
              <span aria-hidden="true">←</span>
              kembali ke amplop
            </button>
          </div>
        ) : (
          <Envelope
            to={to}
            from={from}
            stage={stage}
            onOpen={openEnvelope}
            envelopeRef={envelopeRef}
          />
        )}
      </main>

      <footer className="relative mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 pb-5 font-mono text-[8px] uppercase tracking-[0.2em] text-ink/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:pb-6">
        <div className="flex justify-center">
          <span>© 2026 created by Alfario (dibantu CLAUDE CODE)</span>
        </div>
      </footer>
    </div>
  );
}
