# Wenima

Este proyecto utiliza Next.js (App Router) y sigue las mejores prácticas de arquitectura y organización de carpetas.

## Estructura principal

```
app/
  components/
    common/           # Componentes reutilizables (ej: FlipLink)
    layout/           # Header, Footer, NavBar, CustomCursor
    participants/     # Participantes y subcomponentes
    scroll/           # Scroll y subcomponentes
    text-carousel/    # Carrusel de texto
  context/            # Contextos globales (ej: CursorContext)
  lib/                # Utilidades y datos estáticos
  globals.css         # Estilos globales
  layout.js           # Layout principal
  page.js             # Página principal
  favicon.ico         # Favicon
public/
  images/             # Imágenes y assets públicos
...
```

## Scripts

- `npm run dev` — Inicia el servidor de desarrollo
- `npm run build` — Compila el proyecto para producción
- `npm start` — Inicia el servidor en producción

## Buenas prácticas

- Componentes pequeños y reutilizables
- Lógica separada de presentación (hooks/context)
- Imágenes en `public/images/`
- Contextos en `app/context/`
- Utilidades en `app/lib/`
- Estilos globales en `globals.css`

---

¡Listo para escalar y mantener fácilmente!
