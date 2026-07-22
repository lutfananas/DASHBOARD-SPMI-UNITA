"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FileText,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Database,
  Trophy,
} from "lucide-react";
import { DOKUMEN_AMI_DETAIL } from "@/lib/ami-detail-data";
import { DOKUMEN_AMI_2024_DETAIL } from "@/lib/ami-2024-detail-data";
import { ArkhamCard } from "@/components/spmi/blockchain-card";

interface DetailAMISectionProps {
  tahun?: number;
}

function isStatusSuccess(status: string): boolean {
  return status === "Tercapai" || status === "Mencapai" || status === "Melebihi";
}

function isStatusExceeds(status: string): boolean {
  return status === "Melebihi";
}

export function DetailAMISection({ tahun = 2025 }: DetailAMISectionProps) {
  // Pilih dataset berdasarkan tahun yang dipilih
  const dokumenAMI = tahun === 2024 ? DOKUMEN_AMI_2024_DETAIL : DOKUMEN_AMI_DETAIL;
  const labelTahun = tahun === 2024 ? "2023/2024 (Permen 53/2023)" : "2024/2025 (Permen 39/2025)";

  const totalIndikator = dokumenAMI.reduce(
    (sum, doc) => sum + doc.indikator.length, 0
  );
  const totalTercapai = dokumenAMI.reduce(
    (sum, doc) => sum + doc.indikator.filter(i => isStatusSuccess(i.status)).length, 0
  );
  const totalMelebihi = dokumenAMI.reduce(
    (sum, doc) => sum + doc.indikator.filter(i => isStatusExceeds(i.status)).length, 0
  );
  const totalBelum = totalIndikator - totalTercapai;
  const persenTercapai = ((totalTercapai / totalIndikator) * 100).toFixed(1);

  return (
    <div className="mt-6 space-y-4">
      {/* Section Header */}
      <ArkhamCard variant="primary" withTerminalBorder>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
            <Database className="w-5 h-5 text-sky-300" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-sky-300 font-mono uppercase tracking-wide">
              Detail Hasil AMI per Dokumen — Tahun {tahun}
            </h3>
            <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
              {dokumenAMI.length} Dokumen AMI {labelTahun} • {totalIndikator} Indikator • {totalTercapai} Tercapai ({persenTercapai}%) • {totalBelum} Belum Tercapai {totalMelebihi > 0 && `• ${totalMelebihi} Melampaui Standar`}
            </p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
          <div className="p-3 rounded border border-sky-500/15 bg-sky-500/5">
            <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Total Dokumen AMI</p>
            <p className="text-2xl font-bold tabular-nums font-mono text-sky-300">{dokumenAMI.length}</p>
          </div>
          <div className="p-3 rounded border border-emerald-500/15 bg-emerald-500/5">
            <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Indikator Tercapai</p>
            <p className="text-2xl font-bold tabular-nums font-mono text-emerald-400">{totalTercapai}</p>
          </div>
          {totalMelebihi > 0 && (
            <div className="p-3 rounded border border-cyan-500/15 bg-cyan-500/5">
              <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Melampaui Standar</p>
              <p className="text-2xl font-bold tabular-nums font-mono text-cyan-400">{totalMelebihi}</p>
            </div>
          )}
          <div className="p-3 rounded border border-amber-500/15 bg-amber-500/5">
            <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Belum Tercapai</p>
            <p className="text-2xl font-bold tabular-nums font-mono text-amber-400">{totalBelum}</p>
          </div>
          <div className="p-3 rounded border border-sky-500/15 bg-sky-500/5">
            <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">Persentase Tercapai</p>
            <p className="text-2xl font-bold tabular-nums font-mono text-sky-300">{persenTercapai}%</p>
          </div>
        </div>

        {/* Info untuk tahun 2024 */}
        {tahun === 2024 && (
          <div className="p-3 rounded border border-amber-500/20 bg-amber-500/5 mb-2">
            <p className="text-xs text-amber-200/90 font-mono">
              <strong>Regulasi:</strong> Permendikbudristek 53/2023 tentang Penjaminan Mutu Pendidikan Tinggi.
              Audit dilaksanakan pada periode 10 November 2023 s.d. 4 Agustus 2024 oleh PPM UNITA.
              Skala penilaian menggunakan Likert 1-4 dan persentase capaian.
            </p>
          </div>
        )}
        {tahun === 2025 && (
          <div className="p-3 rounded border border-emerald-500/20 bg-emerald-500/5 mb-2">
            <p className="text-xs text-emerald-200/90 font-mono">
              <strong>Regulasi:</strong> Permen 39/2025 tentang Penjaminan Mutu Pendidikan Tinggi.
              Audit dilaksanakan sepanjang TA 2024/2025 oleh PPM UNITA.
              Data bersumber dari 15 dokumen AMI dengan total 212 indikator.
            </p>
          </div>
        )}
      </ArkhamCard>

      {/* Accordion per Dokumen AMI */}
      <Accordion type="single" collapsible className="space-y-3">
        {dokumenAMI.map((doc, idx) => {
          const tercapai = doc.indikator.filter(i => isStatusSuccess(i.status)).length;
          const melebihi = doc.indikator.filter(i => isStatusExceeds(i.status)).length;
          const belum = doc.indikator.filter(i => !isStatusSuccess(i.status)).length;
          const persen = ((tercapai / doc.indikator.length) * 100).toFixed(0);

          return (
            <AccordionItem
              key={doc.id}
              value={doc.id}
              className="border border-sky-500/15 rounded-lg overflow-hidden bg-card/60 backdrop-blur-md"
            >
              <AccordionTrigger className="px-4 py-3 hover:bg-sky-500/[0.03] hover:no-underline group">
                <div className="flex items-center gap-3 w-full">
                  <div className="w-8 h-8 rounded bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 text-sky-300" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-sky-300 font-mono">
                        {doc.namaDokumen}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400/80 border border-sky-500/20 uppercase tracking-wider">
                        {doc.kategori}
                      </span>
                    </div>
                    <p className="text-[10px] text-muted-foreground font-mono mt-0.5">
                      {doc.kodeDokumen} • {doc.tanggal} • {doc.indikator.length} indikator • Rata-rata: {doc.rataSkor}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {melebihi > 0 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-1">
                        <Trophy className="w-2.5 h-2.5" />
                        {melebihi} Melebihi
                      </span>
                    )}
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {tercapai} Tercapai
                    </span>
                    {belum > 0 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        {belum} Belum
                      </span>
                    )}
                    <span className="text-xs font-bold tabular-nums font-mono text-sky-300">
                      {persen}%
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 transition-transform group-data-[state=open]:rotate-180" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                {/* Standar Terkait */}
                <div className="mb-3 p-2 rounded border border-sky-500/10 bg-sky-500/[0.02]">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Standar Terkait: <span className="text-sky-300/80">{doc.standarTerkait}</span>
                  </p>
                </div>

                {/* Tabel Indikator */}
                <ScrollArea className="max-h-[400px] scrollbar-thin">
                  <Table>
                    <TableHeader className="sticky top-0 bg-card/95 backdrop-blur-md z-10">
                      <TableRow className="border-sky-500/15 hover:bg-transparent">
                        <TableHead className="w-10 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">#</TableHead>
                        <TableHead className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Indikator</TableHead>
                        <TableHead className="w-28 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Capaian</TableHead>
                        <TableHead className="w-28 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Target</TableHead>
                        <TableHead className="w-28 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {doc.indikator.map((ind) => {
                        const success = isStatusSuccess(ind.status);
                        const exceeds = isStatusExceeds(ind.status);
                        return (
                          <TableRow
                            key={ind.no}
                            className={`border-sky-500/8 ${!success ? "bg-amber-500/[0.03]" : exceeds ? "bg-cyan-500/[0.02]" : ""}`}
                          >
                            <TableCell className="font-mono text-xs text-muted-foreground tabular-nums">
                              {String(ind.no).padStart(2, "0")}
                            </TableCell>
                            <TableCell className="text-sm">
                              <span className={!success ? "text-amber-300/90" : exceeds ? "text-cyan-300" : "text-foreground"}>
                                {ind.indikator}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className={`text-xs font-mono font-bold tabular-nums ${exceeds ? "text-cyan-300" : "text-sky-300"}`}>
                                {ind.capaian}
                              </span>
                            </TableCell>
                            <TableCell>
                              <span className="text-xs font-mono text-muted-foreground">
                                {ind.target}
                              </span>
                            </TableCell>
                            <TableCell>
                              {exceeds ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                                  <Trophy className="w-3 h-3" />
                                  {ind.status}
                                </span>
                              ) : success ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                  <CheckCircle2 className="w-3 h-3" />
                                  {ind.status}
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                                  <XCircle className="w-3 h-3" />
                                  {ind.status}
                                </span>
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </ScrollArea>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
