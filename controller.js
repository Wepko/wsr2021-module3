import Model from './model.js'
import airportsPage from './pages/airports.js'

export default {
  async airportsRoute(params) {
    if (params.id) {

    } else {
      const airports = await Model.getAirports('?query=kzn')
      console.log(airports)
      airportsPage.setData(airports)
      airportsPage.render()
    }
  }
}