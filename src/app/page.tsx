"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  ShieldCheck,
  TrendingUp,
  TrendingDown,
  FileCheck,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Database,
  Files,
  Target,
  Building2,
  GraduationCap,
  FlaskConical,
  HandHeart,
  Layers,
  ChevronRight,
  Cpu,
  Zap,
  Calendar,
  BarChart3,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RTooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  Cell,
  PieChart,
  Pie,
  Legend,
  RadialBarChart,
  RadialBar,
} from "recharts";
import {
  STANDAR_SPMI,
  IKU_LIST,
  DOKUMEN_MUTU,
  TAHUN_LIST,
  REGULASI_PER_TAHUN,
  DOKUMEN_AMI_PER_TAHUN,
  getStandarByKategori,
  getRataRataSkorAMI,
  getRataRataSkorByKategori,
  getTotalTemuan,
  getTotalPTK,
  getRataTindakLanjut,
  type KategoriStandar,
  type StandarSPMI,
} from "@/lib/spmi-data";
import { DOKUMEN_AMI_2024_DETAIL } from "@/lib/ami-2024-detail-data";
import {
  ArkhamCard,
  KpiCard,
  ProgressBar,
  StatusBadge,
  LiveIndicator,
  DataStatus,
} from "@/components/spmi/blockchain-card";
import { StandarDetailDialog } from "@/components/spmi/standar-detail-dialog";
import { DetailAMISection } from "@/components/spmi/detail-ami-section";

const NAVY = "#386EE6";
const NAVY_LIGHT = "#5BA8FF";
const EMERALD = "#10B981";
const AMBER = "#F59E0B";
const ROSE = "#F43F5E";
const CYAN = "#06B6D4";
const PURPLE = "#A78BFA";

export default function DashboardSPMI() {
  const [selectedYear, setSelectedYear] = React.useState<number>(2025);
  const [chartMode, setChartMode] = React.useState<"summary" | "year">("summary");
  const [selectedStandar, setSelectedStandar] = React.useState<StandarSPMI | null>(null);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  // Computed values
  const rataSkor = getRataRataSkorAMI(selectedYear);
  const totalTemuan = getTotalTemuan(selectedYear);
  const totalPTK = getTotalPTK(selectedYear);
  const rataTindakLanjut = getRataTindakLanjut(selectedYear);
  const hasData = rataSkor !== null;

  // Trend data untuk chart AMI 5 tahun (summary mode)
  const trendDataAMI = TAHUN_LIST.map((tahun) => {
    const skor = getRataRataSkorAMI(tahun);
    const tl = getRataTindakLanjut(tahun);
    return {
      tahun: tahun.toString(),
      "Skor AMI": skor,
      "Tindak Lanjut (%)": tl,
    };
  });

  // Data untuk year mode (hanya tahun terpilih)
  const yearModeData = hasData ? [
    { name: "Skor AMI", value: rataSkor, fill: NAVY },
    { name: "Tindak Lanjut", value: rataTindakLanjut, fill: EMERALD },
  ] : [];

  // Data per kategori untuk tahun terpilih
  const kategoriData: KategoriStandar[] = ["Pendidikan", "Penelitian", "PkM", "Tambahan"];
  const radarData = kategoriData.map((kat) => ({
    kategori: kat,
    "Skor AMI": getRataRataSkorByKategori(selectedYear, kat),
    target: 85,
  }));

  // Distribusi status untuk pie chart
  const statusDistribution = React.useMemo(() => {
    if (!hasData) return [];
    const counts = { MS: 0, ML: 0, BS: 0, MSV: 0 };
    STANDAR_SPMI.forEach((s) => {
      const st = s.ami[selectedYear]?.status;
      if (st) counts[st]++;
    });
    return [
      { name: "Mencapai Standar", value: counts.MS, color: EMERALD },
      { name: "Melampaui Standar", value: counts.ML, color: CYAN },
      { name: "Belum Mencapai", value: counts.BS, color: AMBER },
      { name: "Menyimpang", value: counts.MSV, color: ROSE },
    ].filter((d) => d.value > 0);
  }, [selectedYear, hasData]);

  // Trend kategori 5 tahun untuk bar chart
  const kategoriTrend = TAHUN_LIST.map((tahun) => ({
    tahun: tahun.toString(),
    Pendidikan: getRataRataSkorByKategori(tahun, "Pendidikan"),
    Penelitian: getRataRataSkorByKategori(tahun, "Penelitian"),
    PkM: getRataRataSkorByKategori(tahun, "PkM"),
    Tambahan: getRataRataSkorByKategori(tahun, "Tambahan"),
  }));

  // IKU trend
  const ikuTrend = TAHUN_LIST.map((tahun) => {
    const data: Record<string, number | string | null> = { tahun: tahun.toString() };
    IKU_LIST.forEach((iku) => {
      data[`IKU${iku.no}`] = iku.capaian[tahun];
    });
    return data;
  });

  // Trend tahun sebelumnya untuk perbandingan
  const prevYear = selectedYear > 2021 ? selectedYear - 1 : selectedYear;
  const prevRataSkor = getRataRataSkorAMI(prevYear);
  const skorTrend = (prevYear !== selectedYear && prevRataSkor !== null && rataSkor !== null)
    ? ((rataSkor - prevRataSkor) / prevRataSkor) * 100 : null;

  const prevTotalTemuan = getTotalTemuan(prevYear);
  const temuanTrend = (prevYear !== selectedYear && prevTotalTemuan !== null && totalTemuan !== null)
    ? ((totalTemuan - prevTotalTemuan) / prevTotalTemuan) * 100 : null;

  const prevTindakLanjut = getRataTindakLanjut(prevYear);
  const tindakLanjutTrend = (prevYear !== selectedYear && prevTindakLanjut !== null && rataTindakLanjut !== null)
    ? ((rataTindakLanjut - prevTindakLanjut) / prevTindakLanjut) * 100 : null;

  // Handler untuk klik standar
  const handleStandarClick = (standar: StandarSPMI) => {
    setSelectedStandar(standar);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen arkham-bg text-foreground">
      <div className="container mx-auto px-4 py-6 max-w-[1600px]">
        {/* Header */}
        <header className="mb-6 relative">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center glow-blue-strong border border-sky-400/30 bg-white/5">
                <img src="/unita-logo.png" alt="UNITA Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold gradient-text-blue tracking-tight">
                  SPMI UNITA
                </h1>
                <p className="text-xs text-muted-foreground font-mono tracking-wider uppercase">
                  Sistem Penjaminan Mutu Internal • Universitas Tulungagung • Multi-Tahun
                </p>
                <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 border border-purple-500/30 text-purple-300">2022: Permendikbud 3/2020 & 5/2020</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/10 border border-rose-500/30 text-rose-300">2023: Permendikbud 3/2020 & 5/2020</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300">2024: Permendikbudristek 53/2023</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">2025: Permen 39/2025</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <LiveIndicator label="DATA LIVE" variant="emerald" />
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">Tahun Audit:</span>
                <Select
                  value={selectedYear.toString()}
                  onValueChange={(v) => setSelectedYear(parseInt(v))}
                >
                  <SelectTrigger className="w-32 bg-card/50 border-sky-500/30 font-mono text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {TAHUN_LIST.map((tahun) => {
                      const hasYearData = getRataRataSkorAMI(tahun) !== null;
                      return (
                        <SelectItem key={tahun} value={tahun.toString()}>
                          <span className="font-mono">{tahun}</span>
                          {!hasYearData && (
                            <span className="ml-2 text-[10px] text-muted-foreground">(kosong)</span>
                          )}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Sub-header: breadcrumb / sync 4 dokumen */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider">
            <span className="text-muted-foreground">Sync 4 Dokumen Mutu:</span>
            {DOKUMEN_MUTU.map((doc, idx) => (
              <React.Fragment key={doc.kode}>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-sky-500/10 border border-sky-500/20 text-sky-300 hover:bg-sky-500/15 transition-colors">
                  <Files className="w-3 h-3" />
                  {doc.nama.replace(" SPMI", "")}
                </span>
                {idx < DOKUMEN_MUTU.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-muted-foreground/50" />
                )}
              </React.Fragment>
            ))}
          </div>
        </header>

        {/* Data Status Banner */}
        {!hasData && (
          <div className="mb-6 p-4 rounded-lg border border-amber-500/30 bg-amber-500/5">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-amber-300">
                  Data AMI Tahun {selectedYear} Belum Tersedia
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Belum ada hasil Audit Mutu Internal untuk tahun {selectedYear}. Pilih tahun 2022, 2023, 2024, atau 2025 untuk melihat data AMI. Tahun 2022 & 2023 (Permendikbud 3/2020 & 5/2020), tahun 2024 (Permendikbudristek 53/2023), tahun 2025 (Permen 39/2025).
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Regulation Info Banner for selected year */}
        {hasData && REGULASI_PER_TAHUN[selectedYear] && (
          <div className="mb-6 p-3 rounded-lg border border-sky-500/20 bg-sky-500/5">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-300" />
                <span className="text-xs font-mono uppercase tracking-wider text-sky-300">Regulasi:</span>
                <span className="text-sm font-semibold text-foreground">{REGULASI_PER_TAHUN[selectedYear].permen}</span>
                <span className="text-xs text-muted-foreground">— {REGULASI_PER_TAHUN[selectedYear].judulPermen}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-300">Audit:</span>
                <span className="text-xs text-foreground">{REGULASI_PER_TAHUN[selectedYear].tanggalAudit}</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-mono uppercase tracking-wider text-amber-300">Dokumen:</span>
                <span className="text-xs text-foreground">{REGULASI_PER_TAHUN[selectedYear].totalDokumenAMI} AMI</span>
              </div>
            </div>
          </div>
        )}

        {/* KPI Cards Row */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-6">
          <KpiCard
            title="Rata-Rata Skor AMI"
            value={rataSkor}
            unit="/ 100"
            trend={skorTrend}
            sublabel={prevYear !== selectedYear ? `vs ${prevYear}: ${prevRataSkor ?? "—"}` : `Tahun ${selectedYear}`}
            variant="primary"
            icon={<Activity className="w-5 h-5" />}
          />
          <KpiCard
            title="Total Temuan AMI"
            value={totalTemuan}
            trend={temuanTrend !== null ? -temuanTrend : null}
            sublabel={prevYear !== selectedYear ? `vs ${prevYear}: ${prevTotalTemuan ?? "—"}` : `Tahun ${selectedYear}`}
            variant="warning"
            icon={<AlertTriangle className="w-5 h-5" />}
          />
          <KpiCard
            title="Permintaan Tindakan Koreksi"
            value={totalPTK}
            sublabel={`Tahun ${selectedYear}`}
            variant="danger"
            icon={<FileCheck className="w-5 h-5" />}
          />
          <KpiCard
            title="Rata-Rata Tindak Lanjut"
            value={rataTindakLanjut}
            unit="%"
            trend={tindakLanjutTrend}
            sublabel={prevYear !== selectedYear ? `vs ${prevYear}: ${prevTindakLanjut ?? "—"}%` : `Tahun ${selectedYear}`}
            variant="success"
            icon={<CheckCircle2 className="w-5 h-5" />}
          />
          <KpiCard
            title="Standar Terpantau"
            value={STANDAR_SPMI.length}
            unit="standar"
            sublabel="33 Standar SPMI"
            variant="default"
            icon={<Target className="w-5 h-5" />}
          />
        </section>

        {/* Charts Row 1: AMI Trend + Status Distribution */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-6">
          {/* AMI Trend - with toggle Summary/Year */}
          <ArkhamCard variant="primary" withTerminalBorder className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <div>
                <h3 className="text-base font-semibold text-sky-300 font-mono uppercase tracking-wide">
                  Tren Skor AMI & Tindak Lanjut
                </h3>
                <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                  {chartMode === "summary" ? "Periode 2021-2025 • 33 Standar SPMI" : `Tahun ${selectedYear} • 33 Standar SPMI`}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {/* Toggle Summary / Year */}
                <ToggleGroup
                  type="single"
                  value={chartMode}
                  onValueChange={(v) => v && setChartMode(v as "summary" | "year")}
                  className="rounded border border-sky-500/20 bg-card/50"
                >
                  <ToggleGroupItem
                    value="summary"
                    className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 data-[state=on]:bg-sky-500/20 data-[state=on]:text-sky-300"
                  >
                    <Calendar className="w-3 h-3 mr-1" />
                    Summary
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="year"
                    className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 data-[state=on]:bg-sky-500/20 data-[state=on]:text-sky-300"
                  >
                    <BarChart3 className="w-3 h-3 mr-1" />
                    Tahun {selectedYear}
                  </ToggleGroupItem>
                </ToggleGroup>

                {chartMode === "summary" && (
                  <div className="flex items-center gap-3 text-[10px] font-mono">
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-sm bg-sky-400" /> Skor
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-3 h-3 rounded-sm bg-emerald-400" /> TL
                    </span>
                  </div>
                )}
              </div>
            </div>

            {chartMode === "summary" ? (
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={trendDataAMI}>
                  <defs>
                    <linearGradient id="colorSkor" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={NAVY} stopOpacity={0.5} />
                      <stop offset="95%" stopColor={NAVY} stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorTL" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={EMERALD} stopOpacity={0.5} />
                      <stop offset="95%" stopColor={EMERALD} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(56, 110, 230, 0.08)" />
                  <XAxis dataKey="tahun" stroke="#5a6478" fontSize={11} tickLine={false} axisLine={{ stroke: "rgba(56, 110, 230, 0.2)" }} />
                  <YAxis stroke="#5a6478" fontSize={11} domain={[0, 100]} tickLine={false} axisLine={false} />
                  <RTooltip
                    contentStyle={{
                      backgroundColor: "rgba(10, 14, 26, 0.95)",
                      border: "1px solid rgba(56, 110, 230, 0.4)",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "12px",
                      fontFamily: "monospace",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="Skor AMI"
                    stroke={NAVY}
                    strokeWidth={2}
                    fill="url(#colorSkor)"
                    name="Skor AMI"
                    connectNulls
                    dot={{ r: 3, fill: NAVY }}
                    activeDot={{ r: 5, fill: NAVY_LIGHT }}
                  />
                  <Area
                    type="monotone"
                    dataKey="Tindak Lanjut (%)"
                    stroke={EMERALD}
                    strokeWidth={2}
                    fill="url(#colorTL)"
                    name="Tindak Lanjut (%)"
                    connectNulls
                    dot={{ r: 3, fill: EMERALD }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={yearModeData} layout="vertical" margin={{ left: 20, right: 40 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(56, 110, 230, 0.08)" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} stroke="#5a6478" fontSize={11} tickLine={false} axisLine={{ stroke: "rgba(56, 110, 230, 0.2)" }} />
                  <YAxis type="category" dataKey="name" stroke="#5a6478" fontSize={11} tickLine={false} axisLine={false} width={100} />
                  <RTooltip
                    contentStyle={{
                      backgroundColor: "rgba(10, 14, 26, 0.95)",
                      border: "1px solid rgba(56, 110, 230, 0.4)",
                      borderRadius: "6px",
                      color: "#fff",
                      fontSize: "12px",
                      fontFamily: "monospace",
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
                    {yearModeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                  <XAxis type="number" domain={[0, 100]} hide />
                </BarChart>
              </ResponsiveContainer>
            )}
          </ArkhamCard>

          {/* Status Distribution */}
          <ArkhamCard withTerminalBorder>
            <div className="mb-4">
              <h3 className="text-base font-semibold text-sky-300 font-mono uppercase tracking-wide">
                Distribusi Status AMI
              </h3>
              <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                Tahun {selectedYear} • 33 Standar
              </p>
            </div>
            {statusDistribution.length > 0 ? (
              <>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={statusDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={80}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="rgba(10, 14, 26, 0.5)"
                      strokeWidth={2}
                    >
                      {statusDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <RTooltip
                      contentStyle={{
                        backgroundColor: "rgba(10, 14, 26, 0.95)",
                        border: "1px solid rgba(56, 110, 230, 0.4)",
                        borderRadius: "6px",
                        color: "#fff",
                        fontSize: "12px",
                        fontFamily: "monospace",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-1.5 mt-3 text-[10px] font-mono">
                  {statusDistribution.map((d) => (
                    <div key={d.name} className="flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-sm"
                        style={{ backgroundColor: d.color }}
                      />
                      <span className="text-muted-foreground">{d.name}</span>
                      <span className="font-bold ml-auto">{d.value}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="h-[200px] flex items-center justify-center">
                <DataStatus hasData={false} label="No Data" />
              </div>
            )}
          </ArkhamCard>
        </section>

        {/* Charts Row 2: Radar per Kategori + Bar Chart Kategori Trend */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-6">
          {/* Radar per Kategori */}
          <ArkhamCard withTerminalBorder>
            <div className="mb-4">
              <h3 className="text-base font-semibold text-sky-300 font-mono uppercase tracking-wide">
                Radar Skor AMI per Kategori
              </h3>
              <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                Tahun {selectedYear} • Target 85
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="rgba(56, 110, 230, 0.12)" />
                <PolarAngleAxis dataKey="kategori" stroke="#5a6478" fontSize={11} tickLine={false} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#3a4458" fontSize={9} tickLine={false} />
                <RTooltip
                  contentStyle={{
                    backgroundColor: "rgba(10, 14, 26, 0.95)",
                    border: "1px solid rgba(56, 110, 230, 0.4)",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "12px",
                    fontFamily: "monospace",
                  }}
                />
                <Radar
                  name={`Tahun ${selectedYear}`}
                  dataKey="Skor AMI"
                  stroke={NAVY}
                  fill={NAVY}
                  fillOpacity={0.35}
                  strokeWidth={2}
                  dot={{ r: 4, fill: NAVY_LIGHT }}
                />
                <Radar
                  name="Target"
                  dataKey="target"
                  stroke={AMBER}
                  fill="none"
                  strokeWidth={1.5}
                  strokeDasharray="4 4"
                />
                <Legend wrapperStyle={{ fontSize: "10px", fontFamily: "monospace" }} />
              </RadarChart>
            </ResponsiveContainer>
          </ArkhamCard>

          {/* Bar Chart Kategori Trend */}
          <ArkhamCard withTerminalBorder>
            <div className="mb-4">
              <h3 className="text-base font-semibold text-sky-300 font-mono uppercase tracking-wide">
                Tren Skor AMI per Kategori
              </h3>
              <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                8 Pendidikan • 8 Penelitian • 8 PkM • 9 Tambahan
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={kategoriTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(56, 110, 230, 0.08)" />
                <XAxis dataKey="tahun" stroke="#5a6478" fontSize={11} tickLine={false} axisLine={{ stroke: "rgba(56, 110, 230, 0.2)" }} />
                <YAxis stroke="#5a6478" fontSize={11} domain={[0, 100]} tickLine={false} axisLine={false} />
                <RTooltip
                  contentStyle={{
                    backgroundColor: "rgba(10, 14, 26, 0.95)",
                    border: "1px solid rgba(56, 110, 230, 0.4)",
                    borderRadius: "6px",
                    color: "#fff",
                    fontSize: "12px",
                    fontFamily: "monospace",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "10px", fontFamily: "monospace" }} />
                <Bar dataKey="Pendidikan" fill={NAVY} radius={[3, 3, 0, 0]} />
                <Bar dataKey="Penelitian" fill={CYAN} radius={[3, 3, 0, 0]} />
                <Bar dataKey="PkM" fill={EMERALD} radius={[3, 3, 0, 0]} />
                <Bar dataKey="Tambahan" fill={AMBER} radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ArkhamCard>
        </section>

        {/* Tabs: Standar Detail + IKU + Dokumen Mutu */}
        <Tabs defaultValue="standar" className="mb-6">
          <TabsList className="bg-card/40 border border-sky-500/20 backdrop-blur-sm">
            <TabsTrigger value="standar" className="data-[state=active]:bg-sky-500/20 data-[state=active]:text-sky-300 font-mono text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4 mr-1" />
              33 Standar
            </TabsTrigger>
            <TabsTrigger value="iku" className="data-[state=active]:bg-sky-500/20 data-[state=active]:text-sky-300 font-mono text-xs uppercase tracking-wider">
              <Target className="w-4 h-4 mr-1" />
              8 IKU
            </TabsTrigger>
            <TabsTrigger value="dokumen" className="data-[state=active]:bg-sky-500/20 data-[state=active]:text-sky-300 font-mono text-xs uppercase tracking-wider">
              <Files className="w-4 h-4 mr-1" />
              Dokumen Mutu
            </TabsTrigger>
          </TabsList>

          {/* Tab: 33 Standar Detail - dengan klik untuk dialog */}
          <TabsContent value="standar">
            <ArkhamCard className="p-0 overflow-hidden" withTerminalBorder>
              <div className="p-4 border-b border-sky-500/15 flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-base font-semibold text-sky-300 font-mono uppercase tracking-wide">
                    Detail Hasil AMI 33 Standar SPMI
                  </h3>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                    Tahun {selectedYear} • Klik baris untuk detail riwayat AMI per standar
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono">
                  {kategoriData.map((kat) => {
                    const skor = getRataRataSkorByKategori(selectedYear, kat);
                    return (
                      <TooltipProvider key={kat}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center gap-1 px-2 py-1 rounded bg-sky-500/10 border border-sky-500/20">
                              {kat === "Pendidikan" && <GraduationCap className="w-3 h-3 text-sky-400" />}
                              {kat === "Penelitian" && <FlaskConical className="w-3 h-3 text-cyan-400" />}
                              {kat === "PkM" && <HandHeart className="w-3 h-3 text-emerald-400" />}
                              {kat === "Tambahan" && <Building2 className="w-3 h-3 text-amber-400" />}
                              <span className="font-bold tabular-nums">{skor ?? "—"}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="font-mono">Rata-rata {kat}: {skor !== null ? `${skor}/100` : "No Data"}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </div>
              </div>
              <ScrollArea className="h-[600px] scrollbar-thin">
                <Table>
                  <TableHeader className="sticky top-0 bg-card/95 backdrop-blur-md z-10">
                    <TableRow className="border-sky-500/15 hover:bg-transparent">
                      <TableHead className="w-10 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">#</TableHead>
                      <TableHead className="min-w-[200px] font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Nama Standar</TableHead>
                      <TableHead className="w-24 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Kategori</TableHead>
                      <TableHead className="w-20 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Kode</TableHead>
                      <TableHead className="w-16 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Skor</TableHead>
                      <TableHead className="w-20 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Status</TableHead>
                      <TableHead className="w-16 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Temuan</TableHead>
                      <TableHead className="w-16 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">PTK</TableHead>
                      <TableHead className="w-28 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Tindak Lanjut</TableHead>
                      <TableHead className="min-w-[280px] font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Catatan AMI</TableHead>
                      <TableHead className="min-w-[160px] font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Dokumen AMI</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {STANDAR_SPMI.map((standar) => {
                      const ami = standar.ami[selectedYear];
                      return (
                        <TableRow
                          key={standar.no}
                          className="border-sky-500/8 hover:bg-sky-500/[0.05] cursor-pointer transition-colors"
                          onClick={() => handleStandarClick(standar)}
                        >
                          <TableCell className="font-mono text-xs text-muted-foreground tabular-nums">
                            {String(standar.no).padStart(2, "0")}
                          </TableCell>
                          <TableCell className="font-medium text-sm">
                            <div className="flex items-center gap-2">
                              {standar.kategori === "Pendidikan" && <GraduationCap className="w-3.5 h-3.5 text-sky-400 shrink-0" />}
                              {standar.kategori === "Penelitian" && <FlaskConical className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                              {standar.kategori === "PkM" && <HandHeart className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                              {standar.kategori === "Tambahan" && <Building2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                              <span className="hover:text-sky-300 transition-colors">{standar.nama}</span>
                              <ChevronRight className="w-3 h-3 text-muted-foreground/30 shrink-0" />
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{standar.kategori}</span>
                          </TableCell>
                          <TableCell>
                            <code className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-300 font-mono border border-sky-500/20">
                              {standar.kode}
                            </code>
                          </TableCell>
                          <TableCell>
                            {ami ? (
                              <span
                                className={`font-bold tabular-nums font-mono ${
                                  ami.skor >= 85 ? "text-emerald-400" :
                                  ami.skor >= 75 ? "text-cyan-400" :
                                  ami.skor >= 65 ? "text-amber-400" :
                                  ami.skor >= 50 ? "text-orange-400" :
                                  "text-rose-400"
                                }`}
                              >
                                {ami.skor}
                              </span>
                            ) : (
                              <span className="text-muted-foreground/40 font-mono">—</span>
                            )}
                          </TableCell>
                          <TableCell>
                            {ami ? (
                              <StatusBadge status={ami.status} />
                            ) : (
                              <span className="text-muted-foreground/40 font-mono text-[10px]">N/A</span>
                            )}
                          </TableCell>
                          <TableCell className="tabular-nums font-mono text-xs">
                            {ami ? (
                              <span className="text-amber-400">{ami.temuan}</span>
                            ) : (
                              <span className="text-muted-foreground/40">—</span>
                            )}
                          </TableCell>
                          <TableCell className="tabular-nums font-mono text-xs">
                            {ami ? (
                              <span className="text-rose-400">{ami.ptK}</span>
                            ) : (
                              <span className="text-muted-foreground/40">—</span>
                            )}
                          </TableCell>
                          <TableCell>
                            {ami ? (
                              <div className="w-20">
                                <ProgressBar
                                  value={ami.tindakLanjut}
                                  size="sm"
                                  showValue={true}
                                  variant={
                                    ami.tindakLanjut >= 85 ? "success" :
                                    ami.tindakLanjut >= 70 ? "primary" :
                                    ami.tindakLanjut >= 50 ? "warning" :
                                    "danger"
                                  }
                                />
                              </div>
                            ) : (
                              <span className="text-muted-foreground/40 font-mono text-xs">—</span>
                            )}
                          </TableCell>
                          <TableCell className="text-xs text-muted-foreground">
                            {ami ? ami.catatan : <span className="font-mono text-muted-foreground/40">Belum ada data AMI</span>}
                          </TableCell>
                          <TableCell>
                            {ami?.dokumenAMI ? (
                              <span className="text-[10px] font-mono text-sky-300/80 px-1.5 py-0.5 rounded bg-sky-500/5 border border-sky-500/10 inline-block">
                                {ami.dokumenAMI}
                              </span>
                            ) : (
                              <span className="text-muted-foreground/40 font-mono text-[10px]">—</span>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </ScrollArea>
            </ArkhamCard>

            {/* Detail AMI per Dokumen - di bawah tabel 33 Standar */}
            <DetailAMISection tahun={selectedYear} />
          </TabsContent>

          {/* Tab: 8 IKU */}
          <TabsContent value="iku">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              {/* IKU Chart */}
              <ArkhamCard withTerminalBorder className="lg:col-span-2">
                <div className="mb-4">
                  <h3 className="text-base font-semibold text-sky-300 font-mono uppercase tracking-wide">
                    Tren 8 IKU 2021-2025
                  </h3>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                    Indikator Kinerja Utama • Baseline 2025 • Target 2030
                  </p>
                </div>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={ikuTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(56, 110, 230, 0.08)" />
                    <XAxis dataKey="tahun" stroke="#5a6478" fontSize={11} tickLine={false} axisLine={{ stroke: "rgba(56, 110, 230, 0.2)" }} />
                    <YAxis stroke="#5a6478" fontSize={11} tickLine={false} axisLine={false} />
                    <RTooltip
                      contentStyle={{
                        backgroundColor: "rgba(10, 14, 26, 0.95)",
                        border: "1px solid rgba(56, 110, 230, 0.4)",
                        borderRadius: "6px",
                        color: "#fff",
                        fontSize: "12px",
                        fontFamily: "monospace",
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: "10px", fontFamily: "monospace" }} />
                    {IKU_LIST.map((iku, idx) => (
                      <Line
                        key={iku.no}
                        type="monotone"
                        dataKey={`IKU${iku.no}`}
                        stroke={
                          idx === 0 ? NAVY :
                          idx === 1 ? CYAN :
                          idx === 2 ? EMERALD :
                          idx === 3 ? AMBER :
                          idx === 4 ? ROSE :
                          idx === 5 ? NAVY_LIGHT :
                          idx === 6 ? PURPLE :
                          "#FBBF24"
                        }
                        strokeWidth={2}
                        dot={{ r: 3 }}
                        connectNulls
                        name={`IKU ${iku.no}: ${iku.nama.substring(0, 30)}...`}
                      />
                    ))}
                  </LineChart>
                </ResponsiveContainer>
              </ArkhamCard>

              {/* IKU List */}
              <ArkhamCard withTerminalBorder>
                <div className="mb-4">
                  <h3 className="text-base font-semibold text-sky-300 font-mono uppercase tracking-wide">
                    Detail 8 IKU
                  </h3>
                  <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                    Capaian tahun {selectedYear}
                  </p>
                </div>
                <ScrollArea className="h-[350px] scrollbar-thin pr-3">
                  <div className="space-y-2">
                    {IKU_LIST.map((iku) => {
                      const capaian = iku.capaian[selectedYear];
                      const target = typeof iku.target2030 === "number" ? iku.target2030 : 100;
                      const baseline = typeof iku.baseline2025 === "number" ? iku.baseline2025 : 0;
                      const capaianNum = typeof capaian === "number" ? capaian : 0;
                      const pct = capaian !== null ? Math.min((capaianNum / target) * 100, 100) : 0;
                      return (
                        <div key={iku.no} className="p-2.5 rounded border border-sky-500/15 bg-sky-500/[0.03] hover:border-sky-500/30 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded bg-sky-500/20 flex items-center justify-center text-[10px] font-bold font-mono text-sky-300">
                                {iku.no}
                              </span>
                              <span className="text-xs font-medium">{iku.nama}</span>
                            </div>
                            {iku.trend === "up" ? (
                              <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            ) : iku.trend === "down" ? (
                              <TrendingDown className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                            ) : null}
                          </div>
                          <div className="grid grid-cols-3 gap-1 text-[10px] mb-1.5 font-mono">
                            <div>
                              <p className="text-muted-foreground uppercase tracking-wider">{selectedYear}</p>
                              <p className="font-bold text-sky-300">{capaian ?? "—"}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground uppercase tracking-wider">Baseline</p>
                              <p className="font-bold text-amber-400">{baseline}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground uppercase tracking-wider">Target</p>
                              <p className="font-bold text-emerald-400">{target}</p>
                            </div>
                          </div>
                          <ProgressBar
                            value={capaian !== null ? pct : null}
                            size="sm"
                            showValue={false}
                            variant={pct >= 75 ? "success" : pct >= 50 ? "primary" : "warning"}
                          />
                          <p className="text-[9px] text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                            {iku.unit} • {capaian !== null ? `${pct.toFixed(0)}% to target` : "No Data"}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </ArkhamCard>
            </div>
          </TabsContent>

          {/* Tab: Dokumen Mutu */}
          <TabsContent value="dokumen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {DOKUMEN_MUTU.map((doc) => (
                <ArkhamCard key={doc.kode} variant="primary" withTerminalBorder className="flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-800/20 border border-sky-500/30 flex items-center justify-center glow-blue">
                      <FileCheck className="w-5 h-5 text-sky-300" />
                    </div>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                      {doc.status}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sky-300 text-sm mb-1 font-mono">{doc.nama}</h4>
                  <p className="text-[10px] text-muted-foreground mb-3">{doc.matchStandar}</p>
                  <div className="space-y-1.5 text-[10px] mt-auto font-mono">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground uppercase tracking-wider">Kode</span>
                      <code className="text-sky-300">{doc.kode}</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground uppercase tracking-wider">Hal</span>
                      <span className="font-bold">{doc.halaman}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground uppercase tracking-wider">Revisi</span>
                      <span className="font-bold">{doc.revisi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground uppercase tracking-wider">Penetapan</span>
                      <span className="font-bold">{doc.tanggalPenetapan}</span>
                    </div>
                  </div>
                </ArkhamCard>
              ))}
            </div>

            {/* Sinkronisasi Info */}
            <ArkhamCard withTerminalBorder>
              <div className="flex items-start gap-3">
                <Database className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sky-300 mb-1 font-mono uppercase tracking-wide text-sm">
                    Sinkronisasi 4 Dokumen Mutu • Pasal 66 Permen 39/2025
                  </h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    Keempat dokumen mutu telah disinkronisasi dengan prinsip triangulasi data
                    berbasis Pangkalan Data Pendidikan Tinggi (PD Dikti). Dashboard ini
                    mendukung multi-regulasi: tahun 2024 (Permendikbudristek 53/2023, 20 dokumen AMI)
                    dan tahun 2025 (Permen 39/2025, 15 dokumen AMI). Data bersumber dari triangulasi 3 sumber:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
                    <div className="p-2.5 rounded border border-sky-500/20 bg-sky-500/5">
                      <p className="text-[10px] font-bold text-sky-300 mb-1 font-mono uppercase tracking-wider">1. PD Dikti</p>
                      <p className="text-[10px] text-muted-foreground">
                        Data mahasiswa, dosen, kurikulum, lulusan, Tridharma terintegrasi nasional
                      </p>
                    </div>
                    <div className="p-2.5 rounded border border-emerald-500/20 bg-emerald-500/5">
                      <p className="text-[10px] font-bold text-emerald-300 mb-1 font-mono uppercase tracking-wider">2. Evaluasi Internal</p>
                      <p className="text-[10px] text-muted-foreground">
                        Hasil AMI, evaluasi diri, monitoring rutin, RTM oleh PPM/LPM/GKM
                      </p>
                    </div>
                    <div className="p-2.5 rounded border border-amber-500/20 bg-amber-500/5">
                      <p className="text-[10px] font-bold text-amber-300 mb-1 font-mono uppercase tracking-wider">3. Stakeholder Eksternal</p>
                      <p className="text-[10px] text-muted-foreground">
                        Akreditasi BAN-PT/LAM, umpan balik lulusan, DUDI, pengaduan masyarakat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ArkhamCard>
          </TabsContent>
        </Tabs>

        {/* Standar Detail Dialog */}
        <StandarDetailDialog
          standar={selectedStandar}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          tahun={selectedYear}
        />

        {/* Footer */}
        <footer className="mt-auto pt-6 pb-4 border-t border-sky-500/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <img src="/unita-logo.png" alt="UNITA" className="w-5 h-5 object-contain" />
              <span>
                SPMI UNITA • Pusat Penjaminan Mutu • Universitas Tulungagung
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span>SK A/002.I/KEP/UNITA/I/2025</span>
              <span className="text-muted-foreground/50">|</span>
              <span>Multi-Regulasi: Permen 53/2023 + 39/2025</span>
              <span className="text-muted-foreground/50">|</span>
              <span className="text-sky-300 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                {new Date().toLocaleDateString("id-ID")}
              </span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
