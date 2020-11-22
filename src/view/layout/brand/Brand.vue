<template>
  <!-- begin:: Aside -->
  <div class="brand flex-column-auto" id="kt_brand" ref="kt_brand">
    <div style = "display : flex; flex-direction : row; justify-content:space-between; width:100px">
      <div class="brand-tools" v-if="allowMinimize">
        <button
          class="brand-toggle btn btn-sm px-0"
          id="kt_aside_toggle"
          ref="kt_aside_toggle"
          @click = "clickToggleBtn"
        >
          <!-- <span class="svg-icon svg-icon svg-icon-xl"> -->
            <!-- <inline-svg
              class="svg-icon"
              src="media/svg/icons/Navigation/Angle-double-left.svg"
            /> -->
            <svg width="17" height="15" id = "whiteCollapseBtn">
              <rect x = "0" y = "0" width="17" height="3.5" style="fill:rgb(255,255,255)" />
              <rect x = "0" y = "5" width="17" height="3.5" style="fill:rgb(255,255,255)" />
              <rect x = "0" y = "10" width="17" height="3.5" style="fill:rgb(255,255,255)" />
            </svg>
            <svg width="17" height="15" id = "blackCollapseBtn" style = "display: none">
              <rect x = "0" y = "0" width="17" height="3.5" style="fill:#4a5258" />
              <rect x = "0" y = "5" width="17" height="3.5" style="fill:#4a5258" />
              <rect x = "0" y = "10" width="17" height="3.5" style="fill:#4a5258" />
            </svg>
          <!-- </span> -->
        </button>
      </div>

      <div class="brand-logo" >
        <router-link to="/">
          <img id = "logo-light" src ="/media/logos/logo-dark.png" alt="Logo" style = "display : none"  />
          <img id = "logo-dark" src ="/media/logos/logo-light.png" alt="Logo"/>
        </router-link>
      </div>
    </div>
    <label id = "sidebarToggleBtn">
      <input type="checkbox" @click="toggleCheckbox">
      <div class="slider round">
        <span  id = "sidebarToggleSlider"></span>
      </div>
    </label>
    
  </div>
  <!-- end:: Aside -->
</template>

<style lang="scss" scoped>
.aside-toggle {
  outline: none;
}



#sidebarToggleBtn {
  margin-top: 5px;
  position: relative;
  display: inline-block;
  width: 33px;
  height: 20px;
  border-radius: 10px;
  border: solid 1px #686979;
  background-color: #2f303a;

  input {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 1px;
    left: 13px;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;


    #sidebarToggleSlider {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;

    }
  }
  input:checked + .slider{
    -webkit-transform: translateX(-11px);
    -ms-transform: translateX(-11px);
    transform: translateX(-11px);
  }
}
</style>

<script>
import { mapGetters } from "vuex";
import objectPath from "object-path";
import KTLayoutBrand from "@/assets/js/layout/base/brand.js";
import KTLayoutAsideToggle from "@/assets/js/layout/base/aside-toggle.js";

export default {
  name: "KTBrand",
  data : () => ({
    image_src : "/media/logos/logo-light.png"
  }),
  mounted() {
    // Init Brand Panel For Logo
    KTLayoutBrand.init(this.$refs["kt_brand"]);

    // Init Aside Menu Toggle
    KTLayoutAsideToggle.init(this.$refs["kt_aside_toggle"]);
  },
  methods: {
    
    toggleCheckbox : function() {
      if (document.getElementById("sidebarToggleBtn").style.backgroundColor != "rgb(255, 255, 255)"){
        document.getElementById("sidebarToggleBtn").style.backgroundColor = "#ffffff";
        document.getElementById("sidebarToggleSlider").style.backgroundColor = "#313131";

        document.getElementById("kt_aside").style.backgroundColor = "#f3f5f5";
        document.getElementById("kt_aside_menu_wrapper").style.backgroundColor = "#f3f5f5";
        document.getElementById("kt_aside_menu").style.backgroundColor = "#f3f5f5";
        document.getElementById("sidebar-menu-nav").style.backgroundColor = "#f3f5f5";
        document.getElementById("kt_brand").style.backgroundColor = "#f3f5f5";
        
        document.getElementById("whiteCollapseBtn").style.display = "none";
        document.getElementById("blackCollapseBtn").style.display = "";

        document.getElementById("logo-light").style.display = "";
        document.getElementById("logo-dark").style.display = "none";


        // document.getElementsByClassName("aside-menu")[0].getElementsByClassName("menu-nav")[0].getElementsByClassName("menu-item-open")[0].style.backgroundColor = "#3d70b8";
        // document.getElementsByClassName("aside-menu")[0].getElementsByClassName("menu-nav")[0].getElementsByClassName("menu-item-open")[0].getElementsByClassName("menu-link")[0].style.backgroundColor = "#3d70b8";
        // let eles = document.getElementsByClassName("aside-menu")[0].getElementsByClassName("menu-nav")[0].getElementsByClassName("menu-submenu")[0].getElementsByClassName("menu-item");

        // for (var ele of eles)
        //   ele.style.backgroundColor = "#3363a5";
        document.getElementById("sidebar-menu-nav").classList.add("menu-nav-white");
        document.getElementById("sidebar-menu-nav").classList.remove("menu-nav");

        this.image_src = "/media/logos/logo-dark.png";
      }
      else {
        document.getElementById("sidebarToggleSlider").style.backgroundColor = "#fbfbfb";
        document.getElementById("sidebarToggleBtn").style.backgroundColor = "#2f303a";

        document.getElementById("kt_aside").style.backgroundColor = "#1c1d28";
        document.getElementById("kt_aside_menu_wrapper").style.backgroundColor = "#1c1d28";
        document.getElementById("kt_aside_menu").style.backgroundColor = "#1c1d28";
        document.getElementById("sidebar-menu-nav").style.backgroundColor = "#1c1d28";
        document.getElementById("kt_brand").style.backgroundColor = "#1c1d28";

        document.getElementById("whiteCollapseBtn").style.display = "";
        document.getElementById("blackCollapseBtn").style.display = "none";

        document.getElementById("sidebar-menu-nav").classList.add("menu-nav");
        document.getElementById("sidebar-menu-nav").classList.remove("menu-nav-white");

        document.getElementById("logo-dark").style.display = "";
        document.getElementById("logo-light").style.display = "none";
      }
    },

    clickToggleBtn : function() {
      let sliderBar = document.getElementById("sidebarToggleBtn");
      if (sliderBar.style.display == ""){
        document.getElementById("sidebarToggleBtn").style.display = "none";
      }
      else {
        document.getElementById("sidebarToggleBtn").style.display = "";
      }
    },

    siteLogo() {
      const menuAsideLeftSkin = this.layoutConfig("brand.self.theme");
      // set brand logo
      const logoObject = this.layoutConfig("self.logo");

      let logo;
      if (typeof logoObject === "string") {
        logo = logoObject;
      }
      if (typeof logoObject === "object") {
        logo = objectPath.get(logoObject, menuAsideLeftSkin + "");
      }
      if (typeof logo === "undefined") {
        const logos = this.layoutConfig("self.logo");
        logo = logos[Object.keys(logos)[0]];
      }
      return process.env.BASE_URL + logo;
    }
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    allowMinimize() {
      return !!this.layoutConfig("aside.self.minimize.toggle");
    }
  }
};
</script>