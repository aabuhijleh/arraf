import "styled-components";
import { BREAKPOINTS, COLORS, QUERIES, WEIGHTS } from "./theme/constants";

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: typeof COLORS;
    WEIGHTS: typeof WEIGHTS;
    BREAKPOINTS: typeof BREAKPOINTS;
    QUERIES: typeof QUERIES;
  }
}
