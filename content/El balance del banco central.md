---
titulo: El balance del banco central
fuente: https://fred.stlouisfed.org/series/WALCL
tipo: concepto
fecha: 2026-11-11
capa_tema: b
nivel_evidencia: alto
estado: activo
aliases:
  - Balance de la Fed
  - Activos igual pasivos
  - WALCL
tags:
  - plomeria
  - reserva-federal
  - qe
  - qt
  - balance
  - control-financiero
  - tl-intel-v3
publish: true
sin_fuente: false
---

# El balance del banco central

## BLUF

El balance de la Reserva Federal no es un tanque de plata: es una igualdad contable. De un lado tiene activos (bonos); del otro, pasivos (efectivo, reservas bancarias, reverse repo, cuenta del Tesoro). Comprar activos **expande** el balance y crea reservas; vender o dejar vencer **lo achica y las destruye**. Por eso "achicar el balance" nunca financió nada: es lo contrario de financiar.

## La identidad

```
ACTIVOS  =  PASIVOS
Treasuries + MBS  =  efectivo + reservas + RRP + TGA + capital
```

Nada de eso es dinero del contribuyente ni una caja disponible. Es la contrapartida de lo que el sistema bancario tiene depositado en la Fed.

- **QE** = la Fed compra bonos y paga creando reservas. Balance arriba, reservas arriba.
- **QT** = deja vencer o vende bonos. Balance abajo, reservas abajo. **No hay flujo hacia nadie**: se borra.
- **Un buyback del Tesoro** no toca ninguno de los dos lados de esta igualdad de forma neta: mueve reservas entre cuentas y cambia qué bono tiene el público.

## El dato

| Fecha | Balance |
|---|---|
| Pico (2022) | ~US$8,97 billones |
| Mínimo del ciclo (nov-2025) | US$6,55 billones |
| Hoy (nov-2026) | US\$6,748 billones |

O sea: el QT terminó a fines de 2025 y desde entonces la Fed viene **sumando** ~US\$200.000 M en doce meses. Sigue siendo un número chico al lado del déficit, pero la dirección sorprende a casi todo el que escribe sobre esto.

## Lea esto como TL

El balance del banco central es el mejor ejemplo de por qué TL tiene que saber contabilidad y no solo narrativa. La narrativa dice "achican el balance"; la contabilidad dice que achicar es exactamente lo que **no** hace nadie que quiera inyectar liquidez. Quien afirme lo contrario no miró la igualdad.

Y hay un corolario de poder: el balance es donde se decide **qué colateral es elegible**. No es solo cuánto, es cuál. Ahí el banco central ejerce una potestad que ningún mercado vota.

## Cómo se verifica

- `FRED:WALCL` — activos totales, semanal
- `FRED:RRPONTSYD` — reverse repo (el pasivo que se vació)
- `FRED:WTREGEN` — cuenta del Tesoro (el pasivo que subió a ~US\$1 billón)
- `FRED:WSHOTSL` / `WSHOMCB` — composición: Treasuries y MBS por separado

## Qué mata esta ficha

- "Los dólares salen de achicar el balance" — imposible por construcción.
- "El balance de US\$7 billones es plata que la Fed puede gastar" — es el pasivo del sistema bancario.
- "QE y buyback son lo mismo" — uno crea reservas, el otro las mueve.

## Con qué conecta

- [[De dónde sale el dólar]]
- [[Recompras del Tesoro]]
- [[Quantitative Easing]]
- [[Reserva Federal]]
- [[00_MOC - Control Financiero]]

## Fuentes

- [WALCL — Activos totales de la Reserva Federal (serie) — FRED](https://fred.stlouisfed.org/series/WALCL) — fuente declarada al crear la ficha (2026-11-11).
- [H.4.1 — Factors Affecting Reserve Balances — Reserva Federal](https://www.federalreserve.gov/releases/h41/current/) — espejo oficial de la misma serie, verificado el 2026-11-12 (FRED no respondió desde esta red).
