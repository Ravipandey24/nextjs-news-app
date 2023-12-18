import { Prata } from "next/font/google";

export const headingFont = Prata({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
  });

export const datepickerPropsConfigs = {
  dayOfMonthBtnProps: {
    defaultBtnProps: {
      _hover: {
        background: "blue.600",
      },
    },
    selectedBtnProps: {
      background: "#0085f230",
    },
  },
  dateNavBtnProps: {
    _hover: {
      background: "#0085f230",
    },
  },
  popoverCompProps: {
    popoverContentProps: {
      background: "#10172b",
      color: "#94a3bb",
      boxShadow: "var(--chakra-shadows-base)",
    },
  },
  calendarPanelProps: {
    wrapperProps: {
      borderColor: "green",
    },
    contentProps: {
      borderWidth: 0,
    },
    headerProps: {
      padding: "5px",
    },
    dividerProps: {
      display: "none",
    },
  },
  weekdayLabelProps: {
    fontWeight: "normal",
  },
  dateHeadingProps: {
    fontWeight: "semibold",
  },
};
