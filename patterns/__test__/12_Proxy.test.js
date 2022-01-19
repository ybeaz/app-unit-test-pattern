/**
 * @Description ...
 * @link https://www.dofactory.com/javascript/design-patterns
 * @command to run `yarn jest fileName.test`
 */

describe('Structural Patterns', () => {
  it('-- Pattern: Proxy/Cache  An object representing another object', () => {
    function GeoCoder() {
      this.getLatLng = function (city) {
        if (city === 'Amsterdam') {
          return '52.3700° N, 4.8900° E'
        } else if (city === 'Berlin') {
          return '52.5233° N, 13.4127° E'
        } else if (city === 'London') {
          return '51.5171° N, 0.1062° W'
        } else if (city === 'Paris') {
          return '48.8742° N, 2.3470° E'
        } else {
          return ''
        }
      }
    }

    function GeoProxy() {
      this.geocoder = new GeoCoder()
      this.geocache = {}
      this.getLatLng = function (city) {
        if (!this.geocache[city]) {
          this.geocache[city] = this.geocoder.getLatLng(city)
        }
        return this.geocache[city]
      }
      this.getCount = function () {
        let count = 0
        for (let code in this.geocache) {
          count += 1
        }
        return count
      }
    }

    const geo = new GeoProxy()

    geo.getLatLng('Paris')
    geo.getLatLng('London')
    geo.getLatLng('London')
    geo.getLatLng('London')
    geo.getLatLng('London')
    geo.getLatLng('Amsterdam')
    geo.getLatLng('Amsterdam')
    geo.getLatLng('Amsterdam')
    geo.getLatLng('Amsterdam')
    geo.getLatLng('London')
    geo.getLatLng('London')

    let expected = {
      Paris: '48.8742° N, 2.3470° E',
      London: '51.5171° N, 0.1062° W',
      Amsterdam: '52.3700° N, 4.8900° E',
    }
    expect(geo.geocache).toEqual(expected)
    expect(geo.getCount()).toEqual(3)
  })
})

// GeoCoder
// getLatLng
// address

// GeoProxy
// geocoder
// geocache
// getLatLng
// address
// getCount
