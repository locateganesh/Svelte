<script>
    import { FeedbackStore } from "../stores";

    $: count = $FeedbackStore.length;
    $: average = $FeedbackStore.reduce((a, {rating}) => a + rating, 0) / count;
    $: averageFix2 = average > 0 ? average.toFixed(2) : 0;
    // $: counter = count > 0 ? count : '';
</script>

<div class="feedback-stats">
    <div>Review: {averageFix2} {#if count >= 1}<span>({count})</span>{/if}</div>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 7px;
        font-size: 14px;
    }
</style>