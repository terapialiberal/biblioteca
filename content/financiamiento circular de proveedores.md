---
titulo: "Financiamiento circular de proveedores"
tipo: mecanismo
fecha: 2026-11-12
estado: activo
capa_tema: "b"
nivel_evidencia: "alto"
tags: [mecanismo, ipo, ia, financiamiento, gobernanza-corporativa, tl-intel-v3]
publish: true
aliases: ["circuito cerrado de proveedores", "vendor financing", "proveedor accionista"]
---

# Financiamiento circular de proveedores

> [!ABSTRACT] En una línea
> El proveedor le factura el insumo al cliente, cobra, y con esa misma plata compra capital del cliente al precio de la emisión. El ingreso vuelve como equity.

## Cómo funciona

1. El cliente compra cómputo, insumos o servicios al proveedor.
2. El proveedor factura y cobra: registra el ingreso.
3. El proveedor compra acciones del cliente en la colocación privada, a precio de IPO.
4. El libro de la emisión aparece cubierto sin que entre demanda externa.

El circuito no es ilegal ni oculto: está declarado en el prospecto. Lo que hace es **reciclar el propio ingreso del cliente como capital**, y sustituir demanda del público por demanda de la cadena de suministro.

## Cómo se ve en la IPO de Anthropic (noviembre 2026)

- **26.000 millones de dólares** en acciones clase N compradas al precio de la IPO por siete empresas: [[Nvidia]], Alphabet, AMD, Broadcom, Micron, Microsoft y TSMC.
- El propio S-1 describe a las siete como parte de la cadena que le da cómputo a [[Anthropic]].
- El filing no desglosa el monto por comprador; la prensa reporta 10.000 millones para Nvidia y 10.000 para Alphabet.
- Sumado a la emisión pública, el paquete llega a unos 90.400 millones de dólares.

## Por qué importa

- **Doble contabilidad del mismo dólar:** si el proveedor le vende 1.000 y le compra 1.000 de capital, ambos lados registran una transacción que no creó capacidad nueva.
- **Cobertura sin demanda externa:** el libro puede aparecer sobre suscrito sin que un solo fondo ajeno al negocio haya comprado.
- **Riesgo correlacionado:** si el papel cae, el proveedor marca a la baja su propia colocación y su facturación futura depende del mismo cliente que lo hizo perder.
- **Señal de época:** aparece cuando el capital escasea y las tasas largas encarecen la deuda — el mismo mes en que el bono a diez años ronda el 5%.

## Falsadores

- **Se rompe si:** los siete proveedores no venden al vencer el bloqueo y el papel sostiene el precio con demanda externa verificable (13F de fondos sin vínculo comercial con Anthropic).
- **Se rompe si:** el precio se forma muy por encima de la banda con sobresuscripción de institucionales ajenos a la cadena de cómputo.
- **Se confirma si:** los compromisos de compra de Anthropic caen mientras la colocación privada crece — ahí el circuito es la única demanda que queda.
- **Riesgo de lectura:** un proveedor que compra capital de su cliente también puede estar asegurando capacidad, no financiándolo. La diferencia se ve en si vende antes o después del vencimiento del bloqueo.

## Iteraciones

### IT-2026-11-12-01 — ¿El circuito explica el escándalo de Nvidia?

Discutido el 2026-11-12. La hipótesis de Nico era que el escándalo cubría el movimiento de liquidez hacia Anthropic; lo que resistió fue el mecanismo, no la coordinación. Detalle y tests en [[Jensen Huang]].

## Conexiones

- [[Anthropic]] — caso testigo
- [[Nvidia]] — proveedor y comprador de 10.000 millones
- [[Jensen Huang]] — el conflicto de gobernanza que el circuito vuelve relevante

## Fuentes

- [Anthropic sets price range of $70 to $78 — CNBC — 2026-11-10](https://www.cnbc.com/2026/11/10/anthropic-sets-price-range-of-70-to-78-in-upcoming-ipo.html)
- [Google, Nvidia, AMD and others to invest \$26B alongside IPO — Yahoo Finance — 2026-11-10](https://finance.yahoo.com/technology/ai/articles/google-nvidia-amd-others-invest-120521300.html)
- [Anthropic's IPO brings in \$26 billion from seven of its own suppliers — Data Center Index — 2026-11-11](https://datacenterindex.ai/insights/anthropic-ipo-26-billion-from-seven-of-its-own-suppliers)
