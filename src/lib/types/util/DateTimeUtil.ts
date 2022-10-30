import { DateTime } from "luxon";

export const tryCalculateAge = (birthday: string): string => {
    return !birthday || birthday.length === 0
        ? "??"
        : Math.floor(Math.abs(DateTime.fromFormat(birthday, "yyyy-MM-dd").diffNow("years").years)).toString();
};
