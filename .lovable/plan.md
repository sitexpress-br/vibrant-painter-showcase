

# Redesign Completo -- Estilo Luxuoso Inspirado no HTML

## Objetivo
Substituir todas as secoes acima da galeria pelo design e conteudo do ficheiro HTML fornecido. O estilo e elegante/luxuoso com cores escuras, acentos dourados e tipografia serif refinada.

## Paleta de Cores (do HTML)
- Gold: `#B8893E` / HSL(37, 51%, 48%)
- Dark: `#1A1816` / HSL(20, 8%, 9%)
- Mid: `#2E2B28` / HSL(20, 8%, 17%)
- Warm: `#F4F1EB` / HSL(40, 30%, 94%)
- Cream: `#FAF8F4` / HSL(40, 60%, 97%)

## Fontes
- Adicionar Google Fonts: **Cormorant Garamond** (titulos) e **Jost** (corpo) no `index.html`
- Atualizar `tailwind.config.ts` para usar estas fontes

## Secoes a Implementar (acima da galeria)

### 1. Header (nav escura)
- Fundo escuro fixo (`#1A1816`) com borda dourada sutil
- Logo a esquerda, links de navegacao a direita em maiusculas
- Estilo minimalista com letras espacadas

### 2. Hero (fundo escuro)
- Fundo `#1A1816` sem imagens de fundo (estilo tipografico puro)
- "Eyebrow" text em dourado com linhas decorativas
- Titulo grande em Cormorant Garamond: "Ambiance / Renovation"
- Subtitulo em italico
- Descricao da empresa
- Botoes: "Demander un devis" (dourado) e "Nos services" (outline)

### 3. Partnership Banner (barra dourada)
- Fundo `#B8893E` com texto em maiusculas
- "Bienvenue -- Ambiance Renovation -- Peinture, Renovation, Design"

### 4. Partenaire Section (secao escura)
- Grid 2 colunas: badge circular a esquerda, texto a direita
- Badge com borda dourada e nome da empresa
- Texto descritivo sobre a empresa e servicos

### 5. Diplomes/Expertise (fundo warm)
- Grid de 3 cards com borda dourada no topo
- Numeracao 01, 02, 03 em grande
- Peinture Interieure, Peinture Exterieure, Peinture Decorative

### 6. Services (fundo cream)
- Grid 3x2 com items minimalistas
- 6 servicos com icone emoji, nome, descricao e tag
- Peinture, Renovation, Facades, etc.

### 7. Pourquoi Nous (fundo escuro)
- Grid de 4 "atouts" numerados
- Fundo mid-dark com hover effects
- Ponctualite, Garantie, Qualite, Expertise

### 8. Avis (manter conteudo, novo estilo)
- Adaptar ao estilo elegante com cards similares ao diplomes

## Secoes Mantidas (depois da galeria)
- Galerie (manter, atualizar estilo)
- Devis / Contact (adaptar ao novo estilo CTA do HTML)
- Footer (redesenhar no estilo escuro do HTML)

## Ficheiros a Modificar

| Ficheiro | Mudanca |
|----------|---------|
| `index.html` | Adicionar Google Fonts (Cormorant Garamond + Jost) |
| `tailwind.config.ts` | Atualizar fontFamily para heading/body |
| `src/index.css` | Nova paleta de cores (gold, dark, cream, warm) |
| `src/components/Header.tsx` | Redesign completo: nav escura, estilo luxuoso |
| `src/pages/Index.tsx` | Redesign completo de todas as secoes acima da galeria |
| `src/components/Footer.tsx` | Redesign no estilo escuro do HTML |

## Detalhes Tecnicos

**CSS Variables atualizadas:**
- `--primary`: gold `37 51% 48%`
- `--background`: cream `40 60% 97%`
- `--foreground`: dark `20 8% 9%`
- `--muted`: warm `40 30% 94%`
- Novos gradientes com dourado

**Secoes removidas:**
- Carousel de hero com imagens (substituido por hero tipografico)
- BeforeAfterSlider (removido)
- Secao "Processus" (substituida por Partenaire + Diplomes)

**Secoes mantidas com novo estilo:**
- Galerie (masonry layout existente)
- Devis/Contact (adaptado ao estilo CTA do HTML)
- Avis/Reviews

