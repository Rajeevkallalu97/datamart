<template>
  <div id="new-site">
    <h3>New Site</h3>
    <div class="row">
      <form @submit.prevent="saveEmployee" class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="site_id" required />
            <label>Site ID#</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="name" required />
            <label>Site Name</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="location" required />
            <label>Site Location</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="engineer" required />
            <label>Engineer Name</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="ph" required />
            <label>pH [7.8 - 8.2]</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="conductivity" required />
            <label>Conductivity (μS/cm) [900 -1500]</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="temperature" required />
            <label>Temperature (°C) [Less than 25] </label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="chlorides" required />
            <label>Chlorides (ppm) [Less than 400]</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="iron" required />
            <label>Iron (ppm) [Less than 3]</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="hardness" required />
            <label>T Hardness (ppm) [Less than 400]</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="alkalinity" required />
            <label>M Alkalinity [80 - 120]</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="inhibitor" required />
            <label>Inhibitor (ppm) [150 - 250]</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="fah" required />
            <label>FAH (ppm) [0.2 - 0.5]</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="orp" required />
            <label>ORP (mV) [450 - 550]</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="hcc" required />
            <label>HCC / LP (cfu/ml) [Less than 200,000]</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="oh" required />
            <label>OH Alkalinity (ppm) [450 - 550]</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="cycles" required />
            <label>cycles [450 - 550]</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="phosphate" required />
            <label>Phosphate (ppm) [450 - 550]</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input type="text" v-model="condensation" required />
            <label>Condensation % [20 - 30]</label>
          </div>
          <h3>Water Consumption</h3>
          <div class="input-field col s12">
            <input type="text" v-model="melter" required />
            <label>Melter WM</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="removed" required />
            <label>Removed - D1 WM</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="d1" required />
            <label>D1 WM Bleed</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="d2" required />
            <label>D2 WM</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="d2_WM" required />
            <label>D2 WM Bleed</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="process" required />
            <label>Process WM</label>
          </div>
          <h3>Chemical Consumption</h3>
          <div class="input-field col s12">
            <input type="text" v-model="c_d1" required />
            <label>Melter / D1</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="c_d2" required />
            <label>D2</label>
          </div>
          <div class="input-field col s12">
            <input type="text" v-model="c_process" required />
            <label>Process</label>
          </div>
        </div>
        <div style="text-align: center">
          <button type="submit" class="btn" Width="89px">Submit</button>
          &nbsp;
          <router-link to="/" class="btn grey">Cancel</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'new-site',
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
  methods: {
    saveEmployee() {
      db.collection('sites')
        .add({
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
        .then(docRef => {
          console.log('Client added: ', docRef.id)
          this.$router.push('/')
        })
        .catch(error => {
          console.error('Error adding employee: ', error)
        })
    }
  }
}
</script>
