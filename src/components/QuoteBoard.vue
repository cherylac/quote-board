<template>
  <div class="component mx-auto">
    <b-card-group columns>
        <b-card 
          v-for="quote in quotes" :key="quote">
          <h2 class="card-title">{{quote.title}}</h2>
          <p class="card-text">~ {{quote.author}}</p>
          <b-link slot="footer"><span class="sr-only">Delete</span><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeQuote(quote)"></span></b-link>
        </b-card>
    </b-card-group>
  </div>
</template>

<script>
import firebase from '@/components/firebase-init';
import AddQuote from '@/components/AddQuote';
import toastr from 'toastr';

export default {
  name: 'app',
  firebase: {
    quotes: firebase.quotesRef
  },
  
  data () {
    return {
      selected:null
      }
    },
  
  methods: {
    removeQuote: function (quote) {
      firebase.quotesRef.child(quote['.key']).remove()
      toastr.success('Quote removed successfully')
      }
    }
}
</script>

<style scoped>
  .component {    
    width: 90%;
    min-height: auto;
  }

  h2 {
    font-size: 2.0rem;
  }

  p {
    font-size: 1.6rem;
  }
</style>