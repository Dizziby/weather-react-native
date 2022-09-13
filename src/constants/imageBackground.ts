import dayjs from "dayjs"

const NightTheme = {
    dark: false,
    colors: {
        primary: "rgb(204, 141, 158)",
        background: "rgb(255, 255, 255)",
        card: "rgb(255, 255, 255)",
        text: "rgb(104, 81, 107)",
        border: "rgb(104, 81, 107)",
        notification: "rgb(255, 69, 58)",
    },
}

const DayTheme = {
    dark: false,
    colors: {
        primary: "rgb(182, 213, 198)",
        background: "rgb(255, 255, 255)",
        card: "rgb(255, 255, 255)",
        text: "rgb(74, 191, 217)",
        border: "rgb(74, 191, 217)",
        notification: "rgb(255, 69, 58)",
    },
}

const hour = dayjs().hour()

let timesDay: TimesDayType

if (hour > 6 && hour < 21) {
    timesDay = "day"
} else {
    timesDay = "night"
}

export const imageBackground =
    timesDay === "day"
        ? require("../../assets/img/day.jpg") // eslint-disable-line global-require
        : require("../../assets/img/night.jpg") // eslint-disable-line global-require

export const navigationTheme = timesDay === "day" ? DayTheme : NightTheme

type TimesDayType = "day" | "night"

// Night
// background: "rgb(104,81,107)",
// background: "linear-gradient(180deg, rgba(104,81,107,1) 0%, rgba(204,141,158,1) 100%)",

// Day
// background: rgb(82,181,204);
// background: linear-gradient(180deg, rgba(82,181,204,1) 0%, rgba(180,212,199,1) 100%);
