---
publish: true
created: 2026-02-25T21:18:02.942-03:00
modified: 2026-06-02T15:42:02.346-03:00
tags:
  - moc
  - navegacion
  - vault
  - tl-intel-v3
---

# MOC - Navegacion del Vault

> Mapa operativo para navegar el vault actual sin depender de rutas legacy.

## Uso

Este MOC existe para orientar al agente y al operador cuando el vault cambia de estructura. No reemplaza al índice maestro ni a los MOC temáticos: funciona como brújula rápida para saber dónde buscar y dónde no dejar archivos sueltos.

## Rutas vivas

- `01_Research/`: señales, radares y capturas iniciales.
- `02_Preproduccion/`: investigación, hipótesis y desarrollo de tesis.
- `03_Produccion/`: casos activos en estructura plana, listos para stream o publicación.
- `04_Base_de_Conocimiento/`: wiki viva reutilizable, con notas compactas pero densas.
- `06_Videos_Publicados/`: archivo histórico y ganancia cognitiva neta.
- `99_AI/`: memoria, prompts, protocolos y contexto operativo de agentes.

## Regla TL

Si una nota no es reutilizable como wiki, no debería vivir en `04_Base_de_Conocimiento/`. Si es un recorte, staging o fuente cruda, debe quedar marcado como `import`, `contenedor` o moverse a carpeta de trabajo cuando se haga la curaduría.
