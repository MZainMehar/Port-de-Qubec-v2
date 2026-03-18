# Font Installation Guide

## How to add your custom fonts

### 1. BlenderPro
Place the following files into `/public/fonts/`:

| File name                    | Weight | Style  |
|-----------------------------|--------|--------|
| BlenderPro-Bold.woff2       | 700    | normal |
| BlenderPro-Bold.woff        | 700    | normal |
| BlenderPro-Bold.ttf         | 700    | normal |
| BlenderPro-Medium.woff2     | 500    | normal |
| BlenderPro-Medium.woff      | 500    | normal |
| BlenderPro-Medium.ttf       | 500    | normal |
| BlenderPro-Book.woff2       | 400    | normal |
| BlenderPro-Book.woff        | 400    | normal |
| BlenderPro-Book.ttf         | 400    | normal |

### 2. Cambon
Place the following files into `/public/fonts/`:

| File name                   | Weight | Style  |
|----------------------------|--------|--------|
| Cambon-Regular.woff2       | 400    | normal |
| Cambon-Regular.woff        | 400    | normal |
| Cambon-Regular.ttf         | 400    | normal |
| Cambon-Medium.woff2        | 500    | normal |
| Cambon-Medium.woff         | 500    | normal |
| Cambon-Medium.ttf          | 500    | normal |
| Cambon-Bold.woff2          | 700    | normal |
| Cambon-Bold.woff           | 700    | normal |
| Cambon-Bold.ttf            | 700    | normal |

### Notes
- The `@font-face` declarations are already in `src/app/globals.css`
- If your font filenames differ, update the `src:` paths in `globals.css`
- WOFF2 is preferred for performance; WOFF and TTF are fallbacks
- You only need the formats you have — the browser will pick the best available

### Converting fonts
If you only have .otf or .ttf files, convert to .woff2 using:
- https://cloudconvert.com/ttf-to-woff2
- Or locally: `npx ttf2woff2 input.ttf > output.woff2`
