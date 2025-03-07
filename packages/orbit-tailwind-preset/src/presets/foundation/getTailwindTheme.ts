import { defaultTokens, defaultFoundation } from "@kiwicom/orbit-design-tokens";

const toPx = (n: number) => `${n}px`;

const getTailwindTheme = (theme: typeof defaultTokens) => {
  return {
    colors: {
      transparent: "transparent",
      blue: {
        dark: theme.paletteBlueDark,
        "dark-active": theme.paletteBlueDarkActive,
        "dark-hover": theme.paletteBlueDarkHover,
        darker: theme.paletteBlueDarker,
        light: theme.paletteBlueLight,
        "light-active": theme.paletteBlueLightActive,
        "light-hover": theme.paletteBlueLightHover,
        normal: theme.paletteBlueNormal,
        "normal-active": theme.paletteBlueNormalActive,
        "normal-hover": theme.paletteBlueNormalHover,
      },
      bundle: {
        basic: theme.paletteBundleBasic,
        medium: theme.paletteBundleMedium,
      },
      cloud: {
        dark: theme.paletteCloudDark,
        "dark-active": theme.paletteCloudDarkActive,
        "dark-hover": theme.paletteCloudDarkHover,
        light: theme.paletteCloudLight,
        "light-active": theme.paletteCloudLightActive,
        "light-hover": theme.paletteCloudLightHover,
        normal: theme.paletteCloudNormal,
        "normal-active": theme.paletteCloudNormalActive,
        "normal-hover": theme.paletteCloudNormalHover,
      },
      green: {
        dark: theme.paletteGreenDark,
        "dark-active": theme.paletteGreenDarkActive,
        "dark-hover": theme.paletteGreenDarkHover,
        darker: theme.paletteGreenDarker,
        light: theme.paletteGreenLight,
        "light-active": theme.paletteGreenLightActive,
        "light-hover": theme.paletteGreenLightHover,
        normal: theme.paletteGreenNormal,
        "normal-active": theme.paletteGreenNormalActive,
        "normal-hover": theme.paletteGreenNormalHover,
      },
      ink: {
        dark: theme.paletteInkDark,
        "dark-active": theme.paletteInkDarkActive,
        "dark-hover": theme.paletteInkDarkHover,
        light: theme.paletteInkLight,
        "light-active": theme.paletteInkLightActive,
        "light-hover": theme.paletteInkLightHover,
        normal: theme.paletteInkNormal,
        "normal-active": theme.paletteInkNormalActive,
        "normal-hover": theme.paletteInkNormalHover,
      },
      orange: {
        dark: theme.paletteOrangeDark,
        "dark-active": theme.paletteOrangeDarkActive,
        "dark-hover": theme.paletteOrangeDarkHover,
        darker: theme.paletteOrangeDarker,
        light: theme.paletteOrangeLight,
        "light-active": theme.paletteOrangeLightActive,
        "light-hover": theme.paletteOrangeLightHover,
        normal: theme.paletteOrangeNormal,
        "normal-active": theme.paletteOrangeNormalActive,
        "normal-hover": theme.paletteOrangeNormalHover,
      },
      product: {
        dark: theme.paletteProductDark,
        "dark-active": theme.paletteProductDarkActive,
        "dark-hover": theme.paletteProductDarkHover,
        darker: theme.paletteProductDarker,
        light: theme.paletteProductLight,
        "light-active": theme.paletteProductLightActive,
        "light-hover": theme.paletteProductLightHover,
        normal: theme.paletteProductNormal,
        "normal-active": theme.paletteProductNormalActive,
        "normal-hover": theme.paletteProductNormalHover,
      },
      red: {
        dark: theme.paletteRedDark,
        "dark-active": theme.paletteRedDarkActive,
        "dark-hover": theme.paletteRedDarkHover,
        darker: theme.paletteRedDarker,
        light: theme.paletteRedLight,
        "light-active": theme.paletteRedLightActive,
        "light-hover": theme.paletteRedLightHover,
        normal: theme.paletteRedNormal,
        "normal-active": theme.paletteRedNormalActive,
        "normal-hover": theme.paletteRedNormalHover,
      },
      social: {
        facebook: theme.paletteSocialFacebook,
        "facebook-hover": theme.paletteSocialFacebookHover,
        "facebook-active": theme.paletteSocialFacebookActive,
      },
      white: {
        normal: theme.paletteWhite,
        "normal-active": theme.paletteWhiteActive,
        "normal-hover": theme.paletteWhiteHover,
      },
    },
    fontSize: {
      small: defaultFoundation.fontSize.small,
      normal: defaultFoundation.fontSize.normal,
      large: defaultFoundation.fontSize.large,
      "extra-large": defaultFoundation.fontSize.extraLarge,
    },
    lineHeight: {
      none: "1",
      small: defaultFoundation.lineHeight.small,
      normal: defaultFoundation.lineHeight.normal,
      large: defaultFoundation.lineHeight.large,
      "extra-large": defaultFoundation.lineHeight.extraLarge,
    },
    fontWeight: {
      normal: defaultFoundation.fontWeight.normal,
      medium: defaultFoundation.fontWeight.medium,
      bold: defaultFoundation.fontWeight.bold,
    },
    fontFamily: {
      base: defaultFoundation.fontFamily.base,
    },
    spacing: {
      none: "0px",
      0: "0px",
      px: "1px",
      xxxs: defaultFoundation.space.XXXSmall,
      xxs: defaultFoundation.space.XXSmall,
      xs: defaultFoundation.space.XSmall,
      sm: defaultFoundation.space.small,
      md: defaultFoundation.space.medium,
      lg: defaultFoundation.space.large,
      xl: defaultFoundation.space.XLarge,
      xxl: defaultFoundation.space.XXLarge,
      xxxl: defaultFoundation.space.XXXLarge,
    },
    borderRadius: {
      none: "0",
      small: defaultFoundation.borderRadius.small,
      normal: defaultFoundation.borderRadius.normal,
      large: defaultFoundation.borderRadius.large,
      circle: defaultFoundation.borderRadius.circle,
    },
    screens: {
      sm: toPx(defaultFoundation.breakpoint.smallMobile),
      mm: toPx(defaultFoundation.breakpoint.mediumMobile),
      lm: toPx(defaultFoundation.breakpoint.largeMobile),
      tb: toPx(defaultFoundation.breakpoint.tablet),
      de: toPx(defaultFoundation.breakpoint.desktop),
      ld: toPx(defaultFoundation.breakpoint.largeDesktop),
    },
    size: {
      small: defaultFoundation.size.small,
      medium: defaultFoundation.size.medium,
      large: defaultFoundation.size.large,
      "extra-large": defaultFoundation.size.extraLarge,
      "extra-extra-large": defaultFoundation.size.extraExtraLarge,
    },
  };
};

export default getTailwindTheme;
