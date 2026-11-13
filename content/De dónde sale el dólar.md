---
titulo: De dónde sale el dólar
fuente: https://fred.stlouisfed.org/series/M2SL
tipo: concepto
fecha: 2026-11-11
capa_tema: b
nivel_evidencia: alto
estado: activo
aliases:
  - Origen del M2
  - Tres caños del dinero
  - Fuente de creación de dinero
tags:
  - plomeria
  - m2
  - deficit
  - reserva-federal
  - control-financiero
  - tl-intel-v3
publish: true
sin_fuente: false
---

# De dónde sale el dólar

## BLUF

El dólar nuevo no sale de un solo caño. Sale de tres, y en 2026 el que manda es el **déficit fiscal**, no la Reserva Federal. Confundir los tres es el error que produce todas las tesis monetarias falsas: "la Fed imprime" describe 2020; "el Tesoro emite y gasta" describe hoy.

## La identidad

M2 (los depósitos y el efectivo que usa la gente) se crea por tres vías distintas, con responsables distintos:

| Caño | Quién lo abre | Qué pasa | Dónde se ve |
|---|---|---|---|
| **Base** | Reserva Federal | compra activos, paga con reservas | balance de la Fed (WALCL) |
| **Crédito** | bancos comerciales | presta, crea depósito de la nada | M2, sin cambio en el balance de la Fed |
| **Fiscal** | Tesoro | gasta más de lo que recauda; el gasto aterriza como depósito | déficit + M2 |

Los tres suman. Ninguno es "el" emisor.

## El dato que importa (12 meses a noviembre 2026)

| Serie | Nivel | Movimiento |
|---|---|---|
| Déficit federal FY2026 | −US$1,99 billones | empeoró desde −1,78 |
| M2 | US$23,41 billones | \*\*+US$1,26 billones** |
| Balance de la Fed | US$6,748 billones | +US$196.000 M |
| Cuenta del Tesoro (TGA) | ~US$1,00 billón | +96.000 M (drena) |
| Reverse repo (RRP) | ~US\$5.000 M | agotado (era 615.000 M en ene-24) |

Lectura: de US$1,26 billones de M2 nuevo, la Fed explica ~US$196.000 M (15%). El resto nace del gasto deficitario y del crédito. El buyback del Tesoro explica **cero dólares**.

## Lea esto como TL

La pregunta "¿quién imprime?" es la pregunta equivocada. La correcta es **"¿quién decide el caño que está abierto?"**. En 2026 ese decisor no es el banco central: es el que firma un déficit de dos billones al año y decide en qué se gasta. Eso cambia el mapa de poder: no hay que mirar solo al que fija la tasa, hay que mirar al que gasta.

## Cómo se verifica

- `FRED:FYFSD` — déficit fiscal anual
- `FRED:M2SL` — stock de M2
- `FRED:WALCL` — balance de la Fed
- `FRED:WTREGEN` — cuenta del Tesoro (TGA)
- `FRED:RRPONTSYD` — reverse repo

Regla operativa: los cinco se leen juntos o no se lee ninguno. Un número de M2 sin el déficit al lado no dice nada.

## Qué mata esta ficha

- "Los dólares salen de achicar el balance de la Fed" → invertido dos veces: achicar drena, y la Fed no achica desde nov-2025.
- "El buyback es el caño de liquidez" → es un canje, no crea reservas.
- "La Fed imprime y por eso sube el mercado" → en 2026 la Fed aporta 15% del M2 nuevo.

## Con qué conecta

- [[El balance del banco central]]
- [[El déficit como inyección]]
- [[Recompras del Tesoro]]
- [[Cantillon Effect]]
- [[00_MOC - Control Financiero]]

## Fuentes

- [M2SL — Masa monetaria M2 (serie) — FRED](https://fred.stlouisfed.org/series/M2SL) — fuente declarada al crear la ficha (2026-11-11).
- [H.6 — Money Stock Measures — Reserva Federal](https://www.federalreserve.gov/releases/h6/current/) — espejo oficial de la misma serie, verificado el 2026-11-12 (FRED no respondió desde esta red).
