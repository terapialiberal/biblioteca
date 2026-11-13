---
titulo: Tasa larga y múltiplos
fuente: https://fred.stlouisfed.org/series/DGS10
tipo: concepto
fecha: 2026-11-11
capa_tema: b
nivel_evidencia: alto
estado: activo
aliases:
  - Tasa de descuento
  - Prima de plazo
  - Duration y múltiplos
tags:
  - plomeria
  - tasas
  - duration
  - valuacion
  - control-financiero
  - tl-intel-v3
publish: true
sin_fuente: false
---

# Tasa larga y múltiplos

## BLUF

El precio de un activo no es su ganancia: es su ganancia descontada. Mover la **tasa larga** mueve el precio de todos los activos a la vez sin que cambie una sola ganancia. Por eso "el mercado subió porque hay plata" y "el mercado subió porque bajó la tasa de descuento" describen lo mismo — pero solo la segunda se puede chequear.

## La identidad

```
Precio = flujo / (tasa de descuento − crecimiento)

tasa de descuento = tasa libre de riesgo + prima de riesgo
```

Con crecimiento constante, si la tasa de descuento baja de 5% a 4,5%, el múltiplo sube ~11%. Con la misma empresa, la misma ganancia, el mismo management. Nada cambió salvo el precio del dinero.

Eso es lo que hace que un programa de recompras de US\$128.000 M pueda sentirse enorme: no mueve la caja de nadie, mueve la tasa, y la tasa mueve **todo el mercado** a la vez.

## El orden causal

1. Alguien retira duration del mercado privado (buyback, QE, o simplemente no emite largo).
2. La tasa larga baja.
3. La tasa de descuento baja.
4. Los múltiplos suben, sin cambio en ganancias.
5. La valorización resultante se lee como "riqueza creada".

El paso 5 es el error. No se creó riqueza: se revalorizó al nuevo precio del dinero. Y eso **solo es riqueza para el que ya tenía el activo antes del paso 2**. Para el que llega después, es el precio de entrada.

## Lea esto como TL

Cantillon, pero al revés de como se cuenta siempre. No hace falta que el dinero nuevo te llegue a la mano: alcanza con que **estés posicionado antes de que la tasa se mueva**. La transferencia no requiere un sobre con billetes; requiere una posición tomada un día antes.

Y esto explica por qué la "distribución" que todo el mundo intuye no es un evento técnico: es el momento en que los que compraron al precio viejo venden al precio nuevo. Lo único observable es el precio de entrada de cada uno, y eso casi nunca se publica.

## Cómo se verifica

- `FRED:DGS10` / `DGS30` — tasa larga nominal
- `FRED:DFII10` — tasa real a 10 años
- `FRED:T10Y2Y` — pendiente de la curva (la prima de plazo vive acá)
- `FRED:M2V` — velocidad: si sube, la relación dinero-precio cambia de signo

## Qué mata esta ficha

- "Los bonistas venden y reinvierten en acciones" — no hace falta: la tasa hace el trabajo por ellos.
- "El mercado subió por la impresora" — subió por la tasa de descuento; la impresora es una de sus causas, no la única.
- "La burbuja se mide por el múltiplo" — el múltiplo sin la tasa al lado no dice nada.

## Con qué conecta

- [[Recompras del Tesoro]]
- [[El balance del banco central]]
- [[Cantillon Effect]]
- [[Represion Financiera]]
- [[00_MOC - Control Financiero]]

## Fuentes

- [DGS10 — Rendimiento del bono a 10 años (serie) — FRED](https://fred.stlouisfed.org/series/DGS10) — fuente declarada al crear la ficha (2026-11-11).
- [Daily Treasury Rates — Tesoro de EE.UU.](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve) — espejo oficial de la misma tasa, verificado el 2026-11-12 (FRED no respondió desde esta red).
