<template>
  <div class="animated fadeIn">
    <b-card-group deck class="mb-4">
      <b-card header="Faire un devis" class="card-accent-warning"> 
        <b-form>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="Prenom"></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-user"></i></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="text" placeholder="Nom"></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group>
            <b-input-group>
              <b-input-group-prepend>
                <b-input-group-text><i class="fa fa-envelope"></i></b-input-group-text>
              </b-input-group-prepend>
              <b-form-input type="email" placeholder="Email" autocomplete="email"></b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group
            label="Votre besoin"
            label-for="basicInlineCheckboxes"
            :label-cols="3"
            :horizontal="true">
            <b-form-checkbox-group id="basicInlineCheckboxes" name="InlineCheckboxes" :plain="true" :checked="[1,3]">
              <b-form-checkbox :plain="true" value="1">Site vitrine</b-form-checkbox>
              <b-form-checkbox :plain="true" value="2">Site e-commerce</b-form-checkbox>
              <b-form-checkbox :plain="true" value="3">Plateform web</b-form-checkbox>
              <b-form-checkbox :plain="true" value="4">Plateform mobile</b-form-checkbox>
              <b-form-checkbox :plain="true" value="5">Autre</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>


           <b-form inline>
            <label class="mr-sm-2" for="inlineInput1">Date de debut: </label>
            <b-form-input type="date" id="dateStart"></b-form-input>
            <label class="mx-sm-2" for="inlineInput2">Date de fin: </label>
            <b-form-input type="date" id="dateEnd"></b-form-input>
          </b-form>

          <div class="form-group form-actions">
            <b-button type="submit" size="xl" variant="warning">Envoyer</b-button>
          </div>
        </b-form>
      </b-card>
      <b-card class="bg-warning no-border"> 
        <h5 style="text-align: center;">
          N'hesitez pas a me contacter si vous avez la moindre question. 
          <br/>
          Je vous repondrais le plus rapidement possible.
        </h5>
        <br/>
        <GmapMap
          :center="{lat:11.5564, lng:104.9282}"
          :zoom="7"
          map-type-id="terrain"
          style="width: 100%; height: 300px"
        >
          <GmapMarker
            :key="'0'"
            :position="{lat:11.5564, lng:104.9282}"
            :clickable="true"
            @click="center={lat:11.5564, lng:104.9282}"
          />
        </GmapMap> 
        <br/>  
        <p style="text-align: justify;">
          Je peux comprendre que la distance puisse vous inquieter. Il n'est pas rare de tomber sur des personnes malhonettes ; D'autant plus lorsque la demande concerne un besoin virtuel. C'est pourquoi je vous invite a prendre contact avec moi pour en discuter. Je serais le plus transparent possible et vous verrez tous les avantages que vous aurez a travailler avec moi. 
        </p>
      </b-card>
    </b-card-group>  
  </div>
</template>

<script>


export default {
  name: 'contact',
  components: {

  },
  data: function () {
    return {}
  },
  methods: {}
}
</script>

<style >
  .card.no-border {
    border: none;
  }
  textarea {
    font-size: 0.875rem;
    line-height: 1.5;
    color: #5c6873;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #e4e7ea;
    border-radius: 0.25rem;
    width: 100%;
    padding: 0.375rem 0.75rem;  
    height: 200px;
  }
</style>
