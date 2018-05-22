<template>
  <div class="component">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Quote Board</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Quote</th>
              <th>Author</th>
              <th>Tags</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="quote in quotes">
              <td>{{quote.title}}</td>
              <td>{{quote.author}}</td>
              <td>{{quote.tags}}</td>
              <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeQuote(quote)"></span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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