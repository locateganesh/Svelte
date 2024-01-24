<script>
    import FeedbackForm from "./components/FeedbackForm.svelte";
    import FeedbackList from "./components/FeedbackList.svelte";
    import FeedbackStats from "./components/FeedbackStats.svelte";
	let feedback = [
        {
            id: 1,
            rating: 3,
            text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
        },
        {
            id: 2,
            rating: 5,
            text: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
        },
        {
            id: 3,
            rating: 2,
            text: "Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio."
        }
    ];

    const deleteFeedback = (e) => {
        const itemId = e.detail;
        feedback = feedback.filter(item => item.id !== itemId);
    }

    const handleNewFeeback = (e) => {
        const newFeedback = e.detail;
        feedback = [newFeedback, ...feedback];
    }

    $: count = feedback.length;
    $: average = feedback.reduce((a, {rating}) => a + rating, 0) / count;
</script>

<main class="container">
	<!-- <FeedbackList feedback={feedback} /> -->
    <FeedbackForm on:new-feedback={handleNewFeeback} />
    <FeedbackStats {average} {count} />
    <FeedbackList {feedback} on:delete-feedback={deleteFeedback} /> <!-- You can ingore feedback={feedback} if both are same just use name inside curly braces -->
</main>

<style>
	.container {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 30px;
        padding-right: 30px;
        padding-bottom: 50px;
    }
</style>