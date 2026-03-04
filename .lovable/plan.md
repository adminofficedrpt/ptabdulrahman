

# Hero Two-Column Layout — petersand.eu Match

## What Needs to Change

The current hero already has the right elements (massive name, nav bar, two-column with text left / portrait right) but the proportions, alignment, and spacing don't match the reference. Key differences:

1. **Portrait sizing**: petersand.eu's portrait fills the entire right column edge-to-edge and extends to the bottom of the viewport. Currently, the portrait is a fixed-size box (w-80/w-96) centered in its column.
2. **Left column content area**: The reference has the role title sitting much lower in the left column with a cream/beige background box behind it, creating a clear visual block. The text is vertically centered within that block.
3. **Grid proportions**: The reference uses roughly 45/55 split (left text slightly narrower, right image slightly wider). Current uses 50/50.
4. **Image treatment**: The reference portrait is fully grayscale with no hover effect. It bleeds to the right edge of the viewport.
5. **The two columns sit directly below the nav bar** with no extra vertical padding — they fill the remaining viewport height.

## Implementation

### File: `src/components/features/AdvancedHero.tsx`

- Change the two-column grid from `lg:grid-cols-2` to `lg:grid-cols-12` with left taking 5 cols and right taking 7 cols
- Left column: wrap content in a `bg-[#EDE8E3]` (slightly darker cream) block with generous internal padding, vertically centered. Role title ("Islamic Scholar & Legal Consultant") displayed in massive serif. Below it, a concise subtitle in uppercase tracking. Below that, the "Get in Touch" CTA button (dark background, uppercase)
- Right column: remove the fixed w-80/w-96 sizing. Make the image fill the entire column height and width (`w-full h-full object-cover`). Remove hover grayscale toggle — keep it permanently grayscale. Remove `overflow-hidden` wrapper's fixed dimensions — let it stretch to fill the grid cell
- Adjust the overall section to use `h-screen` with the two-column area taking `flex-1` to fill remaining space
- Remove the `py-12 md:py-16` padding on the two-column container — let content fill edge-to-edge vertically

### File: `src/components/chapters/ChapterOne.tsx` (minor)

- Ensure the About section's first paragraph uses the existing `drop-cap` class (already does — no change needed)

### No other files need changes — this is a hero layout fix only.

## Summary

One file changed: `AdvancedHero.tsx`. The hero becomes a true petersand.eu-style layout with the left column as a tinted content block and the right column as an edge-to-edge B&W portrait filling the viewport height.

