<template>
  <!-- begin:: Header -->
  <div
    id="kt_header"
    ref="kt_header"
    class="header"
    v-bind:class="headerClasses"
  >
    <div
      class="container-fluid d-flex align-items-center justify-content-between"
    >
      <div
        class="header-menu-wrapper header-menu-wrapper-left"
        ref="kt_header_menu_wrapper"
      >
        <div
          v-if="headerMenuEnabled"
          id="kt_header_menu"
          ref="kt_header_menu"
          class="header-menu header-menu-mobile"
          v-bind:class="headerMenuClasses"
        >
          <KTMenu></KTMenu>
        </div>
      </div>
      <KTTopbar></KTTopbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import KTTopbar from "@/view/layout/header/Topbar.vue";
import KTLayoutHeader from "@/assets/js/layout/base/header.js";
import KTLayoutHeaderMenu from "@/assets/js/layout/base/header-menu.js";
import KTMenu from "@/view/layout/header/Menu.vue";

export default {
  name: "KTHeader",
  components: {
    KTTopbar,
    KTMenu
  },
  mounted() {
    KTLayoutHeader.init("kt_header", "kt_header_mobile");

    KTLayoutHeaderMenu.init(
      this.$refs["kt_header_menu"],
      this.$refs["kt_header_menu_wrapper"]
    );
  },
  computed: {
    ...mapGetters(["layoutConfig", "getClasses"]),

    headerMenuEnabled() {
      return !!this.layoutConfig("header.menu.self.display");
    },

    headerClasses() {
      const classes = this.getClasses("header");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    },

    headerMenuClasses() {
      const classes = this.getClasses("header_menu");
      if (typeof classes !== "undefined") {
        return classes.join(" ");
      }
      return null;
    }
  }
};
</script>
