
<script>
    import { FeedbackStore } from "../stores";
    import {v4 as uuidv4} from 'uuid';
    import Card from '../ui/Card.svelte';
    import Button from '../ui/Button.svelte';
    import RatingSelect from './RatingSelect.svelte';
    
    let rating = null;
    let text = '';
    let btnDisabled = true;
    let min = 10;
    let message = null;

    const handleInput = () => {
        if (text.trim().length <= min) {
            message = `Text must be at least ${min} characters`;
            btnDisabled = true;
        } else {
            message = null;
            btnDisabled = false;
        }
    }

    // const handleSelect = e => rating = e.detail;
    const handleSelect = e => {
      rating = e.detail;
      //console.log(rating);
    };

    const handleSubmit = () => {
      // console.log(rating);
      if (!rating) {
        return message = `Please rating anyone from 1-10`;
      }
      if (text.trim().length <= min) {
        return message = `Text must be at least ${min} characters`;
      }
      const newFeedback = {
        id: uuidv4(),
        text,
        rating
      }

      FeedbackStore.update((currentFeedback)=>{
        return [newFeedback, ...currentFeedback];
      });

      text = '';
      rating = null
      //console.log(newFeedback);
    }
</script>

<Card className="form-card">
    <header>
        <h2>How would you rate your service <span class="no-wrap">with us?</span></h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:rating-select={handleSelect} selected={rating} />
        <div class="input-group">
            <input type="text" bind:value={text} on:input={handleInput} placeholder="Tell us something that keeps you coming back">
            <Button type="submit" style="primary submit-btn" disabled={btnDisabled}>Send</Button>
        </div>
        {#if message}
            <div class="message">{message}</div>
        {/if}
    </form>
</Card>

<style>
  header h2 {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    margin: 0 0 30px;
  }
  .input-group {
    position: relative;
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
    margin: 0;
  }
  input:focus {
    outline: none;
  }
  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
  .no-wrap {
    white-space: nowrap;
  }
  @media (max-width:548px) {
    .input-group {
      margin-bottom: 55px;
    }
  }
</style>