<template>
  <div>
    <div class = "map-state">
      <div class = "map-route">
        <div class = "item">
          <img src="img/userManagement/bike.png" alt="image" style = "border-radius : 100%">
          <div class = "item-wrapper">
            <div class = "item-title">11:23PM, 12 July 2020</div>
            <div class = "item-label">Rd 8 156/A Gulshan Dhaka</div>
          </div>
        </div>
        <div class = "item">
          <img src="img/userManagement/arrow.png" alt="image" style = "border-radius : 100%">
          <div class = "item-wrapper">
            <div class = "item-title">11:50PM, 12 July 2020</div>
            <div class = "item-label">Rd 8 156/A Gulshan Dhaka</div>
          </div>
        </div>
      </div>
      
      <div class = "rider-setting">
        <div class = "item">
          <i class = "fas fa-bicycle" style = "color: #37b4ff"></i>
          <div class = "item-wrapper">
              <div class = "item-title">BIKE</div>
              <div class = "item-label">Vehicle</div>
          </div>
        </div>
        <div class = "item">
          <i class = "fas fa-road" style = "color: #00b52c"></i>
          <div class = "item-wrapper">
              <div class = "item-title">2.4Km</div>
              <div class = "item-label">Travelled</div>
          </div>
        </div>
        <div class = "item">
          <i class = "fas fa-burn" style = "color: #ff8037"></i>
          <div class = "item-wrapper">
              <div class = "item-title">12 CAL</div>
              <div class = "item-label">Burn</div>
          </div>
        </div>
        <div class = "item">
          <i class = "fas fa-battery-quarter" style = "color: #9b37ff"></i>
          <div class = "item-wrapper">
              <div class = "item-title">34-28%</div>
              <div class = "item-label">Consumped</div>
          </div>
        </div>
      </div>
    </div>
    <gmap-map :center="center" :zoom="12" style="width:100%; height: 727px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.map-state {
  margin-top : 20px;
  height : 150px;
  display:flex;
  flex-direction : row;
  justify-content: space-between;
  margin-right : 21px;
  margin-left : 21px;

  .item {
      display : flex;
      flex-direction : row;
      align-items: center;
      i {
          font-size : 20px;
      }
      .item-wrapper {
          display : flex;
          flex-direction : column;
          margin-left : 10px;
          .item-title{
              color : #2e2e39;
              font-size: 17px;
          }
          .item-label{
              color : #808090;
              font-size: 12px;
          }
      }
      margin-bottom : 20px;
  }

  .map-route {
      display:flex;
      flex-direction : column;
  }
  .rider-setting {
      margin-top : -10px;
      width : 300px;
      display:flex;
      flex-wrap : wrap;
      .item {
          width : 140px;
      }
  }
}
</style>