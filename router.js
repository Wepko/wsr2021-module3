import Controller from "./controller.js"

function getRouterInfo() {
  const hash = location.hash ? location.hash.slice(1) : ''
  const [name, id] = hash.split('/')
  return {name, params : {id}}
}

function handlehash() {
  const { name, params } = getRouterInfo()

  if (name) {
    const routeName = name + 'Route'
    Controller[routeName](params)
  }
}

export default {
  init() {
    addEventListener('hashchange', handlehash)
    handlehash()
  }
}