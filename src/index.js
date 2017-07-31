import './index.html'
import Viewer from './lib/viewer'

window.onload = () => {
  const container = document.getElementById('container')
  const viewer = new Viewer(container)
  viewer.load('data/HYG.pdf')

  viewer.on('mouse:dblclick', (e, pt) => {
    console.log(`mouse double click ${printObj(e)}, ${printObj(pt)}`)
    viewer.addPin(pt)
  })

  viewer.on('mouse:down', (e, pt) => {
    console.log(`mouse down ${printObj(e)}, ${printObj(pt)}`)
  })

  viewer.on('mouse:wheel', (e, delta) => {
    console.log(`mouse wheel ${printObj(delta)}`)
    viewer.zoomIn(delta)
  })

  viewer.on('object:selected', (key, obj) => {
    console.log(`object selected ${printObj(obj)}`)
  })

  function printObj(o) {
    return JSON.stringify(o, null, 2)
  }
}
