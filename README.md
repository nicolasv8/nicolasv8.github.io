# La Vida de Nico

Sitio personal hecho con Next.js y publicado como sitio estático en GitHub Pages.

## Trabajar en el sitio

Con Node.js 20:

```sh
npm ci
npm run dev
```

Para comprobar y generar la versión pública:

```sh
npm run lint
npm run check-types
npm run build
python3 -m http.server 3001 --directory out
```

El último comando permite ver la exportación en `http://localhost:3001`. Al subir un commit a `main`, GitHub Actions construye y publica el sitio; los cambios locales no se publican solos.

## Dónde cambiar el contenido

- `lib/site.ts`: navegación, redes y proyectos.
- `app/page.tsx` y `app/about/page.tsx`: portada y presentación.
- `lib/videos.ts`: selección de videos. Sus miniaturas están en `public/images/videos/` y usan el identificador del video como nombre.
- `lib/travel.ts`: paradas, años, textos y fotos del mapa. Las coordenadas representan centros de ciudades, no el lugar exacto de una fotografía. `photoPosition` permite ajustar el encuadre de una postal cuando hace falta. El contador de continentes se actualiza manualmente en `components/travel-map.tsx`.
- `lib/travel-regions.ts`: agrupaciones regionales del mapa. Si se agregan lugares cercanos, hay que revisar que los marcadores y sus áreas táctiles no se superpongan en celular.
- `content/writing/{essays,poems,notes}/`: textos MDX. Cada archivo necesita `title`, `date` (`YYYY-MM-DD`), `type` correspondiente a la carpeta y `published: true`; `excerpt` es opcional y `language` puede ser `es` o `en`.

Hay tres textos de muestra de una versión anterior cuya autoría no se ha confirmado. Se conservan en el repositorio, pero sus páginas públicas muestran un aviso y no aparecen en el índice. La lista está en `lib/writing.ts`; no se deben presentar como escritos de Nico sin verificarlo.

## Fotos y privacidad

Las fotos públicas del mapa están en `public/images/travel/`. Cada foto tiene variantes de 480 y 960 píxeles para que los dispositivos carguen el tamaño adecuado. Antes de publicar una nueva imagen, elimina y verifica sus metadatos de ubicación y conserva los originales fuera del repositorio. El mapa usa coordenadas aproximadas de las ciudades y datos geográficos de Natural Earth.

Las variantes de la portada están en `public/images/home/`. `scripts/optimize-images.mjs` corresponde a los recursos originales del retrato y no genera las fotos ni las variantes del mapa.
