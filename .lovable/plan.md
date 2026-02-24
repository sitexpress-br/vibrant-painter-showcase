

# Header com Fundo Branco Fixo

## Mudança
Alterar o header para ter fundo branco permanente, removendo o estado transparente inicial (antes do scroll).

## Arquivo: `src/components/Header.tsx`

- Remover a lógica condicional de `isScrolled` para o background do header
- Aplicar `bg-background/95 backdrop-blur-md shadow-lg` como classe fixa, independente do scroll
- Atualizar as cores do texto dos links do menu para sempre usar `text-foreground` (em vez de `text-white` quando não scrollado)
- Atualizar a cor do botão mobile (hambúrguer) para sempre usar `text-foreground`
- A variável `isScrolled` e o `useEffect` do scroll podem ser removidos, já que não serão mais necessários

