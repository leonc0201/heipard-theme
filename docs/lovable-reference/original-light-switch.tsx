import { useTheme } from "./theme-provider";

export function LightSwitch() {
  const { theme, toggle } = useTheme();
  const on = theme === "light";

  return (
    <button
      onClick={toggle}
      aria-label={on ? "Abendstimmung einschalten" : "Licht einschalten"}
      className="group relative flex items-center gap-2 select-none"
    >
      <span className="hidden sm:inline text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {on ? "Tag" : "Abend"}
      </span>
      <span
        className={[
          "relative inline-flex h-9 w-[60px] items-center rounded-full border transition-colors duration-500",
          on
            ? "bg-gradient-to-b from-accent to-muted border-border"
            : "bg-gradient-to-b from-background to-card border-border",
        ].join(" ")}
      >
        {/* Switch knob */}
        <span
          className={[
            "absolute top-1 h-7 w-7 rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "bg-gradient-to-br shadow-inner",
            on
              ? "left-1 from-[oklch(0.95_0.04_75)] to-[oklch(0.85_0.05_70)]"
              : "left-[28px] from-[oklch(0.78_0.16_55)] to-[oklch(0.62_0.14_42)]",
          ].join(" ")}
          style={{
            boxShadow: on
              ? "inset 0 1px 2px rgba(255,255,255,.7), 0 1px 2px rgba(0,0,0,.12)"
              : "inset 0 1px 2px rgba(255,255,255,.35), 0 0 18px color-mix(in oklch, var(--glow) 70%, transparent), 0 0 4px color-mix(in oklch, var(--glow) 90%, transparent)",
          }}
        />
        {/* Filament dot when on (dark mode) */}
        <span
          className={[
            "pointer-events-none absolute left-[40px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full transition-opacity duration-500",
            on ? "opacity-0" : "opacity-100 bg-[oklch(0.95_0.1_75)]",
          ].join(" ")}
        />
      </span>
    </button>
  );
}
