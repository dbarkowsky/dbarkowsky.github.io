/* eslint-disable import/no-anonymous-default-export */

const celeste = {
    persianIndigo: "#340068ff",
    brightPink: "#ff6978ff",
    babyPowder: "#fffcf9ff",
    celeste: "#b1ede8ff",
    eggplant: "#6d435aff",
};

const forestPalette = {
    darkGreen: "#122d00",
    brown: "#744425",
    beige: "#f3e8d3",
    olive: "#494f41",
    salmon: "#e09771",
};

const greyScale = {
    whiteish: "#eeeeee",
    lightGrey: "#aaaaaa",
    darkGrey: "#555555",
    blackish: "#222222",
    accent: "#083601"
}

export default {
    darkBackground: greyScale.blackish,
    lightBackground: greyScale.whiteish,
    lightText: greyScale.whiteish,
    darkText: greyScale.blackish,
    highlight: greyScale.darkGrey,
    progressBarBackground: greyScale.lightGrey,
    progressBarForeground: greyScale.accent,
    accent: greyScale.accent
};
