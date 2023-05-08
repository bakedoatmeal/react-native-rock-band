
import * as rawData from './metal.json'

const bands = []
for (let band in rawData) {
  bands.push(rawData[band])
}

const styles = []
bands.forEach((band) => {
  const individualStyles = band["style"] ? band["style"].split(',') : []
  individualStyles.forEach((value, index) => {
    if (!styles.find((item) => value === item)) {
      styles.push(value)
    }
  })
})


let fans = 0
bands.forEach((band) => {
  if (typeof band["fans"] === 'number') {
    fans += band["fans"] 
  }
})


const countries = []
bands.forEach((band) => {
  if (!countries.find((item) => band["origin"] === item)) {
    countries.push(band["origin"])
  }
})

let active = 0
let split = 0
for (let i= 0; i < bands.length; i++ ) {
  if (bands[i]["split"] !== "-") {
    split += 1
  } else {
    active +=1
  }
}



export {bands, styles, fans, active, split, countries}