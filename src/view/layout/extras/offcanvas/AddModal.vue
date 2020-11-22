<template>
  <div class="John-wrapper">
    <div style="position: relative; padding-left: 0px;" id="organ-modal-toggle">
        <div class="add" style="cursor:pointer">
            <div id="kt_quick_user_toggle" class="add-icon">+ Add</div>
        </div>  
    </div>
    <div id="organ-modal-show" ref="organ-modal-show" class="offcanvas offcanvas-right p-10">
      <div class="offcanvas-header d-flex align-items-center justify-content-between pb-5">
        <h3 class="add-org-title">
          Add Organization
        </h3>
      </div>
      <perfect-scrollbar class="offcanvas-content pr-5 mr-n5 scroll" style="max-height: 90vh; position: relative;">      
        <div id="basic-infoer" style="display:block;">
          <div class="row">
              <div class="bas-info">
                <div class="circle">
                  <div class="turn-number">1</div>                
                </div>
                <div class="title"><p>Basic Info</p></div>
              </div>
              <div class="subs">
                <div class="circle">
                  <div class="turn-number">2</div>                
                </div>
                <div class="title"><p>Subscription</p></div>
              </div>
              <div class="setting">
                <div class="circle">
                  <div class="turn-number">3</div>                
                </div>
                <div class="title"><p>Settings</p></div>
              </div>
              <div class="add-own">
                <div class="circle">
                  <div class="turn-number">4</div>                
                </div>
                <div class="title"><p>Add Owner</p></div>
              </div>
          </div>
          <div class="row">
            <div class="org-logo"><div class="pen"><i class="fas fa-pen" style="font-size:10px;"></i></div></div>          
          </div>
          <div class="row" style="margin-left:30px;">
            <div class="col-sm-6">
              <div class="row"><div class="name"><p>Name</p></div></div>
              <div class="row"><div class="name-input"><input type="text" placeholder="Drop Bike"/></div></div>
              <div class="row"><div class="alias"><p>Alias</p></div></div>
              <div class="row"><div class="alias-input"><input type="text" placeholder="Text"/></div></div>
              <div class="row"><div class="city"><p>City</p></div></div>
              <div class="row"><div class="city-input"><input type="text" placeholder="Dhaka"/></div></div>
              <div class="row"><div class="fleet"><p>Default Fleet</p></div></div>
              <div class="row"><div class="fleet-input"><input type="text" placeholder="N/A"/></div></div>
              <div class="row"><div class="domain"><p>Domain</p></div></div>
              <div class="row"><div class="domain-input"><input type="text" placeholder="eskoot.otoride.com"/></div></div>
              <div class="row"><div class="address"><p>Address</p></div></div>
              <div class="row"><div class="address-input"><input type="text" placeholder="Test"/></div></div>
            </div>
            <div class="col-sm-6">
              <div class="row"><div class="phone"><p>Phone Number</p></div></div>
              <div class="row"><div class="phone-input"><input type="text" placeholder="01872765243"/></div></div>
              <div class="row"><div class="country"><p>Country</p></div></div>
              <div class="row"><div class="country-input"><input type="text" placeholder="Bangladesh"/></div></div>
              <div class="row"><div class="postal"><p>Postal/Zip</p></div></div>
              <div class="row"><div class="postal-input"><input type="text" placeholder="1234"/></div></div>
              <div class="row"><div class="type"><p>Type</p></div></div>
              <div class="row"><div class="type-input"><input type="text" placeholder="testing"/></div></div>
              <div class="row"><div class="port"><p>Port</p></div></div>
              <div class="row"><div class="port-input"><input type="text" placeholder=".1234"/></div></div>
            </div>
          </div>
          <div class="row" style="margin-top:50px;">
              <div class="col-md-7"></div>
              <div class="col-md-2">
                  <a href="#" class="btn btn-light" id="organ-modal-close">
                    <div>Cancel</div>
                  </a>
              </div>
              <div class="col-md-3">
                  <button class="btn btn-dark" >
                      <div @click="nextone">Save & Continue</div>
                  </button>
              </div>  
          </div>
        </div>
        <div id="subscriptioner" style="margin-left:50px; display:none;">
          <div class="row">
              <div class="bas-info-check">
                <div class="circle-check">
                  <div class="turn-check"><i class="fas fa-check" style="color:white;"></i></div>                
                </div>
                <div class="title-check"><p>Basic Info</p></div>
              </div>
              <div class="subs">
                <div class="circle">
                  <div class="turn-number">2</div>                
                </div>
                <div class="title"><p>Subscription</p></div>
              </div>
              <div class="setting">
                <div class="circle">
                  <div class="turn-number">3</div>                
                </div>
                <div class="title"><p>Settings</p></div>
              </div>
              <div class="add-own">
                <div class="circle">
                  <div class="turn-number">4</div>                
                </div>
                <div class="title"><p>Add Owner</p></div>
              </div>
          </div>
          <div class="row">
            <div class="row"><div class="vehicle-title">Add Vehicle</div></div>
            <div class="row">
              <div class="col-md-2">
                <div class="veh-one"><img src="img/roller.png"></div>
                <div class="vone-name">Scooter</div>
              </div>
              <div class="col-md-2">
                <div class="veh-two"><img src="img/bike.png"></div>
                <div class="vtwo-name">Bike</div>
              </div>
              <div class="col-md-2">
                <div class="veh-three"><img src="img/motor.png"></div>
                <div class="vthree-name">e-Bike</div>
              </div>
            </div>
            <div class="row">
            </div>         
          </div>
          <div class="row">
            <div class="col-sm-6">
              <div class="su-plan">Subscription Plan</div>
              <div class="su-input"><input type="text" placeholder="Grow"/></div>
            </div>
            <div class="col-sm-6">
              <div class="per-rate">Per Vechicle Rate</div>
              <div class="per-input"><input type="text" placeholder="$8"/></div>
            </div>
          </div>
          <div class="row">
            <div class="fetu-list">Grow Feature List</div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <div class="currency">Currency</div>
              <div class="language">Language</div>
              <div class="num-veh">Number of Vehicle</div>
              <div class="type-geo">Types of Geofence</div>
              <div class="num-fleet">Number of Fleets</div>
              <div class="num-code">Number of Promo Code</div>
              <div class="num-uaccount">Number of Org User Account</div>
              <div class="end-rphoto">End Ride Photo</div>
              <div class="access-oapp">Access to Operator App</div>
              <div class="point-mana">Point Management</div>
              <div class="report">Reporting</div>
            </div>
            <div class="col-md-7">
              <div class="currency-value">Single</div>
              <div class="language-value">Multi Language</div>
              <div class="num-veh-value">1-100</div>
              <div class="type-geo-value">Multi Geofence</div>
              <div class="num-fleet-value">1</div>
              <div class="num-code-value">5</div>
              <div class="num-uaccount-value">1</div>
              <div class="end-rphoto-value">No</div>
              <div class="access-oapp-value">No</div>
              <div class="point-mana-value">No</div>
              <div class="report-value">No</div>
            </div>
          </div>
          <div class="row" style="margin-top:50px;">
              <div class="col-md-7"></div>
              <div class="col-md-2">
                  <a href="#" class="btn btn-light" id="organ-modal-close-two">
                    <div @click="fresh">Cancel</div>
                  </a>
              </div>
              <div class="col-md-3">
                  <button class="btn btn-dark">
                      <div @click="nextwo">Save & Continue</div>
                  </button>
              </div>  
          </div>         
        </div>
        <div id="settinger" style="display:none;">
          <div class="row">
              <div class="bas-info-check">
                <div class="circle-check">
                  <div class="turn-check"><i class="fas fa-check" style="color:white;"></i></div>                
                </div>
                <div class="title-check"><p>Basic Info</p></div>
              </div>
              <div class="bas-info-check">
                <div class="circle-check">
                  <div class="turn-check"><i class="fas fa-check" style="color:white;"></i></div>                
                </div>
                <div class="title-check"><p>Subscription</p></div>
              </div>
              <div class="setting">
                <div class="circle">
                  <div class="turn-number">3</div>                
                </div>
                <div class="title"><p>Settings</p></div>
              </div>
              <div class="add-own">
                <div class="circle">
                  <div class="turn-number">4</div>                
                </div>
                <div class="title"><p>Add Owner</p></div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="pay-gway">Default Payment Gateway</div>
              <div class="pay-input"><input type="text" placeholder="Stripe"/></div>
              <div class="sti-id">Stripe Client ID</div>
              <div class="pay-input"><input type="password" placeholder=""/></div>
              <div class="sti-key">Stripe Secrate Key</div>
              <div class="pay-input"><input type="password" placeholder=""/></div>
            </div>
            <div class="col-md-6">
              <div class="gway-name">Gateway Name</div>
              <div class="pay-input"><input type="text" placeholder="Stripe"/></div>
              <div class="sti-public">Strip Publisable Key</div>
              <div class="pay-input"><input type="text" placeholder=""/></div>
              <div class="def-currency">Default Currency</div>
              <div class="pay-input"><input type="text" placeholder="USD"/></div>
            </div>
          </div>
          <div class="row" style="margin-left:50px;">
            <div class="web-links">Web Links</div>
            <div class="play-links">Playstore Link</div>
            <div class="playli-input"><input type="text" placeholder="https://play.google.com"/></div>
            <div class="play-img"></div>
            <div class="plan-type">Plan Type</div>
            <div class="playli-input"><input type="text" placeholder="https://play.google.com"/></div>
            <div class="web-site">WebSite</div>
            <div class="playli-input"><input type="text" placeholder="https://play.google.com"/></div>
            <div class="email-links">Email</div>
            <div class="playli-input"><input type="text" placeholder="https://play.google.com"/></div>
          </div>
          <div class="row" style="margin-top:50px;">
            <div class="col-md-7"></div>
            <div class="col-md-2">
                <a href="#" class="btn btn-light" id="organ-modal-close-three">
                  <div @click="fresh">Cancel</div>
                </a>
            </div>
            <div class="col-md-3">
                <button class="btn btn-dark">
                    <div @click="nexthree">Save & Continue</div>
                </button>
            </div>  
          </div>         
        </div>
        <div id="owner" style="display:none;">
          <div class="row">
              <div class="bas-info-check">
                <div class="circle-check">
                  <div class="turn-check"><i class="fas fa-check" style="color:white;"></i></div>                
                </div>
                <div class="title-check"><p>Basic Info</p></div>
              </div>
              <div class="bas-info-check">
                <div class="circle-check">
                  <div class="turn-check"><i class="fas fa-check" style="color:white;"></i></div>                
                </div>
                <div class="title-check"><p>Subscription</p></div>
              </div>
              <div class="bas-info-check">
                <div class="circle-check">
                  <div class="turn-check"><i class="fas fa-check" style="color:white;"></i></div>               
                </div>
                <div class="title-check"><p>Settings</p></div>
              </div>
              <div class="add-own">
                <div class="circle">
                  <div class="turn-number">4</div>                
                </div>
                <div class="title"><p>Add Owner</p></div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="pay-gway">Full Name</div>
              <div class="pay-input"><input type="text" placeholder="Stripe"/></div>
              <div class="sti-id">Phone Number</div>
              <div class="pay-input"><input type="password" placeholder="+88 018 28828266"/></div>
              <div class="sti-key">Stripe Secrate Key</div>
              <div class="pay-input"><input type="password" placeholder="*******"/></div>
            </div>
            <div class="col-md-6">
              <div class="gway-name">User Name</div>
              <div class="pay-input"><input type="text" placeholder="Default Stripe"/></div>
              <div class="sti-public">Email</div>
              <div class="pay-input"><input type="text" placeholder="mymail@yahoo.com"/></div>
              <div class="def-currency">Comfirm Password</div>
              <div class="pay-input"><input type="text" placeholder="*********"/></div>
            </div>
          </div>
          <div class="row" style="margin-top:50px;">
            <div class="col-md-7"></div>
            <div class="col-md-2">
                <a href="#" class="btn btn-light" id="organ-modal-close-four">
                  <div @click="fresh">Cancel</div>
                </a>
            </div>
            <div class="col-md-3">
                <button class="btn btn-dark">
                    <div @click="fresh">Save & Continue</div>
                </button>
            </div>  
          </div>         
        </div>              
      </perfect-scrollbar>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import AddModalJS from "@/assets/js/layout/extended/organ-modal.js";
import KTOffcanvas from "@/assets/js/components/offcanvas.js";

export default {
  name: "AddModal",
  data() {
    return {
    }
  },
  mounted() {
    AddModalJS.init(this.$refs["organ-modal-show"]);
  },
  methods: {
    nextone : function(){
      document.getElementById("basic-infoer").style.display = "none";
      document.getElementById("subscriptioner").style.display = "block";
      document.getElementById("settinger").style.display = "none";
      document.getElementById("owner").style.display = "none";  
    },
    nextwo : function(){
      document.getElementById("basic-infoer").style.display = "none";
      document.getElementById("subscriptioner").style.display = "none";
      document.getElementById("settinger").style.display = "block";
      document.getElementById("owner").style.display = "none";  
    },
    nexthree : function(){
      document.getElementById("basic-infoer").style.display = "none";
      document.getElementById("subscriptioner").style.display = "none";
      document.getElementById("settinger").style.display = "none";
      document.getElementById("owner").style.display = "block";
    },
    fresh : function(){
      document.getElementById("basic-infoer").style.display = "block";
      document.getElementById("subscriptioner").style.display = "none";
      document.getElementById("settinger").style.display = "none";
      document.getElementById("owner").style.display = "none";
    },
    closeOffcanvas() {
      new KTOffcanvas(AddModalJS.getElement()).hide();
    }

  },
  computed: {
    ...mapGetters(["currentUserPersonalInfo"]),

    getFullName() {
      return (
        this.currentUserPersonalInfo.name + " " + this.currentUserPersonalInfo.surname
      );
    }
  }
};
</script>
<style scoped>
.add{
    width: 98px;
    height: 35px;
    margin-top: 35px;
    margin-left:-25px;
    padding: 7px 29px 7px 24px;
    border-radius: 3px;
    background-color: #000000;
}
.add-icon{
    width: 45px;
    height: 21px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
}
.add-org-title {
  width: 172px;
  height: 29px;
  margin: 0 144px 32px 0;
  font-family: Roboto;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.offcanvas.offcanvas-right.offcanvas-on{
  width: 800px;
  height: 1024px;
  padding: 57px 43px 87px;
  border-radius: 5px;
  background-color: #ffffff;
}
.bas-info {
  width: 135px;
  height: 40px;
  margin: 32px 23px 37px 30px;
  padding: 10px 29px 10px 13px;
  border-radius: 23.5px;
  border: solid 1px #2d2d2d;
  background-color: #ffffff;
}
.subs {
  width: 135px;
  height: 40px;
  margin: 32px 23px 37px;
  padding: 10px 12px 10px 13px;
  border-radius: 23.5px;
  border: solid 1px #d3d3d3;
  background-color: #ffffff;
}
.setting {
  width: 135px;
  height: 40px;
  margin: 32px 11px 37px 17px;
  padding: 10px 40px 10px 13px;
  border-radius: 23.5px;
  border: solid 1px #d3d3d3;
  background-color: #ffffff;
}
.add-own {
  width: 135px;
  height: 40px;
  margin: 32px 7px 37px 23px;
  padding: 10px 24px 10px 13px;
  border-radius: 23.5px;
  border: solid 1px #d3d3d3;
  background-color: #ffffff;
}
.circle{
  width: 20px;
  height: 20px;
  margin: 0 9px 0 0;
  padding: 1px 6px 0;
  background-color: #000000;
  border-radius: 10px;
}
.turn-number{
  width: 8px;
  height: 19px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
}
.title{
  width: 70px;
  height: 19px;
  margin: -18px 0 0 25px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.org-logo{
  width: 77px;
  height: 77px;
  margin: 1px 81px 16px 35px;
  padding: 57px 2px 0 55px;
  background-color: rgb(80, 255, 0);
  border-radius: 40px;
}
.pen{
  width: 20px;
  height: 20px;
  padding: 1px 5px 6px 6px;
  border: solid 1px #ffffff;
  background-color: #000000;
  border-radius: 10px;
}
.name{
  width: 37px;
  height: 19px;
  margin: 16px 112px 6px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.name-input{
  width: 299px;
  height: 36px;
  padding: 6px 229px 11px 9px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.alias{
  width: 32px;
  height: 19px;
  margin: 32px 117px 6px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.alias-input{
  width: 299px;
  height: 36px;
  padding: 6px 262px 11px 9px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.city{
  width: 25px;
  height: 19px;
  margin: 32px 124px 6px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.city-input{
  width: 299px;
  height: 36px;
  padding: 6px 250px 11px 9px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.fleet{
  width: 81px;
  height: 19px;
  margin: 32px 68px 5px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.fleet-input{
  width: 299px;
  height: 36px;
  padding: 6px 20px 11px 9px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.domain{
  width: 49px;
  height: 19px;
  margin: 31px 100px 5px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.domain-input{
  width: 299px;
  height: 36px;
  padding: 6px 167px 11px 9px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.address{
  width: 52px;
  height: 19px;
  margin: 27px 97px 6px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.address-input{
  width: 616px;
  height: 87px;
  padding: 6px 579px 62px 9px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.phone{
  width: 100px;
  height: 19px;
  margin: 16px 37px 6px 32px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.phone-input{
  width: 299px;
  height: 36px;
  margin-left: 25px;
  padding: 6px 196px 11px 16px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.country{
  width: 50px;
  height: 19px;
  margin: 32px 81px 6px 32px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.country-input{
  width: 299px;
  height: 36px;
  margin-left: 25px;
  padding: 6px 15px 11px 16px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.postal{
  width: 66px;
  height: 19px;
  margin: 32px 65px 6px 32px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.postal-input{
  width: 299px;
  height: 36px;
  margin-left: 25px;
  padding: 6px 251px 11px 16px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.type{
  width: 30px;
  height: 19px;
  margin: 31px 101px 6px 32px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.type-input{
  width: 299px;
  height: 36px;
  margin-left: 25px;
  padding: 6px 15px 11px 16px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.port{
  width: 27px;
  height: 19px;
  margin: 30px 104px 6px 32px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39; 
}
.port-input{
  width: 299px;
  height: 36px;
  margin-left: 25px;
  padding: 6px 251px 11px 16px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.bas-info-check{
  width: 135px;
  height: 40px;
  margin: 32px 23px 37px;
  padding: 10px 29px 10px 13px;
  border-radius: 23.5px;
  border: solid 1px #00bb3d;
  background-color: #ffffff;
}
.circle-check{
  width: 20px;
  height: 20px;
  margin: 0 9px 0 0;
  padding: 6px 5px 6px 4px;
  background-color: #00bb3d;
  border-radius: 10px;
}
.turn-check{
  margin-top: -5px;
  margin-left: -2px;
}
.title-check{
  width: 70px;
  height: 19px;
  margin: -18px 0 0 25px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #00bb3d;
}
.vehicle-title{
  width: 80px;
  height: 19px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.veh-one{
  width: 55px;
  height: 55px;
  margin: 35px 37px 8px -61px;
  padding: 13px 15px 15px;
  background-color: #fff310;
  border-radius: 30px;
}
.veh-two{
  width: 55px;
  height: 55px;
  margin: 35px 0 8px -10px;
  padding: 17px 11px 19px 11px;
  border: solid 1px #c7c7c7;
  background-color: #ffffff;
  border-radius: 30px;
}
.veh-three{
  width: 55px;
  height: 55px;
  margin: 35px 6px 8px 40px;
  padding: 17px 10px;
  border: solid 1px #c7c7c7;
  background-color: #ffffff;
  border-radius: 30px;
}
.vone-name{
  width: 70px;
  height: 27px;
  margin: 8px 30px 13px -68px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #6d6d75;
}
.vtwo-name{
  width: 38px;
  height: 27px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #6d6d75;
}
.vthree-name{
  width: 54px;
  height: 27px;
  margin-left: 40px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #6d6d75;
}
.su-plan{
  width: 112px;
  height: 19px;
  margin: 13px 37px 6px -22px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.per-rate{
  width: 115px;
  height: 19px;
  margin: 13px 31px 6px 23px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.su-input{
  width: 299px;
  height: 36px;
  margin: 6px 17px 15px -25px;
  padding: 6px 12px 11px 9px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.per-input{
  width: 299px;
  height: 36px;
  margin: 6px 0 15px 18px;
  padding: 6px 267px 11px 16px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.fetu-list{
  width: 111px;
  height: 19px;
  margin: 15px 38px 13px -7px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.currency{
  width: 57px;
  height: 24px;
  margin: 13px 33px 10px 13px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808;
}
.currency-value{
  width: 142px;
  height: 24px;
  margin: 13px 81px 10px 5px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #6d6d75;
}
.language{
  width: 63px;
  height: 24px;
  margin: 10px 27px 11px 13px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808;
}
.language-value{
  width: 142px;
  height: 24px;
  margin: 10px 81px 11px 5px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #6d6d75;
}
.num-veh{
  width: 117px;
  height: 24px;
  margin: 11px 28px 10px 13px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808;
}
.num-veh-value{
  width: 142px;
  height: 24px;
  margin: 11px 81px 10px 5px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #6d6d75;
}
.type-geo{
  width: 118px;
  height: 24px;
  margin: 10px 27px 11px 13px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808; 
}
.type-geo-value{
  width: 142px;
  height: 24px;
  margin: 22px 81px 1px 5px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #6d6d75;
}
.num-fleet{
  width: 109px;
  height: 24px;
  margin: 11px 36px 11px 13px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808;
}
.num-fleet-value{
  width: 142px;
  height: 24px;
  margin: 1px 81px 9px 5px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #6d6d75; 
}
.num-code{
  width: 148px;
  height: 24px;
  margin: 9px 21px 11px 13px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808;
}
.num-code-value{
  width: 142px;
  height: 24px;
  margin: 11px 81px 9px 5px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #6d6d75;
}
.num-uaccount{
  width: 181px;
  height: 24px;
  margin: 9px 49px 11px 13px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808;
}
.num-uaccount-value{
  width: 181px;
  height: 24px;
  margin: 9px 49px 11px 7px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808;
}
.end-rphoto{
  width: 101px;
  height: 24px;
  margin: 9px 44px 11px 13px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808;
}
.end-rphoto-value{
  width: 142px;
  height: 24px;
  margin: 11px 81px 9px 5px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #6d6d75;
}
.access-oapp{
  width: 150px;
  height: 24px;
  margin: 9px 19px 14px 13px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808;
}
.access-oapp-value{
  width: 142px;
  height: 24px;
  margin: 11px 81px 12px 5px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #6d6d75;
}
.point-mana{
  width: 121px;
  height: 24px;
  margin: 12px 24px 14px 13px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808;
}
.point-mana-value{
  width: 142px;
  height: 24px;
  margin: 14px 81px 12px 5px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #6d6d75;
}
.report{
  width: 62px;
  height: 24px;
  margin: 12px 28px 124px 13px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #080808;
}
.report-value{
  width: 142px;
  height: 24px;
  margin: 12px 81px 124px 6px;
  opacity: 0.9;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #6d6d75;
}
.pay-gway{  
  width: 180px;
  height: 19px;
  margin: 37px 151px 6px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.pay-input{
  width: 299px;
  height: 36px;
  margin: 6px 17px 32px 0;
  padding: 6px 18px 11px 9px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.sti-id{
  width: 95px;
  height: 19px;
  margin: 32px 54px 6px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.sti-key{
  width: 117px;
  height: 19px;
  margin: 37px 32px 6px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.gway-name{
  width: 95px;
  height: 19px;
  margin: 37px 40px 6px 7px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.sti-public{
  width: 127px;
  height: 19px;
  margin: 32px 8px 6px 7px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.def-currency{
width: 200px;
  height: 19px;
  margin: 37px 34px 6px 7px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.web-links{
  width: 65px;
  height: 19px;
  margin: 43px 84px 29px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ababb0; 
}
.play-links{
  width: 90px;
  height: 19px;
  margin: 95px 54px 6px -150px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.playli-input{
  width: 566px;
  height: 36px;
  margin: 6px 12px 26px 0;
  padding: 6px 324px 11px 16px;
  border-radius: 4px;
  border: solid 1px #e6e6e6;
  background-color: #ffffff;
}
.play-img{
  width: 28px;
  height: 28px;
  margin: 10px 5px 30px 18px;
}
.plan-type{
  width: 62px;
  height: 19px;
  margin: 26px 87px 6px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.web-site{
  width: 53px;
  height: 19px;
  margin: 31px 91px 6px 14px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39;
}
.email-links{
  width: 36px;
  height: 19px;
  margin: 26px 113px 6px 9px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #2e2e39; 
}
</style>
