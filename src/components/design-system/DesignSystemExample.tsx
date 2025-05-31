
import React from 'react';
import { Container, Section, Grid, Stack, Card } from './DesignSystem';
import { ThemeToggle } from './ThemeToggle';
import FluidTypography from '@/components/typography/FluidTypography';
import { useDesignTokens } from '@/hooks/useDesignTokens';

export const DesignSystemExample: React.FC = () => {
  const tokens = useDesignTokens();

  return (
    <Section variant="default" spacing="lg">
      <Container size="lg">
        <Stack spacing="xl">
          {/* Header with theme toggle */}
          <Stack direction="horizontal" justify="between" align="center">
            <FluidTypography variant="h2" color="primary">
              Design System Example
            </FluidTypography>
            <ThemeToggle />
          </Stack>

          {/* Grid example */}
          <Grid cols={3} gap="lg">
            <Card variant="elevated" padding="lg">
              <Stack spacing="md">
                <FluidTypography variant="h3" color="accent">
                  Card One
                </FluidTypography>
                <FluidTypography variant="body" color="muted">
                  This is an example of using our design system components
                  for consistent spacing and layout.
                </FluidTypography>
              </Stack>
            </Card>

            <Card variant="outline" padding="lg">
              <Stack spacing="md">
                <FluidTypography variant="h3" color="accent">
                  Card Two
                </FluidTypography>
                <FluidTypography variant="body" color="muted">
                  Different card variant with consistent internal spacing
                  using our Stack component.
                </FluidTypography>
              </Stack>
            </Card>

            <Card variant="default" padding="lg">
              <Stack spacing="md">
                <FluidTypography variant="h3" color="accent">
                  Card Three
                </FluidTypography>
                <FluidTypography variant="body" color="muted">
                  All cards maintain consistent design tokens and
                  responsive behavior.
                </FluidTypography>
              </Stack>
            </Card>
          </Grid>

          {/* Horizontal stack example */}
          <Card variant="ghost" padding="lg">
            <Stack direction="horizontal" spacing="md" align="center" wrap>
              <div className="w-12 h-12 bg-royal-500 rounded-full" />
              <Stack spacing="xs">
                <FluidTypography variant="h4" color="primary">
                  Horizontal Layout
                </FluidTypography>
                <FluidTypography variant="caption" color="muted">
                  Using Stack component for flexible layouts
                </FluidTypography>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Section>
  );
};
