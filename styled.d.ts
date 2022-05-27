import "styled-components";
import {
  BREAKPOINTS,
  COLORS,
  QUERIES,
  SIZES,
  WEIGHTS,
} from "./theme/constants";

declare module "styled-components" {
  export interface DefaultTheme {
    COLORS: typeof COLORS;
    SIZES: typeof SIZES;
    WEIGHTS: typeof WEIGHTS;
    BREAKPOINTS: typeof BREAKPOINTS;
    QUERIES: typeof QUERIES;
  }
}
