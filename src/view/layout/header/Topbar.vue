<template>
  <!-- begin:: Header Topbar -->
  <div class="topbar">
    <!--begin: lightning -->
    <b-dropdown
      size="sm"
      id="kt_quick_lightning_toggle"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div class="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
          <b-icon icon="lightning"></b-icon>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        
      </b-dropdown-text>
    </b-dropdown>
    <!--end: Search -->

    <!--begin: Notifications -->
    <b-dropdown
      size="sm"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div
          class="btn btn-icon btn-clean btn-dropdown btn-lg mr-1 pulse pulse-primary"
        >
          <span class="svg-icon svg-icon-xl svg-icon-primary">
            <inline-svg src="media/svg/icons/General/Notification2.svg" />
          </span>
          <span class="pulse-ring"></span>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <form>
          <KTDropdownNotification></KTDropdownNotification>
        </form>
      </b-dropdown-text>
    </b-dropdown>
    <!--end: Notifications -->

    <!--begin: Angle Down -->
    <b-dropdown
      size="sm"
      variant="link"
      toggle-class="topbar-item text-decoration-none"
      no-caret
      right
      no-flip
    >
      <template v-slot:button-content>
        <div class="btn btn-icon btn-clean btn-dropdown btn-sm mr-1">
          <i class="fa fa-angle-down fa-1" aria-hidden="true"></i>
        </div>
      </template>
      <b-dropdown-text tag="div" class="min-w-md-350px">
        <KTDropdownMyCart></KTDropdownMyCart>
      </b-dropdown-text>
    </b-dropdown>
    <KTQuickUser></KTQuickUser>
    <!--end: User Bar -->
  </div>
  <!-- end:: Header Topbar -->
</template>

<style lang="scss">
.topbar {
  .dropdown-toggle {
    padding: 0;
    &:hover {
      text-decoration: none;
    }

    &.dropdown-toggle-no-caret {
      &:after {
        content: none;
      }
    }
  }

  .dropdown-menu {
    margin: 0;
    padding: 0;
    outline: none;
    .b-dropdown-text {
      padding: 0;
    }
  }
}
</style>

<script>
import KTDropdownNotification from "@/view/layout/extras/dropdown/DropdownNotification.vue";
import KTDropdownMyCart from "@/view/layout/extras/dropdown/DropdownMyCart.vue";
import KTQuickUser from "@/view/layout/extras/offcanvas/QuickUser.vue";
import i18nService from "@/core/services/i18n.service.js";

export default {
  name: "KTTopbar",
  data() {
    return {
      languageFlag: "",
      languages: i18nService.languages
    };
  },
  components: {
    KTDropdownNotification,
    KTDropdownMyCart,
    KTQuickUser
  },
  methods: {
    onLanguageChanged() {
      this.languageFlag = this.languages.find(val => {
        return val.lang === i18nService.getActiveLanguage();
      }).flag;
    }
  },
  computed: {
    getLanguageFlag() {
      return this.onLanguageChanged();
    }
  }
};
</script>
