

# Rebranding: Ambiance Renovation Peinture Sa

## Overview

This project needs a complete transformation from a Brazilian painting company ("PintorPro") to a Swiss painting/renovation company ("Ambiance Renovation Peinture Sa") run by Batista Allan. All content will be converted to French, the design will be adapted to a Swiss/European professional aesthetic, and all contact information will be updated.

---

## Key Changes

### 1. Branding and Identity
- **Company name**: "PintorPro" becomes "Ambiance Renovation"
- **Tagline**: "Ambiance Renovation est une entreprise specialisee dans la peinture du batiment et les travaux de renovation interieure et exterieure."
- **Owner**: Batista Allan
- **Phone**: +41 76 445 94 36
- **WhatsApp number**: 41764459436
- **Location**: Switzerland (will use a Swiss map embed)
- Remove the Brazilian email (contato@pintorpro.com.br) -- will leave a placeholder or derive one from the brand

### 2. Language -- Full French Translation
All text throughout the site will be translated to French:

- **Header menu**: Processus, Services, Avis, Galerie
- **CTA button**: "Demander un Devis Gratuit" / "Demander un Devis"
- **Hero slides**:
  - "Transformons Votre Espace" / "Avec des couleurs qui inspirent et une finition parfaite"
  - "Qualite Professionnelle" / "Equipe experimentee et materiaux de premiere qualite"
  - "Votre Satisfaction Garantie" / "Des resultats qui depassent vos attentes"
- **Process section**: "Notre Processus" -- Evaluation, Preparation, Execution, Finalisation
- **Services section**: "Types de Peinture" -- Peinture Interieure, Peinture Exterieure, Peinture Decorative
- **Before/After**: "Avant et Apres"
- **Why choose us**: "Pourquoi Nous Choisir" -- Ponctualite, Garantie, Qualite
- **Reviews**: "Ce Que Disent Nos Clients"
- **Gallery**: "Galerie de Projets"
- **Contact/Quote**: "Demander un Devis"
- **Footer**: All text translated to French
- **WhatsApp bubble text**: "Contactez-nous maintenant !"

### 3. Target Audience Adaptation
Update the description to reflect Swiss market positioning:
- Mention "particuliers, regies immobilieres et professionnels" as target clients
- Emphasize "savoir-faire" and "serieux"
- Adapt the "Why Choose Us" section to Swiss values (precision, reliability, quality)

### 4. Contact Information Updates
- **Phone/WhatsApp**: +41 76 445 94 36
- **Email**: contact@ambiance-renovation.ch (placeholder, adjustable)
- **Location**: Suisse (Switzerland) -- update map to show Switzerland
- **Google Maps embed**: Replace with a Swiss location

### 5. Design Adjustments
- Update color scheme to feel more European/Swiss -- more elegant, muted tones (deep navy, warm grey, subtle gold accents) instead of the current bright blue/yellow
- Update fonts to feel more refined (keep Montserrat/Lato which work well for European aesthetics)

### 6. Footer and Credits
- Update footer with new company name, services in French, and Swiss contact info
- Update copyright to "Ambiance Renovation Peinture Sa"
- Keep SiteXpress credits section as-is

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | All text to French, new contact info, Swiss map embed, updated descriptions |
| `src/components/Header.tsx` | Brand name to "Ambiance Renovation", menu items in French, CTA in French |
| `src/components/Footer.tsx` | Full French translation, new contact info, new brand name |
| `src/components/FixedWhatsApp.tsx` | Update WhatsApp number to 41764459436, French text |
| `src/index.css` | Update color palette to more elegant/Swiss tones |
| `index.html` | Update page title and meta description |

---

## Technical Details

- **WhatsApp link**: `https://wa.me/41764459436`
- **Google Maps embed**: Will be updated to show Switzerland (general Swiss location or a specific city if provided later)
- **Color palette update** (CSS variables):
  - Primary: deep navy blue (~210 40% 30%)
  - Secondary: warm gold (~40 50% 55%)
  - Accent: charcoal grey
  - Overall: more muted, sophisticated European feel
- All component structure and animations remain the same -- only content and styling change

