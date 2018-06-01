<template>
  <div class="component">
    <v-layout row>
      <v-flex xs12>
        <v-card v-for="quote in quotes">
          <v-card-title primary-title>
            <div>
              <div class="headline">{{quote.title}}</div>
              <span class="grey--text">{{quote.author}}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat>{{quote.tags}}</v-btn>
            <v-btn flat><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeQuote(quote)"></span></v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
        <v-spacer></v-spacer>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import firebase from '@/components/firebase-init';
import AddQuote from '@/components/AddQuote';

export default {
  name: 'app',
  firebase: {
    quotes: firebase.quotesRef
  },
  
  data () {
    return {
      newQuote: {
          title: '',
          author: '',
          tag: '',
          tags: [],
      }
    }
  },
  
   methods: {
      removeQuote: function (quote) {
        quotesRef.child(quote['.key']).remove()
        toastr.success('Quote removed successfully')
      },
    },
  
}
</script>

<style scoped>
  .component {
    background: #e8e8e8;
    min-height: 400px;
  }
</style>