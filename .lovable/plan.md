

# Remover Email e Última Sessão (Credits)

## Mudanças

### 1. `src/pages/Index.tsx`
- **Remover o bloco de email** (linhas 406-414): O item de contato com ícone de Mail e "contact@ambiance-renovation.ch" na seção "Demander un Devis"
- **Remover o import `Mail`** da lista de imports do lucide-react (já que não será mais usado)
- **Remover `<Credits />`** (linha 456) e o import correspondente (linha 4)

### 2. Nenhum outro arquivo precisa ser alterado
O componente `Credits.tsx` pode permanecer no projeto, apenas não será mais renderizado.

