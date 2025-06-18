/*
* https://deck.gl/docs/api-reference/core/globe-view
*/
const {DeckGL, _GlobeView, TileLayer, BitmapLayer, COORDINATE_SYSTEM} = deck;

new DeckGL({
  views: new _GlobeView({
    resolution: 10
  }),
  initialViewState: {
    longitude: 2.27,
    latitude: 48.86,
    zoom: 0,
    minZoom: 0,
    maxZoom: 20
  },
  controller: true,
  
  layers: [
    new TileLayer({
      data: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      minZoom: 0,
      maxZoom: 19,
      tileSize: 256,

      renderSubLayers: props => {
        const {
          bbox: {west, south, east, north}
        } = props.tile;

        return new BitmapLayer(props, {
          data: null,
          image: props.data,
          _imageCoordinateSystem: COORDINATE_SYSTEM.CARTESIAN,
          bounds: [west, south, east, north]
        });
      }
    })
  ]
});
  