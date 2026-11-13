---
titulo: El déficit como inyección
fuente: https://fred.stlouisfed.org/series/FYFSD
tipo: concepto
fecha: 2026-11-11
capa_tema: b
nivel_evidencia: alto
estado: activo
aliases:
  - Déficit fiscal
  - Balances sectoriales
  - Identidad sectorial
tags:
  - plomeria
  - deficit
  - fiscal
  - balances-sectoriales
  - control-financiero
  - tl-intel-v3
publish: true
sin_fuente: false
---

# El déficit como inyección

## BLUF

Un déficit no es "deuda que se acumula": es **gasto que alguien cobró**. Cuando el Tesoro gasta más de lo que recauda, ese exceso entra como ingreso a hogares, empresas y bancos, y una parte queda como depósito (M2). El stock de deuda es el residuo contable; el flujo es la transferencia real.

## La identidad

```
Déficit público = Gasto − Impuestos
```

Y la identidad de balances sectoriales, que es la que ordena todo:

```
(S − I)sector privado + (T − G)sector público + (X − M)sector externo = 0
```

Los tres sectores no pueden tener superávit a la vez. Si el Estado gasta de más, **alguien** tiene que tener superávit: o el sector privado ahorra más de lo que invierte, o el resto del mundo le vende más de lo que le compra. No es una opinión sobre política económica: es una suma que cierra en cero.

## El dato (FY2026, cerrado 30-sep-2026)

- Déficit: **−US\$1,99 billones**
- PBI nominal: ~US\$33,0 billones
- Peso: **~6% del PBI**, todos los años, no un evento
- Serie histórica: −0,98 (FY19) → −3,13 (FY20) → −1,78 (FY25) → −1,99 (FY26)

Contra eso, el balance de la Fed movió US\$196.000 M en el mismo año. El déficit es **diez veces** el aporte del banco central.

## Lea esto como TL

Esto reencuadra la pregunta de poder. Si la transferencia corre por el déficit, el actor que importa no es el banquero central: es el que decide en qué se gasta y a quién se le paga. Contratistas, transferencias, rescates sectoriales, gasto militar: cada línea del presupuesto es un destinatario con nombre.

Y hay un corolario incómodo para el relato fácil: **el déficit crea ingreso**. No es solo un costo futuro. Es, hoy, la fuente del ingreso que después aparece como "el mercado subió". El que cobra del Estado y compra activos con ese dinero es parte del circuito, no un espectador.

## Cómo se verifica

- `FRED:FYFSD` — déficit fiscal anual (cierra 30-sep)
- `FRED:GDP` — PBI nominal para el ratio
- `FRED:M2SL` — para ver cuánto del déficit aterrizó como depósito
- Treasury Monthly Statement / Fiscal Data para el detalle por línea

## Qué mata esta ficha

- "La deuda se paga con impuestos futuros" como si no fuera ya una transferencia presente y fechada.
- "El déficit no genera dinero" — genera ingreso, y una parte queda como M2.
- "El problema es el stock de deuda" — el stock es el residuo; el flujo es lo que transfiere todos los años.

## Con qué conecta

- [[De dónde sale el dólar]]
- [[Quién absorbe la deuda]]
- [[Deuda Soberana]]
- [[Impuesto Inflacionario]]
- [[00_MOC - Control Financiero]]

## Fuentes

- [FYFSD — Déficit/superávit federal (serie) — FRED](https://fred.stlouisfed.org/series/FYFSD) — fuente declarada al crear la ficha (2026-11-11).
- [Monthly Treasury Statement — Tesoro de EE.UU.](https://fiscaldata.treasury.gov/datasets/monthly-treasury-statement/summary-of-receipts-outlays-and-the-deficit-surplus-of-the-u-s-government) — espejo oficial del mismo dato, verificado el 2026-11-12 (FRED no respondió desde esta red).
