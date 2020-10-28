<template>
  <div id="view-site">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ name }}</h4>
      </li>
      <li class="collection-item">Site ID#: {{ site_id }}</li>
      <li class="collection-item">Location: {{ location }}</li>
      <li class="collection-item">Engineer: {{ engineer }}</li>
    </ul>
    <div style="text-align: center">
      <router-link to="/" class="btn grey">Back</router-link>
      &nbsp;
      <button @click="deleteSite" class="btn red">Delete</button>
    </div>
    <div class="fixed-action-btn">
      <router-link
        v-bind:to="{
          name: 'edit-site',
          params: { site_id: site_id }
        }"
        class="btn-floating btn-large red"
      >
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import * as fb from './firebaseInit'
export default {
  name: 'view-site',
  data() {
    return {
      site_id: null,
      name: null,
      location: null,
      engineer: null
    }
  },
  beforeRouteEnter(to, from, next) {
    fb.db
      .collection('sites')
      .where('site_id', '==', to.params.site_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.site_id = doc.data().site_id
            vm.name = doc.data().name
            vm.location = doc.data().location
            vm.engineer = doc.data().engineer
          })
        })
      })
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      db.collection('sites')
        .where('site_id', '==', this.$route.params.site_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.site_id = doc.data().site_id
            this.name = doc.data().name
            this.location = doc.data().location
            this.position = doc.data().position
          })
        })
    },
    deleteSite() {
      if (confirm('Are you sure?')) {
        fb.db
          .collection('sites')
          .where('site_id', '==', this.$route.params.site_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete()
              this.$router.push('/')
            })
          })
      }
    }
  }
}
</script>
