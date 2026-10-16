export default function ScanlineOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 hidden select-none md:block"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Líneas de escaneo CRT en CSS puro: sin blend-mode ni filtros procedurales */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0, 0, 0, 0.28) 2px, rgba(0, 0, 0, 0.28) 4px)",
        }}
      />

      {/* Micro-textura estática de fósforo (3x3 px) en memoria de texturas: 0 costo de cómputo */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.7) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Viñeta periférica sutil simulando pantalla de fósforo/consola */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, transparent 70%, rgba(0, 0, 0, 0.6) 100%)",
        }}
      />
    </div>
  );
}
