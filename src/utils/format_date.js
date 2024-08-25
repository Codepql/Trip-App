import dayjs from "dayjs";

export function formatMonthDay(date, formatStr = "MM月DD日") {
  return dayjs(date).format(formatStr)
}

export function getDiffDays(nowDate, newDate) {
  return dayjs(newDate).diff(nowDate, "day")
}