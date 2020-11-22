<template>
  <ul class="menu-nav" id="sidebar-menu-nav">
    <router-link
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-chart-line"></i>
          <span class="menu-text">Dashboard</span>
        </a>
      </li>
    </router-link>

    <router-link
      to="/org-list"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-building"></i>
          <span class="menu-text">Organization</span>
        </a>
      </li>
    </router-link>
    <router-link
      to="/fleets"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-map-marked-alt"></i>
          <span class="menu-text">Fleets</span>
        </a>
      </li>
    </router-link>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/permission-management') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fas fa-key"></i>
        <span class="menu-text">Permission Management</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Permission Management</span>
            </span>
          </li>

          <router-link
            to="/vue-bootstrap/alert"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active-childmenu'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-user-check"></i>
                <span class="menu-text">Organization User Role</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/vue-bootstrap/badge"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active-childmenu'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-list-ol"></i>
                <span class="menu-text">Organization User Permissions</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>   
    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/org-user-management') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fas fa-users-cog"></i>
        <span class="menu-text">Org User Management</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Org User Management</span>
            </span>
          </li>

          <router-link
            to="/usermanagement/user"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active-childmenu'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-user-friends"></i>
                <span class="menu-text">Organization User</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="3"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-user-cog"></i>
                <span class="menu-text">Operator</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="4"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-users"></i>
                <span class="menu-text">Franchise</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>
    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/vehicle-management') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fas fa-shuttle-van"></i>
        <span class="menu-text">Vehicle Management</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Vehicle Management</span>
            </span>
          </li>

          <router-link
            to="5"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active-childmenu'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon flaticon2-world"></i>
                <span class="menu-text">IOT Management</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="6"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-motorcycle"></i>
                <span class="menu-text">e-Bikes Management</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="7"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot">
                  <span></span>
                </i>
                <span class="menu-text">Scooters Management</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>
    <router-link
      to="/8"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-map-marker-alt"></i>
          <span class="menu-text">Live Map</span>
        </a>
      </li>
    </router-link>
    
    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/geofence-management') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fas fa-street-view"></i>
        <span class="menu-text">Geofence Management</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Geofence Management</span>
            </span>
          </li>

          <router-link
            to="/9"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active-childmenu'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class = "menu-icon fas fa-lightbulb"></i>
                <span class="menu-text">Service Area</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/10"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class = "menu-icon fas fa-lightbulb"></i>
                <span class="menu-text">Parking Area</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/11"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-ban"></i>
                <span class="menu-text">Restricted Area</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/12"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class = "menu-icon fas fa-tachometer-alt"></i>
                <span class="menu-text">Slow Speed Zone Area</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <router-link
      to="/13"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-bicycle"></i>
          <span class="menu-text">Rider Management</span>
        </a>
      </li>
    </router-link>

    <router-link
      to="/trips"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-route"></i>
          <span class="menu-text">Trips Management</span>
        </a>
      </li>
    </router-link>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/payment-management') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fas fa-shopping-bag"></i>
        <span class="menu-text">Payment Management</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Payment Management</span>
            </span>
          </li>

          <router-link
            to="/15"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active-childmenu'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-sitemap"></i>
                <span class="menu-text">Payment Gateway</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/16"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fab fa-digital-ocean"></i>
                <span class="menu-text">Rider Payment History</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>

    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/pricing-management') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fas fa-comment-dollar"></i>
        <span class="menu-text">Pricing Management</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Pricing Management</span>
            </span>
          </li>

          <router-link
            to="/16"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active-childmenu'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-donate"></i>
                <span class="menu-text">Pricing</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/17"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-receipt"></i>
                <span class="menu-text">Tax</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>    
    <router-link
      to="/19"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-gift"></i>
          <span class="menu-text">Promotion Management</span>
        </a>
      </li>
    </router-link>

    
    <router-link to="/20" v-slot="{ href, navigate, isActive, isExactActive }">
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon far fa-star"></i>
          <span class="menu-text">Pass Management</span>
        </a>
      </li>
    </router-link>
    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{ 'menu-item-open': hasActiveChildren('/report-management') }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon far fa-copy"></i>
        <span class="menu-text">Report Management</span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu">
        <span class="menu-arrow"></span>
        <ul class="menu-subnav">
          <li aria-haspopup="true" class="menu-item menu-item-parent">
            <span class="menu-link">
              <span class="menu-text">Report Management</span>
            </span>
          </li>
          <router-link
            to="/21"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active-childmenu'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon far fa-file-alt"></i>
                <span class="menu-text">Reports</span>
              </a>
            </li>
          </router-link>

          <router-link
            to="/22"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active'
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-icon fas fa-ticket-alt"></i>
                <span class="menu-text">Tickets</span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>    
    <router-link
      to="/24"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-coins"></i>
          <span class="menu-text">Point Management</span>
        </a>
      </li>
    </router-link>    
    <router-link
      to="/25"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon far fa-calendar-check"></i>
          <span class="menu-text">Subscription Management</span>
        </a>
      </li>
    </router-link>

    
    <router-link
      to="/26"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon far fa-bell"></i>
          <span class="menu-text">Event Management</span>
        </a>
      </li>
    </router-link>

    
    <router-link
      to="/27"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon fas fa-money-check-alt"></i>
          <span class="menu-text">Payment Gateway</span>
        </a>
      </li>
    </router-link>   
    <router-link
      to="/28"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active'
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon-cogwheel-2"></i>
          <span class="menu-text">Organization Setting</span>
        </a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  components: {
    // KTSearchDefault
  },
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    }
  }
};
</script>