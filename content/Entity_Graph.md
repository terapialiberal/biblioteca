---
publish: true
tipo: alias-operativo
titulo: Entity_Graph
estado: activo
tags:
  - alias
  - memoria-operativa
  - agentes
  - tl-intel-v3
canonico: 99_AI/05_Memoria_Central/Entity_Graph.yaml
---

# Entity\_Graph

Puente hacia el grafo operativo vivo: `99_AI/05_Memoria_Central/Entity_Graph.yaml`.

**Estado:** ACTIVO — poblado el 16-jul-2026 escaneando `04_Base_de_Conocimiento/` (3065 notas, 10059 edges). Se regenera con `tl-entity-graph` tras cada archivo nuevo en la KB.

**Qué contiene:**

- `entities`: cada nota de la KB como nodo. Campos: `aliases` (del frontmatter), `file`, `links_to` (wikilinks resueltos a otras notas de la KB).
- Los wikilinks de los radares (agregados 16-jul) alimentan los edges automáticamente.

**Uso para LLMs:** cargar el YAML para resolver entidades, proponer conexiones cruzadas y no depender de Obsidian. El LLM usa `links_to` para sugerir cruces no pedidos (regla anti-transcripción del 15-jul).

**No es source of truth de Obsidian:** Obsidian resuelve wikilinks solo por proximidad de archivos. Este YAML es la vista legible para agentes.

---

_Generado: 2026-07-16 · TL-INTEL V.3_
