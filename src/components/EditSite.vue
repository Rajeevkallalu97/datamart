<template>
  <div id="new-site">
    <h3>Edit Site</h3>
    <div class="row">
      <form @submit.prevent class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="site_id" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="location" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="engineer" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="ph" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="conductivity" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="temperature" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="chlorides" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="iron" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="hardness" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="alkalinity" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="inhibitor" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="fah" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="orp" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="hcc" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="oh" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="cycles" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="phosphate" required />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="condensation" required />
          </div>
          <h3>Water Consumption</h3>
          <div class="input-field col s12">
            <input type="text" v-model="melter" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="removed" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="d1" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="d2" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="d2_WM" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="process" required />
          </div>
          <h3>Chemical Consumption</h3>
          <div class="input-field col s12">
            <input type="text" v-model="c_d1" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="c_d2" required />
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="c_process" required />
          </div>
        </div>
        <div style="text-align: center">
          <button
            v-on:click="updateSite()"
            type="submit"
            class="btn"
            Width="89px"
          >
            Submit
          </button>
          &nbsp;
          <router-link to="/" class="btn grey">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import * as fb from './firebaseInit'
export default {
  name: 'edit-site',
  data() {
    return {
      site_id: null,
      name: null,
      location: null,
      engineer: null,
      createdOn: new Date(),
      ph: null,
      conductivity: null,
      temperature: null,
      chlorides: null,
      iron: null,
      hardness: null,
      alkalinity: null,
      inhibitor: null,
      fah: null,
      orp: null,
      hcc: null,
      oh: null,
      phosphate: null,
      cycles: null,
      condensation: null,
      //water
      melter: null,
      removed: null,
      d1: null,
      d2: null,
      d2_WM: null,
      process: null,
      //chemical
      c_d1: null,
      c_d2: null,
      c_process: null
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
            vm.ph = doc.data().ph
            vm.conductivity = doc.data().conductivity
            vm.temperature = doc.data().temperature
            vm.chlorides = doc.data().chlorides
            vm.iron = doc.data().iron
            vm.hardness = doc.data().hardness
            vm.alkalinity = doc.data().alkalinity
            vm.inhibitor = doc.data().inhibitor
            vm.fah = doc.data().fah
            vm.orp = doc.data().orp
            vm.hcc = doc.data().hcc
            vm.oh = doc.data().oh
            vm.phosphate = doc.data().phosphate
            vm.cycles = doc.data().cycles
            vm.condensation = doc.data().condensation
            //water
            vm.melter = doc.data().melter
            vm.removed = doc.data().removed
            vm.d1 = doc.data().d1
            vm.d2 = doc.data().d2
            vm.d2_WM = doc.data().d2_WM
            vm.process = doc.data().process
            //chemical
            vm.c_d1 = doc.data().c_d1
            vm.c_d2 = doc.data().c_d2
            vm.c_process = doc.data().c_process
          })
        })
      })
  },
  watch: {
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      fb.db
        .collection('sites')
        .where('site_id', '==', this.$route.params.site_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.site_id = doc.data().site_id
            this.name = doc.data().name
            this.location = doc.data().location
            this.engineer = doc.data().engineer
            this.ph = doc.data().ph
            this.conductivity = doc.data().conductivity
            this.temperature = doc.data().temperature
            this.chlorides = doc.data().chlorides
            this.iron = doc.data().iron
            this.hardness = doc.data().hardness
            this.alkalinity = doc.data().alkalinity
            this.inhibitor = doc.data().inhibitor
            this.fah = doc.data().fah
            this.orp = doc.data().orp
            this.hcc = doc.data().hcc
            this.oh = doc.data().oh
            this.phosphate = doc.data().phosphate
            this.cycles = doc.data().cycles
            this.condensation = doc.data().condensation
            //water
            this.melter = doc.data().melter
            this.removed = doc.data().removed
            this.d1 = doc.data().d1
            this.d2 = doc.data().d2
            this.d2_WM = doc.data().d2_WM
            this.process = doc.data().process
            //chemical
            this.c_d1 = doc.data().c_d1
            this.c_d2 = doc.data().c_d2
            this.c_process = doc.data().c_process
          })
        })
    },
    updateSite() {
      fb.db
        .collection('sites')
        .where('site_id', '==', this.$route.params.site_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                site_id: this.site_id,
                name: this.name,
                location: this.location,
                engineer: this.engineer,
                createdOn: new Date(),
                ph: this.ph,
                conductivity: this.conductivity,
                temperature: this.temperature,
                chlorides: this.chlorides,
                iron: this.iron,
                hardness: this.hardness,
                alkalinity: this.alkalinity,
                inhibitor: this.inhibitor,
                fah: this.fah,
                orp: this.orp,
                hcc: this.hcc,
                oh: this.oh,
                phosphate: this.phosphate,
                cycles: this.cycles,
                condensation: this.condensation,
                //water
                melter: this.melter,
                removed: this.removed,
                d1: this.d1,
                d2: this.d2,
                d2_WM: this.d2_WM,
                process: this.process,
                //chemical
                c_d1: this.c_d1,
                c_d2: this.c_d2,
                c_process: this.c_process
              })
              .then(() => {
                this.$router.push({
                  name: 'view-site',
                  params: { site_id: this.site_id }
                })
              })
          })
        })
    }
  }
}
</script>