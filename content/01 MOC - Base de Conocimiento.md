---
titulo: 🗺️ MOC - Base De Conocimiento
tipo: "concepto"
fecha: 2026-02-25
tier-primario: "b"
nivel-evidencia: "medio"
tags: [base, conocimiento]
publish: true
---
# 🗺️ MOC - Base De Conocimiento

Mapa maestro y índice de toda la Base de Conocimiento sobre Deep State, organizaciones de élite, y eventos profundos.

> [!TIP]
> Este índice se actualiza automáticamente gracias al plugin **Dataview**.

## Instrucciones Y Guías
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE startswith(file.name, "00")
SORT file.name ASC
```

## Cronologías (Timelines)
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE tipo = "timeline"
SORT file.name ASC
```

## Agencias De Inteligencia
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE tipo = "organización" AND (contains(tags, "inteligencia") OR contains(file.name, "CIA") OR contains(file.name, "NSA") OR contains(file.name, "OSS") OR contains(file.name, "MI6"))
SORT file.name ASC
```

## Organizaciones De Élite Globalista
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE tipo = "organización" AND (contains(tags, "globalismo") OR contains(tags, "elite") OR contains(file.name, "Bilderberg") OR contains(file.name, "CFR") OR contains(file.name, "Trilateral") OR contains(file.name, "WEF"))
SORT file.name ASC
```

## Personas Y Actores (Tiers)

### 🎩 Tier A (Dueños)
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE tipo = "persona" AND tier = "A"
SORT file.name ASC
```

### 💼 Tier B (Ejecutores Y Conectores)
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE (tipo = "persona" OR tipo = "organización") AND tier = "B"
SORT file.name ASC
```

### 🏛️ Tier C (Teatro)
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE tipo = "persona" AND tier = "C"
SORT file.name ASC
```

## Eventos Y Operaciones
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE tipo = "evento" OR tipo = "actividad"
SORT file.name ASC
```

## Conceptos Y Libros
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE tipo = "concepto" OR tipo = "libro"
SORT file.name ASC
```

## Otras Organizaciones
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE tipo = "organización" AND !contains(tags, "inteligencia") AND !contains(tags, "globalismo") AND !contains(file.name, "Bilderberg") AND !contains(file.name, "CFR") AND !contains(file.name, "Trilateral") AND !contains(file.name, "WEF")
SORT file.name ASC
```

## Artículos Y Fuentes Externas
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE tipo = "noticia" OR tipo = "fuente"
SORT file.name ASC
```

---

## Archivos De Referencia (Meta)
```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE startswith(file.name, "01") AND file.name != "01 MOC - Base de Conocimiento"
SORT file.name ASC
```

## Nuevas Semillas (Gap Analysis)

> [!NOTE]
> Notas generadas automáticamente para llenar los 100 huecos detectados.

```dataview
LIST
FROM #estado/semilla
SORT file.name ASC
```

## Mantenimiento (Sin Tipo Asignado)

> [!WARNING]
> Notas que necesitan set clasificadas (falta `tipo` en frontmatter).

```dataview
LIST
FROM "03_Base_de_Conocimiento"
WHERE !tipo AND !startswith(file.name, "00") AND !startswith(file.name, "01")
SORT file.name ASC
```







