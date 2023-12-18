import { Cinzel } from "next/font/google";

export const headingFont = Cinzel({
    weight: ["600"],
    subsets: ["latin"],
    display: "swap",
  });

export const datepickerPropsConfigs = {
  dateNavBtnProps: {
    _hover: {
      background: "teal.200",
    },
  },
  dayOfMonthBtnProps: {
    defaultBtnProps: {
      _hover: {
        background: 'teal.200',
      }
    },
    selectedBtnProps: {
      background: "teal.400",
      color: "white",
    },
    todayBtnProps: {
      background: "gray.400",
    },
    inputProps: {
      focusBorderColor:"teal.400"
    },
  },
};
