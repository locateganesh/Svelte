<script>
    import FeedbackForm from "./components/FeedbackForm.svelte";
    import FeedbackList from "./components/FeedbackList.svelte";
    import FeedbackStats from "./components/FeedbackStats.svelte";
</script>

<main class="container">
	<!-- <FeedbackList feedback={feedback} /> -->
    <FeedbackForm />
    <FeedbackStats />
    <FeedbackList  /> <!-- You can ingore feedback={feedback} if both are same just use name inside curly braces -->
</main>

<style>
	.container {
        width: 100%;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 50px;
    }
</style>