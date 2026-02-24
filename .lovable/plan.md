

# Atualização do Logotipo e Cor Principal

## Resumo
Substituir o logotipo atual pelo novo (com o martelo e texto "AMBIANCE RÉNOVATION INTÉRIEUR ET EXTÉRIEUR SA LTD") e ajustar a cor principal para um tom mais versátil e abrangente.

## Mudanças

### 1. Substituir o Logotipo
- Copiar `user-uploads://logo-removebg-preview.png` para `src/assets/logo.png` (substituindo o atual)
- Copiar também para `public/logo.png` (favicon)

### 2. Ajustar a Cor Principal
A cor atual `#35799d` (HSL 197, 48%, 41%) é um azul-esverdeado médio. Para torná-la "mais abrangente", vou ajustá-la para um tom ligeiramente mais neutro e versátil, um azul mais equilibrado que combine melhor com diferentes contextos:

- **Nova cor principal**: `#2d7a9c` -- HSL(195, 55%, 39%) -- um azul mais puro e profundo, menos esverdeado
- **Modo escuro**: HSL(195, 50%, 50%) -- versão mais clara para fundos escuros
- **Gradientes**: Atualizados para usar o novo tom, com transições mais suaves

### 3. Arquivos a Modificar

| Arquivo | Mudança |
|---------|---------|
| `src/assets/logo.png` | Substituir pelo novo logotipo |
| `public/logo.png` | Substituir pelo novo logotipo (favicon) |
| `src/index.css` | Ajustar valores HSL do primary, gradientes e ring |

### Detalhes Técnicos

**Variáveis CSS atualizadas:**
- `--primary` (light): `195 55% 39%`
- `--primary` (dark): `195 50% 50%`
- `--ring`: Acompanha o novo primary
- `--accent`: Ajustado para complementar
- `--gradient-primary`: Transição do novo azul para o dourado quente
- `--sidebar-primary` e `--sidebar-ring`: Acompanham

**Nota sobre o logotipo:** O novo logo já contém o texto completo "AMBIANCE RÉNOVATION INTÉRIEUR ET EXTÉRIEUR SA LTD", portanto o Header e Footer continuam usando a tag `<img>` sem necessidade de texto adicional.

