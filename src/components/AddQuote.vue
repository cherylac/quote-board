<template>
  <div class="component">
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
          <div class="form-group">
            <label for="quoteTags">Tags:</label>
            <input type="text" id="quoteTags" class="form-control" v-model="newQuote.tags">
          </div>  
          <input type="submit" class="btn btn-primary" value="Add Quote">
        </form>
      </div>
    </div>
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
      newQuote: {
          title: '',
          author: '',
          tags: [],
      }
    }
  },
  
   methods: {
      addQuote: function () {
        quotesRef.push(this.newQuote);
        this.newQuote.title = '';
        this.newQuote.author = '';
        this.newQuote.tags = [];
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
