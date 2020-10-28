<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="login card-panel grey lighten-4 black-text center">
            <h3>Register</h3>
            <div class="error-msg ">
              <h6 v-if="errorMsg !== ''">{{ errorMsg }}</h6>
            </div>
            <form @submit.prevent>
              <div class="input-field">
                <i class="material-icons prefix">email</i>
                <input type="email" id="email" v-model="email" />
                <label for="email">Email Address</label>
              </div>
              <div class="input-field">
                <i class="material-icons prefix">lock</i>
                <input type="password" id="password" v-model="password" />
                <label for="password">Password</label>
              </div>
              <button
                v-on:click="register()"
                class="btn btn-large btn-extended grey lighten-4 black-text"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import NProgress from 'nprogress'
export default {
  name: 'register',
  data: function() {
    return {
      email: '',
      password: '',
      errorMsg: ''
    }
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          this.$router.replace({ name: 'Home' })
          this.$store.commit('setUserProfile', true)
          this.$store.commit(
            'setCurrentUser',
            firebase.auth().currentUser.email
          )
        })
        .catch(err => {
          console.log(err)
          this.errorMsg = err.message
        })
    }
  }
}
</script>

<style scoped>
.error-msg {
  margin-top: 1rem;
  text-align: center;
  color: red;
  margin: 0;
}
</style>
