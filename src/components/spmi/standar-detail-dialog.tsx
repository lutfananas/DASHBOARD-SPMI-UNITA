"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
import {
  GraduationCap,
  FlaskConical,
  HandHeart,
  Building2,
  TrendingUp,
  TrendingDown,
  Minus,
  X,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RTooltip,
  Area,
  AreaChart,
} from "recharts";
import {
  TAHUN_LIST,
  REGULASI_PER_TAHUN,
  type StandarSPMI,
} from "@/lib/spmi-data";
import {
  ArkhamCard,
  ProgressBar,
  StatusBadge,
  DataStatus,
} from "@/components/spmi/blockchain-card";

const NAVY = "#386EE6";
const NAVY_LIGHT = "#5BA8FF";
const EMERALD = "#10B981";
const AMBER = "#F59E0B";
const ROSE = "#F43F5E";

interface StandarDetailDialogProps {
  standar: StandarSPMI | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tahun?: number;
}

export function StandarDetailDialog({
  standar,
  open,
  onOpenChange,
  tahun = 2025,
}: StandarDetailDialogProps) {
  if (!standar) return null;

  // Build trend data for this standar
  const trendData = TAHUN_LIST.map((t) => {
    const ami = standar.ami[t];
    return {
      tahun: t.toString(),
      skor: ami?.skor ?? null,
      tindakLanjut: ami?.tindakLanjut ?? null,
    };
  });

  // Ambil data AMI sesuai tahun yang dipilih
  const amiSelected = standar.ami[tahun];
  const regulasi = REGULASI_PER_TAHUN[tahun];

  // Kategori icon
  const KategoriIcon = standar.kategori === "Pendidikan" ? GraduationCap :
    standar.kategori === "Penelitian" ? FlaskConical :
    standar.kategori === "PkM" ? HandHeart : Building2;

  const kategoriColor = standar.kategori === "Pendidikan" ? "text-sky-400" :
    standar.kategori === "Penelitian" ? "text-cyan-400" :
    standar.kategori === "PkM" ? "text-emerald-400" : "text-amber-400";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-card/95 backdrop-blur-md border-sky-500/30 p-0">
        <DialogHeader className="p-5 border-b border-sky-500/15">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <KategoriIcon className={`w-5 h-5 ${kategoriColor}`} />
              </div>
              <div>
                <DialogTitle className="text-lg font-bold text-sky-300 font-mono">
                  {standar.nama}
                </DialogTitle>
                <DialogDescription className="text-xs font-mono uppercase tracking-wider mt-1">
                  Kode: {standar.kode} • Kategori: {standar.kategori} • No: {standar.no}/33
                </DialogDescription>
                <p className="text-[10px] text-muted-foreground font-mono mt-0.5">
                  Penanggung Jawab: {standar.penanggungJawab}
                  {standar.rujukanPasal && ` • Rujukan: ${standar.rujukanPasal}`}
                </p>
                {regulasi && (
                  <p className="text-[10px] text-sky-300 font-mono mt-1">
                    Tahun {tahun} • {regulasi.permen} • {regulasi.judulPermen}
                  </p>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="overflow-y-auto scrollbar-thin max-h-[calc(90vh-140px)] p-5 space-y-4">
          {/* Summary KPI for this standar - sesuai tahun dipilih */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 rounded border border-sky-500/15 bg-sky-500/5">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Skor AMI {tahun}
              </p>
              <p className={`text-2xl font-bold tabular-nums font-mono ${
                amiSelected ? (amiSelected.skor >= 85 ? "text-emerald-400" :
                amiSelected.skor >= 75 ? "text-cyan-400" :
                amiSelected.skor >= 65 ? "text-amber-400" :
                amiSelected.skor >= 50 ? "text-orange-400" : "text-rose-400") : "text-muted-foreground/40"
              }`}>
                {amiSelected?.skor ?? "—"}
                <span className="text-sm text-muted-foreground">/100</span>
              </p>
            </div>
            <div className="p-3 rounded border border-sky-500/15 bg-sky-500/5">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Status {tahun}
              </p>
              <div className="mt-1">
                {amiSelected ? <StatusBadge status={amiSelected.status} /> : <span className="text-muted-foreground/40 text-xs font-mono">N/A</span>}
              </div>
            </div>
            <div className="p-3 rounded border border-sky-500/15 bg-sky-500/5">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Temuan {tahun}
              </p>
              <p className="text-2xl font-bold tabular-nums font-mono text-amber-400">
                {amiSelected?.temuan ?? "—"}
              </p>
            </div>
            <div className="p-3 rounded border border-sky-500/15 bg-sky-500/5">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Tindak Lanjut {tahun}
              </p>
              <p className="text-2xl font-bold tabular-nums font-mono text-emerald-400">
                {amiSelected ? `${amiSelected.tindakLanjut}%` : "—"}
              </p>
            </div>
          </div>

          {/* Chart: Tren Skor per Tahun */}
          <ArkhamCard withTerminalBorder>
            <h4 className="text-sm font-semibold text-sky-300 font-mono uppercase tracking-wide mb-3">
              Tren Skor AMI & Tindak Lanjut 2021-2025
            </h4>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorDetailSkor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={NAVY} stopOpacity={0.5} />
                    <stop offset="95%" stopColor={NAVY} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(56, 110, 230, 0.08)" />
                <XAxis dataKey="tahun" stroke="#5a6478" fontSize={11} tickLine={false} />
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
                  dataKey="skor"
                  stroke={NAVY}
                  strokeWidth={2}
                  fill="url(#colorDetailSkor)"
                  name="Skor AMI"
                  connectNulls
                  dot={{ r: 3, fill: NAVY }}
                />
                <Line
                  type="monotone"
                  dataKey="tindakLanjut"
                  stroke={EMERALD}
                  strokeWidth={2}
                  name="Tindak Lanjut (%)"
                  connectNulls
                  dot={{ r: 3, fill: EMERALD }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ArkhamCard>

          {/* Tabel Riwayat AMI per Tahun */}
          <ArkhamCard withTerminalBorder className="p-0 overflow-hidden">
            <div className="p-3 border-b border-sky-500/15">
              <h4 className="text-sm font-semibold text-sky-300 font-mono uppercase tracking-wide">
                Riwayat Hasil AMI per Tahun
              </h4>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border-sky-500/15 hover:bg-transparent">
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Tahun</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Regulasi</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Skor</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Status</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Temuan</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">PTK</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Tindak Lanjut</TableHead>
                  <TableHead className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Catatan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TAHUN_LIST.slice().reverse().map((t) => {
                  const ami = standar.ami[t];
                  const reg = REGULASI_PER_TAHUN[t];
                  const isCurrentYear = t === tahun;
                  return (
                    <TableRow
                      key={t}
                      className={`border-sky-500/8 ${isCurrentYear ? "bg-sky-500/[0.07]" : "hover:bg-sky-500/[0.03]"}`}
                    >
                      <TableCell className="font-mono text-sm font-bold tabular-nums">
                        {t}
                        {isCurrentYear && (
                          <span className="ml-1 text-[9px] text-sky-300 font-bold">●</span>
                        )}
                      </TableCell>
                      <TableCell className="font-mono text-[10px] text-muted-foreground">
                        {reg ? reg.permen.replace("Permendikbud ", "PM ").replace("Permendikbudristek ", "PM ").replace("& ", "") : "—"}
                      </TableCell>
                      <TableCell>
                        {ami ? (
                          <span className={`font-bold tabular-nums font-mono ${
                            ami.skor >= 85 ? "text-emerald-400" :
                            ami.skor >= 75 ? "text-cyan-400" :
                            ami.skor >= 65 ? "text-amber-400" :
                            ami.skor >= 50 ? "text-orange-400" : "text-rose-400"
                          }`}>
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
                      <TableCell className="font-mono tabular-nums">
                        {ami ? (
                          <span className="text-amber-400">{ami.temuan}</span>
                        ) : (
                          <span className="text-muted-foreground/40">—</span>
                        )}
                      </TableCell>
                      <TableCell className="font-mono tabular-nums">
                        {ami ? (
                          <span className="text-rose-400">{ami.ptK}</span>
                        ) : (
                          <span className="text-muted-foreground/40">—</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {ami ? (
                          <div className="w-24">
                            <ProgressBar
                              value={ami.tindakLanjut}
                              size="sm"
                              variant={
                                ami.tindakLanjut >= 85 ? "success" :
                                ami.tindakLanjut >= 70 ? "primary" :
                                ami.tindakLanjut >= 50 ? "warning" : "danger"
                              }
                            />
                          </div>
                        ) : (
                          <span className="text-muted-foreground/40 font-mono">—</span>
                        )}
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {ami ? ami.catatan : <span className="font-mono text-muted-foreground/40">Belum ada data</span>}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </ArkhamCard>

          {/* Sumber Dokumen AMI */}
          {amiSelected?.dokumenAMI && (
            <div className="p-3 rounded border border-sky-500/15 bg-sky-500/5">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                Sumber Dokumen AMI Tahun {tahun}
              </p>
              <p className="text-xs text-sky-300 font-mono">{amiSelected.dokumenAMI}</p>
              {amiSelected.tanggalAMI && (
                <p className="text-[10px] text-muted-foreground font-mono mt-1">
                  Tanggal Audit: {amiSelected.tanggalAMI}
                </p>
              )}
            </div>
          )}

          {/* Info */}
          <div className="p-3 rounded border border-sky-500/15 bg-sky-500/5 text-xs text-muted-foreground">
            <p className="font-mono">
              <span className="text-sky-300 font-bold">Catatan:</span> Data AMI multi-tahun.
              Tahun 2023: Permendikbud 3/2020 & 5/2020 (14 dokumen AMI).
              Tahun 2024: Permendikbudristek 53/2023 (20 dokumen AMI).
              Tahun 2025: Permen 39/2025 (15 dokumen AMI).
              Baris yang disorot biru menunjukkan tahun yang sedang dipilih ({tahun}).
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
