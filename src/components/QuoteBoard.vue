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
    import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyD8HTSyN2VZzuQJFxaFB9NBCxXeWsGz7fk",
    authDomain: "quote-board-9b038.firebaseapp.com",
    databaseURL: "https://quote-board-9b038.firebaseio.com",
    projectId: "quote-board-9b038",
    storageBucket: "quote-board-9b038.appspot.com",
    messagingSenderId: "129676071799"
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()
let quotesRef = db.ref('quotes')

export default {
  name: 'app',
  firebase: {
    quotes: quotesRef
  },
  
  data () {
    return {
      newQuote: {
          title: '',
          author: '',
          tags: '',
      }
    }
  },
  
   methods: {
      addQuote: function () {
        quotesRef.push(this.newQuote);
        this.newQuote.title = '';
        this.newQuote.author = '';
        this.newQuote.tags = '';
      },
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