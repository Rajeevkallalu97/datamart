 <template>
  <nav>
    <div class="nav-wrapper light-green">
      <div class="container">
        <router-link to="/" class="brand-logo"
          >Edge Water Management</router-link
        >
        <a href="#" data-activates="mobile-demo" class="button-collapse"
          ><i class="material-icons">menu</i></a
        >
        <ul class="right hide-on-med-and-down">
          <li v-if="userProfile">
            <span class="email black-text">{{ currentUser }}</span>
          </li>
          <li v-if="userProfile">
            <router-link to="/">Dashboard</router-link>
          </li>
          <li v-if="userProfile == false">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!userProfile">
            <router-link to="/register">Register</router-link>
          </li>
          <li v-if="userProfile">
            <button v-on:click="logout()" class="btn black">Logout</button>
          </li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li v-if="userProfile">
            <router-link to="/">Dashboard</router-link>
          </li>
          <li v-if="userProfile">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="!userProfile">
            <router-link to="/register">Register</router-link>
          </li>
          <li><a href="#" class="divider"></a></li>
          <li v-if="userProfile">
            <button v-on:click="logout()" class="btn">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
import { mapState } from 'vuex'
export default {
  name: 'navbar',
  data() {
    return {
      isLoggedIn: ''
    }
  },
  computed: {
    // if (firebase.auth().currentUser) {
    //   this.isLoggedIn = true
    //   console.log('Logged', this.isLoggedIn)
    //   this.currentUser = firebase.auth().currentUser.email
    // },
    ...mapState(['userProfile', 'currentUser'])
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.commit('setUserProfile', false)
          this.isLoggedIn = false
          this.$router.replace({ name: 'login' })
          this.$store.commit('setCurrentUser', '')
        })
    }
  }
}
</script>

<style scoped>
.email {
  padding-right: 10px;
}
</style>