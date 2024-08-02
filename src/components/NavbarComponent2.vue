<template>
  <div class="main-nav">
    <div class="navbar">
      <router-link to="/" class="nav-item" :class="{ 'active': isActive('/') }">
        <div class="nav-logo">
          <img src="@/assets/images/FTI.png" alt="Logo">
        </div>
      </router-link>

      <div class="nav-items">
        <ul class="nav-list-2">
          <li class="dropdown-sidebar" @click="toggleDropdown('services')">
            <router-link to="/services" class="nav-item"
              :class="{ 'active': isActive('/services') }">Services</router-link>
            <font-awesome-icon :icon="['fas', 'plus']" :class="{ 'rotate': isServicesDropdownOpen }"
              class="plus-icon" />
            <ul :class="{ 'active': isServicesDropdownOpen }" class="dropdown-sidebar-menu">
              <li><router-link to="" class="nav-item" :class="{ 'active': isActive('') }">Antitrust</router-link></li>
              <li><router-link to="" class="nav-item" :class="{ 'active': isActive('') }">Artificial
                  Intelligence</router-link></li>
              <li><router-link to="" class="nav-item" :class="{ 'active': isActive('') }">Blockchain & Digital
                  assets</router-link></li>
              <li><router-link to="" class="nav-item" :class="{ 'active': isActive('') }">Data
                  Analytics</router-link></li>
            </ul>
          </li>
          <li class="dropdown-sidebar" @click="toggleDropdown('industries')">
            <router-link to="/industries" class="nav-item"
              :class="{ 'active': isActive('/industries') }">Industries</router-link>
            <font-awesome-icon :icon="['fas', 'plus']" :class="{ 'rotate': isIndustriesDropdownOpen }"
              class="plus-icon" />
            <ul :class="{ 'active': isIndustriesDropdownOpen }" class="dropdown-sidebar-menu">
              <li><router-link to="" class="nav-item" :class="{ 'active': isActive('/') }">Insurance</router-link></li>
              <li><router-link to="" class="nav-item" :class="{ 'active': isActive('') }">Private
                  Equity</router-link></li>
              <li><router-link to="" class="nav-item" :class="{ 'active': isActive('') }">Real
                  Estate</router-link></li>
              <li><router-link to="" class="nav-item" :class="{ 'active': isActive('') }">Healthcare</router-link></li>
            </ul>
          </li>
          <li class="dropdown" @mouseenter="showDropdown('services')" @mouseleave="hideDropdown('services')">
            <router-link to="/services" class="nav-item"
              :class="{ 'active': isActive('/services') }">Services</router-link>
            <ul :class="{ 'active': isServicesDropdownOpen }" class="dropdown-menu">
              <li><router-link to="/services" class="nav-item"
                  :class="{ 'active': isActive('/services') }">Antitrust</router-link></li>
              <li><router-link to="/services" class="nav-item" :class="{ 'active': isActive('/services') }">Artificial
                  Intelligence</router-link></li>
              <li><router-link to="/services" class="nav-item" :class="{ 'active': isActive('/services') }">Blockchain &
                  Digital
                  assets</router-link></li>
              <li><router-link to="/services" class="nav-item" :class="{ 'active': isActive('/services') }">Data
                  Analytics</router-link></li>
            </ul>
          </li>
          <li class="dropdown" @mouseenter="showDropdown('industries')" @mouseleave="hideDropdown('industries')">
            <router-link to="/industries" class="nav-item"
              :class="{ 'active': isActive('/industries') }">Industries</router-link>
            <ul :class="{ 'active': isIndustriesDropdownOpen }" class="dropdown-menu">
              <li><router-link to="/services" class="nav-item"
                  :class="{ 'active': isActive('/services') }">Insurance</router-link></li>
              <li><router-link to="/services" class="nav-item" :class="{ 'active': isActive('/services') }">Private
                  Equity</router-link></li>
              <li><router-link to="/services" class="nav-item" :class="{ 'active': isActive('/services') }">Real
                  Estate</router-link></li>
              <li><router-link to="/services" class="nav-item"
                  :class="{ 'active': isActive('/services') }">Healthcare</router-link></li>
            </ul>
          </li>
          <li><router-link to="/digital" class="nav-item"
              :class="{ 'active': isActive('/digital') }">Digital</router-link>
          </li>
          <li><router-link to="/insight" class="nav-item"
              :class="{ 'active': isActive('/insight') }">Insights</router-link>
          </li>
          <li><router-link to="/services" class="nav-item" :class="{ 'active': isActive('/services') }">Our
              Experts</router-link></li>

          <li><router-link to="/promotion" class="nav-item"
              :class="{ 'active': isActive('/promotion') }">Promotion</router-link>
          </li>
        </ul>
        <div class="search">
          <ul>
            <li><font-awesome-icon :icon="['fas', 'search']" class="search-icon" /></li>
          </ul>
        </div>
        <div :class="['hamburger-icon', { 'active': isMenuActive }]" @click="toggleSidebar">
          <div class="bar bar1"></div>
          <div class="bar bar2"></div>
          <div class="bar bar3"></div>
        </div>
      </div>
    </div>
    <div class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
      <div class="side-logo">
        <img src="@/assets/images/side-logo.png" alt="Logo">
        <font-awesome-icon :icon="['fas', 'times']" class="closing-icon" @click="closeSidebar" />
      </div>
      <ul class="sidebar-list">
        <li class="dropdown-sidebar" @click="toggleDropdown('services')">
          <router-link to="/services" class="nav-item" @click="closeSidebar">Services</router-link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font-awesome-icon :icon="['fas', 'plus']" :class="{ 'rotate': isServicesDropdownOpen }" class="plus-icon" />
          <ul :class="{ 'active': isServicesDropdownOpen }" class="dropdown-sidebar-menu">
            <li><router-link to="/services" class="nav-item" :class="{ 'active': isActive('/services') }"
                @click="closeSidebar">Antitrust</router-link></li>
            <li><router-link to="/services" class="nav-item" :class="{ 'active': isActive('/services') }"
                @click="closeSidebar">Artificial Intelligence</router-link></li>
            <li><router-link to="/services" class="nav-item" :class="{ 'active': isActive('/services') }"
                @click="closeSidebar">Blockchain & Digital assets</router-link></li>
            <li><router-link to="/services" class="nav-item" :class="{ 'active': isActive('/services') }"
                @click="closeSidebar">Data Analytics</router-link></li>
          </ul>
        </li>
        <li class="dropdown-sidebar" @click="toggleDropdown('industries')">
          <router-link to="/industries" class="nav-item" @click="closeSidebar">Industries</router-link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <font-awesome-icon :icon="['fas', 'plus']" :class="{ 'rotate': isIndustriesDropdownOpen }"
            class="plus-icon" />
          <ul :class="{ 'active': isIndustriesDropdownOpen }" class="dropdown-sidebar-menu">
            <li><router-link to="/industries" class="nav-item" :class="{ 'active': isActive('/industries') }"
                @click="closeSidebar">Insurance</router-link></li>
            <li><router-link to="/industries" class="nav-item" :class="{ 'active': isActive('/industries') }"
                @click="closeSidebar">Private Equity</router-link></li>
            <li><router-link to="/industries" class="nav-item" :class="{ 'active': isActive('/industries') }"
                @click="closeSidebar">Real Estate</router-link></li>
            <li><router-link to="/industries" class="nav-item" :class="{ 'active': isActive('/industries') }"
                @click="closeSidebar">Healthcare</router-link></li>
          </ul>
        </li>
        <li><router-link to="/digital" class="nav-item" :class="{ 'active': isActive('/digital') }"
            @click="closeSidebar">Digital</router-link></li>
        <li><router-link to="/insight" class="nav-item" :class="{ 'active': isActive('/insight') }"
            @click="closeSidebar">Insights</router-link></li>
        <li><router-link to="/our-experts" class="nav-item" :class="{ 'active': isActive('/our-experts') }"
            @click="closeSidebar">Our Experts</router-link></li>
        <li><router-link to="/promotion" class="nav-item" :class="{ 'active': isActive('/promotion') }"
            @click="closeSidebar">Promotion</router-link></li>
      </ul>
    </div>

  </div>
</template>
<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      isSidebarOpen: false,
      isMenuActive: false,
      isServicesDropdownOpen: false,
      isIndustriesDropdownOpen: false
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      this.isMenuActive = !this.isMenuActive;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
      this.isMenuActive = false;
    },
    toggleDropdown(menu) {
      if (menu === 'services') {
        this.isServicesDropdownOpen = !this.isServicesDropdownOpen;
        if (this.isServicesDropdownOpen) {
          this.isIndustriesDropdownOpen = false; // Close the other dropdown if open
        }
      } else if (menu === 'industries') {
        this.isIndustriesDropdownOpen = !this.isIndustriesDropdownOpen;
        if (this.isIndustriesDropdownOpen) {
          this.isServicesDropdownOpen = false; // Close the other dropdown if open
        }
      }
    },
    showDropdown(menu) {
      if (menu === 'services') {
        this.isServicesDropdownOpen = true;
      } else if (menu === 'industries') {
        this.isIndustriesDropdownOpen = true;
      }
    },
    hideDropdown(menu) {
      if (menu === 'services') {
        this.isServicesDropdownOpen = false;
      } else if (menu === 'industries') {
        this.isIndustriesDropdownOpen = false;
      }
    },
    isActive(route) {
      return this.$route.path === route;
    }
  }

}
</script>
