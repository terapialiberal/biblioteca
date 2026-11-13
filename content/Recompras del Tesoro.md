---
titulo: Recompras del Tesoro (buybacks)
fuente: https://home.treasury.gov/news/press-releases/sb0607
tipo: concepto
fecha: 2026-11-11
capa_tema: b
nivel_evidencia: alto
estado: activo
aliases:
  - Buyback del Tesoro
  - Recompras de deuda
  - Liquidity support buyback
tags:
  - plomeria
  - tesoro
  - buyback
  - duration
  - treasuries
  - control-financiero
  - tl-intel-v3
publish: true
sin_fuente: false
---

# Recompras del Tesoro (buybacks)

## BLUF

Cuando el Tesoro "recompra" deuda, no imprime nada. Retira un bono largo y lo paga emitiendo deuda corta. Es un **canje de duration**, no creación de dinero: el stock de deuda no baja, solo cambia de forma. Su efecto real opera sobre la **tasa larga**, y desde ahí sobre el precio de todos los activos.

## La mecánica

1. El Tesoro tiene un bono a 20-30 años en circulación.
2. Anuncia una operación y lo compra en el mercado secundario.
3. Para pagarlo, emite letras a 3-6 meses (más baratas y de menor duration).
4. Resultado: el sector privado tiene menos duration y más letras. El Tesoro tiene la misma deuda, con menor plazo promedio.

Efecto en reservas bancarias: **neto ~cero**. No es QE y no se parece.

## El dato (2026)

- 19-ago-2026: el Tesoro **al menos duplicó** el tamaño máximo por operación, de US$2.000 M a ≥US$4.000 M, en los tramos 10-20 años y 20-30 años.
- Modalidad: "liquidity support", ~4 operaciones por trimestre por tramo.
- Techo aproximado: ~US$32.000 M por trimestre = **~US$128.000 M al año\*\*.
- Contra qué se lo mide: US$1,26 billones de M2 nuevo al año (≈10%) y ~US$28 billones de deuda en circulación (≈0,5%).

## Lea esto como TL

Las recompras son reales, están anunciadas y son **públicas**: el calendario de operaciones se publica antes. Eso tiene dos consecuencias que casi nadie saca:

1. **El efecto se anticipa.** Si la fecha es pública, el mercado pone el precio antes de la operación. El "front-running del buyback" como ventaja no existe; es una operación anunciada.
2. **La palanca es la prima de plazo, no la cantidad.** Retirar duration del mercado privado presiona la tasa larga a la baja, y eso revaloriza todo lo demás. Un programa de US\$128.000 M no mueve el mercado por su tamaño: lo mueve por lo que **señala** sobre la tasa larga.

Y ahí está el punto TL: el buyback no es un caño de liquidez, es una **señal de política** con calendario. El que la lee bien no necesita que el número sea grande.

## Cómo se verifica

- Comunicado del Tesoro: incremento anunciado el 19-ago-2026 (`home.treasury.gov/news/press-releases/sb0607`)
- Calendario tentativo de operaciones (PDF público, por trimestre)
- `FRED:WALCL` para confirmar que el balance de la Fed **no** acompaña el movimiento

## Qué mata esta ficha

- "El Tesoro hace buybacks y de ahí salen los dólares" — no salen dólares; sale duration de las manos privadas.
- "Es QE encubierto" — QE crea reservas; esto las mueve.
- "Podés ganarle al buyback comprando antes" — el calendario es público.

## Con qué conecta

- [[De dónde sale el dólar]]
- [[El balance del banco central]]
- [[Tasa larga y múltiplos]]
- [[Treasuries]]
- [[00_MOC - Control Financiero]]

## Fuentes

- [Treasury Announces Increased Sizes of Nominal Long-End Liquidity Support — comunicado SB0607 — Tesoro de EE.UU.](https://home.treasury.gov/news/press-releases/sb0607) — recompras de deuda, verificado el 2026-11-12.
- Nota: la ficha se apoya en una sola fuente; falta un segundo documento de contraste.
