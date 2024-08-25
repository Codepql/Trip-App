import NzRequest from '../request'

export function getDetailInfos(houseId) {
  return NzRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}
