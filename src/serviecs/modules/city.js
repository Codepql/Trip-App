import NzRequest from "../request"

export function getCityAll() {
  return NzRequest.get({
    url: "/city/all"
  })
}