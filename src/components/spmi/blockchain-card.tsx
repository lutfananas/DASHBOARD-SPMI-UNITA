"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ArkhamCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  withTerminalBorder?: boolean;
}

export function ArkhamCard({
  children,
  className,
  variant = "default",
  withTerminalBorder = false,
}: ArkhamCardProps) {
  const variantClasses = {
    default: "border-sky-500/15 hover:border-sky-500/40 hover:bg-sky-500/[0.03]",
    primary: "border-sky-500/40 hover:border-sky-500/60 glow-blue",
    success: "border-emerald-500/30 hover:border-emerald-500/50 hover:bg-emerald-500/[0.03]",
    warning: "border-amber-500/30 hover:border-amber-500/50 hover:bg-amber-500/[0.03]",
    danger: "border-rose-500/30 hover:border-rose-500/50 hover:bg-rose-500/[0.03]",
  };

  return (
    <div
      className={cn(
        "relative rounded-md border bg-card/60 backdrop-blur-md p-4 transition-all duration-300 card-hover-lift",
        variantClasses[variant],
        withTerminalBorder && "terminal-border",
        className
      )}
    >
      {children}
    </div>
  );
}

interface KpiCardProps {
  title: string;
  value: string | number | null;
  unit?: string;
  trend?: number | null;
  icon?: React.ReactNode;
  sublabel?: string;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
}

export function KpiCard({
  title,
  value,
  unit,
  trend,
  icon,
  sublabel,
  variant = "default",
}: KpiCardProps) {
  const variantColor = {
    default: "text-sky-400",
    primary: "text-sky-300",
    success: "text-emerald-400",
    warning: "text-amber-400",
    danger: "text-rose-400",
  };

  const variantGlow = {
    default: "glow-blue",
    primary: "glow-blue-strong",
    success: "glow-emerald",
    warning: "glow-amber",
    danger: "glow-rose",
  };

  return (
    <ArkhamCard variant={variant} withTerminalBorder className="overflow-hidden">
      <div className="flex items-start justify-between mb-2">
        <div className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-semibold">
          {title}
        </div>
        {icon && <div className={variantColor[variant]}>{icon}</div>}
      </div>
      <div className="flex items-baseline gap-1">
        {value === null ? (
          <span className="text-3xl font-bold tabular-nums text-muted-foreground/40">—</span>
        ) : (
          <span className={cn("text-3xl font-bold tabular-nums", variantColor[variant])}>
            {value}
          </span>
        )}
        {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
      </div>
      <div className="flex items-center justify-between mt-2">
        {sublabel && <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{sublabel}</span>}
        {trend !== null && trend !== undefined && (
          <span
            className={cn(
              "text-xs font-medium px-1.5 py-0.5 rounded font-mono",
              trend >= 0
                ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                : "text-rose-400 bg-rose-500/10 border border-rose-500/20"
            )}
          >
            {trend >= 0 ? "▲" : "▼"} {Math.abs(trend).toFixed(1)}%
          </span>
        )}
      </div>
    </ArkhamCard>
  );
}

interface ProgressBarProps {
  value: number | null;
  max?: number;
  label?: string;
  showValue?: boolean;
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = true,
  variant = "default",
  size = "md",
}: ProgressBarProps) {
  const percentage = value === null ? 0 : Math.min((value / max) * 100, 100);
  const actualValue = value === null ? null : value;
  const variantColor = {
    default: "bg-sky-500",
    primary: "bg-sky-400",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-rose-500",
  };
  const sizeClass = {
    sm: "h-1",
    md: "h-1.5",
    lg: "h-2.5",
  };

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between mb-1 text-xs">
          {label && <span className="text-muted-foreground">{label}</span>}
          {showValue && (
            <span className="font-mono tabular-nums">
              {actualValue === null ? "—" : `${actualValue}${max === 100 ? "%" : `/${max}`}`}
            </span>
          )}
        </div>
      )}
      <div className={cn("w-full bg-muted/30 rounded-full overflow-hidden", sizeClass[size])}>
        <div
          className={cn("h-full rounded-full transition-all duration-700", variantColor[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface StatusBadgeProps {
  status: string;
  variant?: "MS" | "ML" | "BS" | "MSV";
}

export function StatusBadge({ status, variant }: StatusBadgeProps) {
  const colorMap = {
    MS: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    ML: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    BS: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    MSV: "bg-rose-500/15 text-rose-400 border-rose-500/30",
  };

  const labelMap = {
    MS: "MS",
    ML: "ML",
    BS: "BS",
    MSV: "MSV",
  };

  const v = variant || (status as keyof typeof colorMap);

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-bold border tracking-wider",
        colorMap[v] || colorMap.BS
      )}
    >
      {labelMap[v] || status}
    </span>
  );
}

interface LiveIndicatorProps {
  label?: string;
  variant?: "blue" | "emerald";
}

export function LiveIndicator({ label = "LIVE", variant = "emerald" }: LiveIndicatorProps) {
  const colorClass = variant === "emerald" ? "pulse-emerald" : "pulse-blue";
  const bgClass = variant === "emerald" ? "bg-emerald-500/10 border-emerald-500/30" : "bg-sky-500/10 border-sky-500/30";
  const textClass = variant === "emerald" ? "text-emerald-400" : "text-sky-400";
  const dotClass = variant === "emerald" ? "bg-emerald-400" : "bg-sky-400";

  return (
    <div className={cn("inline-flex items-center gap-2 px-2.5 py-1 rounded-full border", bgClass)}>
      <span className={cn("w-2 h-2 rounded-full", dotClass, colorClass)} />
      <span className={cn("text-[10px] font-mono font-bold tracking-wider", textClass)}>{label}</span>
    </div>
  );
}

interface DataStatusProps {
  hasData: boolean;
  label?: string;
}

export function DataStatus({ hasData, label = "Data belum tersedia" }: DataStatusProps) {
  if (hasData) return null;
  return (
    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-muted/20 border border-muted/30 text-muted-foreground">
      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
      {label}
    </div>
  );
}
