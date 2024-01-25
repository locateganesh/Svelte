<script>
    //import { onMount, onDestroy } from 'svelte';
    import { FeedbackStore } from '../stores';
    import { fade, scale} from  'svelte/transition'
    import FeedbackItem from "./FeedbackItem.svelte";
    // let feedback = [];
    // //console.log(feedback);
    // const unsubscribe = FeedbackStore.subscribe((data) => feedback = data);

    // onMount(() =>{
    //     console.log('Feedback list Component Mounted'); 
    //     // HTTP request can be used here
    // });
    // onDestroy(()=>{
    //     unsubscribe(); // The subscribtion can be unsubscribe on on destroy.
    // });
</script>

{#each $FeedbackStore as fb (fb.id) } <!--FeedbackStore can used directly like this, in this way it will automatically unsubscribe-->
    <div in:scale out:fade={{ duration: 500}}>
        <FeedbackItem item={fb} on:delete-feedback />
    </div>
{/each}