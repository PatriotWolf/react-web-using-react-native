import styled, { DefaultTheme } from "styled-components/native";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small";
  href?: string;
  theme: DefaultTheme;
}
const variant = {
  h1: 54,
  h2: 36,
  h3: 24,
  h4: 16,
  h5: 14,
  h6: 12,
  p: 16,
  small: "80%",
};

const Typography = styled.Text<TypographyProps>`
  ${(props: TypographyProps) =>
    props.variant &&
    variant[props.variant] &&
    `font-size: ${variant[props.variant]};`}

  ${(props: TypographyProps) =>
    props.href && `margin: 0 6px; text-decoration-line: underline;`}
`;

export default Typography;
