import NzRequest from '../request'

export function getHotSuggests() {
  return NzRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getCategories() {
  return NzRequest.get({
    url: "/home/categories"
  })
}

export function getHouseList(currentPage) {
  return NzRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}