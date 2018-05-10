<template>
  <div id="app" class="container">
    <div class="page-header">
      <h1>Megan's Quote Board App</h1>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add a Quote</h3>
      </div>
      <div class="panel-body">
         <form id="form" class="form-inline" v-on:submit.prevent="addQuote">
          <div class="form-group">
            <label for="quoteTitle">Quote:</label>
            <input type="text" id="quoteTitle" class="form-control" v-model="newQuote.title">
          </div>
          <div class="form-group">
            <label for="quoteAuthor">Author:</label>
            <input type="text" id="quoteAuthor" class="form-control" v-model="newQuote.author">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Quote">
        </form>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Quote List</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Quote</th>
              <th>Author</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="quote in quotes">
              <td>{{quote.title}}</td>
              <td>{{quote.author}}</td>
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
import toastr from 'toastr'
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
          author: ''
      }
    }
  },
  
   methods: {
      addQuote: function () {
        quotesRef.push(this.newQuote);
        this.newQuote.title = '';
        this.newQuote.author = '';
      },
      removeQuote: function (quote) {
        quotesRef.child(quote['.key']).remove()
        toastr.success('Quote removed successfully')
      }
    },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
