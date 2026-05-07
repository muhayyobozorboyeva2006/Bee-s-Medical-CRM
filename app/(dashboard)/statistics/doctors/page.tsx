"use client";

import {
  Activity,
  ChartColumn,
  HeartPulse,
  UsersRound,
} from "lucide-react";
import { useDoctorsStatistics } from "@/features/statistics/hooks/doctors-use-statistics";

export default function DoctorsStatisticsPage() {
  const { data, isLoading } = useDoctorsStatistics();

  const weekDays = data?.dailyRevenue?.map((item) => item.day) ?? [];
  const ageGroups = data?.ageDistribution?.map((item) => item.label) ?? [];

  return (
    <div className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.8fr_1fr]">
        {/* doctors statistics qismi kunlar bo‘yicha tushum */}
        <div className="rounded-[28px] border border-[#d7f4e7] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] dark:border-[#1e293b] dark:bg-[#0f172a]">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eafaf3] dark:bg-[#11261f]">
                <ChartColumn className="h-5 w-5 text-[#16b67a]" />
              </div>

              <div>
                <h2 className="text-[20px] font-bold text-[#1c2b44] dark:text-white">
                  Kunlar bo‘yicha tushum
                </h2>
                <p className="text-[14px] text-[#90a0b7] dark:text-[#94a3b8]">
                  {data?.dailyRevenue?.length ?? 0} ta kun
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {data?.dailyRevenue?.length ? (
              data.dailyRevenue.map((item) => {
                const maxAmount = Math.max(
                  ...data.dailyRevenue.map((revenue) => revenue.amount),
                  1
                );
                const percent = (item.amount / maxAmount) * 100;

                return (
                  <div
                    key={item.day}
                    className="rounded-[18px] border border-[#eef2f7] bg-[#f8fafc] p-4 dark:border-[#1e293b] dark:bg-[#0b1622]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[15px] font-semibold text-[#1d2c44] dark:text-white">
                          {item.day}
                        </p>
                        <p className="mt-1 text-[13px] text-[#94a3b8]">
                          Kunlik tushum
                        </p>
                      </div>

                      <p className="text-[18px] font-extrabold text-[#16b67a]">
                        {item.amount.toLocaleString()}
                      </p>
                    </div>

                    <div className="mt-3 h-[8px] overflow-hidden rounded-full bg-[#dcfce7] dark:bg-[#123126]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a]"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex h-[220px] items-center justify-center rounded-[20px] border border-dashed border-[#dbe4ee] bg-[#f8fafc] text-center text-[#8ea1bb] dark:border-[#1e293b] dark:bg-[#0b1622]">
                <div>
                  <ChartColumn className="mx-auto h-8 w-8" />
                  <p className="mt-3 text-[16px] font-medium">
                    {isLoading ? "Yuklanmoqda..." : "Ma’lumot yo‘q"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/*doctors statistics qismi kunlar bo‘yicha bemorlar */}
        <div className="overflow-hidden rounded-[28px] border border-[#b9efe0] bg-gradient-to-r from-[#a8d8f5] to-[#99e4c0] shadow-[0_12px_30px_rgba(15,23,42,0.05)] dark:border-[#1e293b] dark:from-[#12354b] dark:to-[#0f3a2e]">
          <div className="m-[1px] rounded-[27px] bg-white p-5 dark:bg-[#0f172a]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef8ff] dark:bg-[#102334]">
                  <UsersRound className="h-5 w-5 text-[#1d9bf0]" />
                </div>

                <div>
                  <h2 className="text-[20px] font-bold text-[#1c2b44] dark:text-white">
                    Kunlar bo‘yicha bemorlar
                  </h2>
                  <p className="text-[14px] text-[#90a0b7] dark:text-[#94a3b8]">
                    {data?.dailyPatients?.length ?? 0} ta kun
                  </p>
                </div>
              </div>
            </div>

            {data?.dailyPatients?.length ? (
              <div className="mt-5 max-h-[260px] space-y-3 overflow-y-auto pr-2">
                {data.dailyPatients.map((item) => {
                  const maxCount = Math.max(
                    ...data.dailyPatients.map((patient) => patient.count),
                    1
                  );
                  const percent = (item.count / maxCount) * 100;

                  return (
                    <div
                      key={item.day}
                      className="rounded-[18px] border border-[#e7eef6] bg-[#f8fbff] p-4 shadow-[0_6px_16px_rgba(15,23,42,0.04)] dark:border-[#1e293b] dark:bg-[#0b1622]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[15px] font-semibold text-[#1d2c44] dark:text-white">
                            {item.day}
                          </p>
                          <p className="mt-1 text-[13px] text-[#94a3b8]">
                            Kunlik bemorlar soni
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-[22px] font-extrabold leading-none text-[#1d9bf0]">
                            {item.count}
                          </p>
                          <p className="mt-1 text-[12px] font-medium text-[#94a3b8]">
                            ta bemor
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 h-[8px] overflow-hidden rounded-full bg-[#dff0ff] dark:bg-[#132739]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2563eb] transition-all duration-500"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex h-[220px] sm:h-[270px] items-center justify-center">
                <div className="text-center text-[#8fa0b8] dark:text-[#94a3b8]">
                  <Activity className="mx-auto h-8 w-8" />
                  <p className="mt-3 text-[16px] font-medium">
                    {isLoading ? "Yuklanmoqda..." : "Ma’lumot yo‘q"}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="h-[90px] sm:h-[120px]" />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {/* doctors statisics qismi yosh bo‘yicha taqsimot */}
        <div className="rounded-[28px] border border-[#e6edf5] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] dark:border-[#1e293b] dark:bg-[#0f172a]">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eafaf3] dark:bg-[#11261f]">
              <UsersRound className="h-5 w-5 text-[#16b67a]" />
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#1c2b44] dark:text-white">
                Yosh Bo‘yicha Taqsimot
              </h3>
              <p className="mt-1 text-[14px] text-[#7f90a7] dark:text-[#94a3b8]">
                Klinika bemorlarining demografiyasi
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {data?.ageDistribution?.length ? (
              data.ageDistribution.map((group) => (
                <div
                  key={group.label}
                  className="rounded-[16px] border border-[#eef2f7] bg-[#f8fafc] px-4 py-3 dark:border-[#1e293b] dark:bg-[#0b1622]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] font-medium text-[#1c2b44] dark:text-white">
                      {group.label}
                    </span>
                    <span className="text-[16px] font-extrabold text-[#16b67a]">
                      {group.count}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex h-[180px] items-center justify-center rounded-[18px] border border-dashed border-[#dbe4ee] bg-[#f8fafc] text-center text-[#8ea1bb] dark:border-[#1e293b] dark:bg-[#0b1622]">
                <div>
                  <UsersRound className="mx-auto h-8 w-8" />
                  <p className="mt-3 text-[16px] font-medium">
                    {isLoading ? "Yuklanmoqda..." : "Ma’lumot yo‘q"}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 grid grid-cols-5 gap-2 text-center text-[13px] text-[#6f819b] dark:text-[#94a3b8] sm:text-[14px]">
            {ageGroups.map((group) => (
              <span key={group}>{group}</span>
            ))}
          </div>
        </div>

        {/* doctors statisics qismi xizmatlar taqsimoti */}
        <div className="rounded-[28px] border border-[#e6edf5] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] dark:border-[#1e293b] dark:bg-[#0f172a]">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef8ff] dark:bg-[#102334]">
              <HeartPulse className="h-5 w-5 text-[#3ba9ff]" />
            </div>

            <div>
              <h3 className="text-[20px] font-bold text-[#1c2b44] dark:text-white">
                Xizmatlar Taqsimoti
              </h3>
              <p className="mt-1 text-[14px] text-[#7f90a7] dark:text-[#94a3b8]">
                Tur bo‘yicha taqsimlanish
              </p>
            </div>
          </div>

                  <div className="mt-8 flex items-center justify-center">
                      {(() => {
                          const services = data?.serviceDistribution ?? [];
                          const total = data?.totalServices ?? 0;

                          const colors = [
                              "#38bdf8",
                              "#10b981",
                              "#8b5cf6",
                              "#f59e0b",
                              "#ef4444",
                              "#14b8a6",
                              "#6366f1",
                              "#ec4899",
                          ];

                          const gradient = services.length
                              ? (() => {
                                  let current = 0;

                                  const stops = services.map((service, index) => {
                                      const value = total > 0 ? (service.count / total) * 100 : 0;
                                      const start = current;
                                      const end = current + value;
                                      current = end;

                                      const color = colors[index % colors.length];
                                      return `${color} ${start}% ${end}%`;
                                  });

                                  return `conic-gradient(${stops.join(", ")})`;
                              })()
                              : "conic-gradient(#dfe6ef 0% 100%)";

                          return (
                              <div
                                  className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full"
                                  style={{ background: gradient }}
                              >
                                  <div className="flex h-[184px] w-[184px] items-center justify-center rounded-full bg-white dark:bg-[#0f172a]">
                                      <div className="text-center">
                                          <p className="text-[16px] font-medium text-[#6f819b] dark:text-[#94a3b8]">
                                              Jami
                                          </p>
                                          <p className="mt-1 text-[48px] font-extrabold leading-none text-[#0f172a] dark:text-white">
                                              {total}
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          );
                      })()}
                  </div>

          <div className="mt-8 space-y-3">
            {data?.serviceDistribution?.length ? (
              data.serviceDistribution.map((service) => (
                <div
                  key={service.label}
                  className="flex items-center justify-between rounded-[16px] border border-[#eef2f7] bg-[#f8fafc] px-4 py-3 dark:border-[#1e293b] dark:bg-[#0b1622]"
                >
                  <span className="text-[14px] font-medium text-[#1c2b44] dark:text-white">
                    {service.label}
                  </span>
                  <span className="text-[16px] font-extrabold text-[#3ba9ff]">
                    {service.count}
                  </span>
                </div>
              ))
            ) : (
              <div className="flex h-[140px] items-center justify-center rounded-[18px] border border-dashed border-[#dbe4ee] bg-[#f8fafc] text-center text-[#8ea1bb] dark:border-[#1e293b] dark:bg-[#0b1622]">
                <div>
                  <HeartPulse className="mx-auto h-8 w-8" />
                  <p className="mt-3 text-[16px] font-medium">
                    {isLoading ? "Yuklanmoqda..." : "Ma’lumot yo‘q"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}