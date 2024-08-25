import { defineStore } from "pinia";
import { getHotSuggests, getCategories, getHouseList } from "@/serviecs";


const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],

    currentPage: 1,
    houselist: []

  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },

    async fetchCategoriesData() {
      const res = await getCategories()
      this.categories = res.data
    },

    async fetchHouseListData() {
      const res = await getHouseList(this.currentPage)
      this.houselist.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore