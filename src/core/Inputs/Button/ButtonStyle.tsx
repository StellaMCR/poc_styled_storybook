
import { styled } from "../../../config/Theme/styled-theme";
import ButtonProps from "./types";

export const ButtonStyle = styled.button<ButtonProps>`
  background: ${props => props.variant === "primary" ? props.theme.color.primary : props.theme.color.secondary};
  color: ${props => props.theme.color.text};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.variant === "primary" ? props.theme.color.primary : props.theme.color.secondary};
  border-radius: 3px;
`;