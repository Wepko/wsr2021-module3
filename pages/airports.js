import View from '../view.js'

const pagesNode = document.querySelector('#pages')
let airports = []

export default {
  setData({data}) {
    airports = data.items
    console.log('airports', airports)
  },
  render() {
    pagesNode.innerHTML = View.render('airports', { items: airports })
  }
}