<template>
  <div class="component mx-auto">
    <b-form id="form" @submit="onSubmit" @reset="onReset" v-show="showForm" v-on:submit.prevent="validateForm">
      <h2 class="mx-auto">Add a Quote to the Quote Board</h2>
      <b-form-group label="Quote:" label-for="quoteTitle">
        <b-form-textarea  input type="text"
                          id="title"
                          name="title"
                          tabindex="0"
                          size="lg" 
                          v-model="newQuote.title" 
                          required 
                          placeholder="Enter quote."
                          :rows="3"
                          :max-rows="10">
        </b-form-textarea>
      </b-form-group>
      <b-form-group label="Author:" label-for="quoteAuthor">
        <b-form-input input type="text"
                      id="author"
                      name="author"
                      tabindex="0"
                      size="lg"
                      v-model="newQuote.author"
                      required placeholder="Enter author.">
        </b-form-input>
      </b-form-group>
      <b-button size="lg" variant="primary" input type="submit" value="submit">Add Quote</b-button>
      <b-button size="lg" variant="danger" input type="reset" value="reset">Reset</b-button>
    </b-form>
    <div class="success-message" v-show="!showForm">
      <h2>You have successfully added a new quote to the quote board!</h2>
      <h3><a href="#/">View the quote board</a></h3>
    </div>
    <p class="error" v-show="showError">Please enter a quote and author.</p>
  </div>
</template>

<script>
import firebase from '@/components/firebase-init';
import QuoteBoard from '@/components/QuoteBoard';  
import toastr from 'toastr';

  export default {
    name: 'app',
    firebase: {
      quotes: firebase.quotesRef
    },
    data () {
      return {
        showForm: true,
        showError: false,
        newQuote: {
          title: '',
          author: '',
        }
      }
    },
   methods: {
      validateForm: function () {
        if ((this.title != '') &&
            (this.author != '')) {
        this.showForm = false;
        } else {
          this.showError = true;
        }
      },
      onSubmit (evt) {
        firebase.quotesRef.push(this.newQuote);
        this.newQuote.title = '';
        this.newQuote.author = '';
        toastr.success('Quote added successfully');
      },
      onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.newQuote.title = '';
        this.newQuote.author = '';
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
      }
    },
}
</script>

<style scoped>
  .component {    
    width: 80%;
    min-height: auto;
  }
  h2 {
    font-size: 2.0rem;
  }

</style>
