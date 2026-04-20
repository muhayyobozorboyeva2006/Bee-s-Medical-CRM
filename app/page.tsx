import AppShell from "@/components/layout/app-shell";

export default function HomePage() {
  return (
    <AppShell>
      <div className="rounded-[28px] border border-[#e9eef5] bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
        <h1 className="text-[34px] font-extrabold text-[#1d2c44]">
          Statistika
        </h1>
        <p className="mt-2 text-[18px] text-[#70819a]">
          Klinikadagi umumiy ko‘rsatkichlar. Sana bo‘yicha filtrlab ko‘rishingiz mumkin.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[24px] bg-gradient-to-r from-[#10b981] to-[#17a2ff] p-5 text-white">
            <p className="text-sm font-medium uppercase tracking-wide opacity-90">
              Umumiy tushum
            </p>
            <h2 className="mt-4 text-3xl font-extrabold">0 UZS</h2>
          </div>

          <div className="rounded-[24px] bg-gradient-to-r from-[#10b981] to-[#17a2ff] p-5 text-white">
            <p className="text-sm font-medium uppercase tracking-wide opacity-90">
              Fakturalar
            </p>
            <h2 className="mt-4 text-3xl font-extrabold">0</h2>
          </div>

          <div className="rounded-[24px] bg-gradient-to-r from-[#10b981] to-[#17a2ff] p-5 text-white">
            <p className="text-sm font-medium uppercase tracking-wide opacity-90">
              Jins bo‘yicha ulush
            </p>
            <h2 className="mt-4 text-3xl font-extrabold">0%</h2>
          </div>

          <div className="rounded-[24px] bg-gradient-to-r from-[#10b981] to-[#17a2ff] p-5 text-white">
            <p className="text-sm font-medium uppercase tracking-wide opacity-90">
              30 kun
            </p>
            <h2 className="mt-4 text-3xl font-extrabold">0 UZS</h2>
          </div>
        </div>

        <div className="mt-8 grid gap-5 xl:grid-cols-2">
          <div className="min-h-[320px] rounded-[28px] border border-[#e9eef5] bg-[#fbfeff] p-6">
            <h3 className="text-xl font-bold text-[#21324a]">
              Kunlar bo‘yicha tushum
            </h3>
          </div>

          <div className="min-h-[320px] rounded-[28px] border border-[#e9eef5] bg-[#fbfeff] p-6">
            <h3 className="text-xl font-bold text-[#21324a]">
              Kunlar bo‘yicha bemorlar
            </h3>
          </div>
        </div>
      </div>
    </AppShell>
  );
}