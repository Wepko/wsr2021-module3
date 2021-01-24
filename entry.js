import Model from './model.js'
import View from './view.js'
import Router from './router.js'

(async () => {
  const header = document.querySelector('#header')
  let flights = Model.getFlights('?from=svo&to=kzn')
  header.innerHTML = View.render('header','Аэрапорт приложение')
  Router.init()

})()

