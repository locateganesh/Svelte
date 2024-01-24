<script>
    import {createEventDispatcher} from 'svelte';
    import Card from "../ui/Card.svelte";
    export let item;

    const dispatch = createEventDispatcher();

    const handleDelete = (id) => {
        dispatch('delete-feedback', id);
    }
</script>

<Card className="rating">
    <div class="rating__number">{item.rating}</div>
    <button class="rating__delete" aria-label="Delete" on:click={() => handleDelete(item.id)}><img src="./assets/delete.png" alt="Delete" /></button>
    <p class="rating__text">{item.text}</p>
</Card>

<style>
    .rating__number{
        background-color: #ff6a95;
        color:#fff;
        position: absolute;
        top:-20px;
        left:-20px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        border: 2px solid #fff;
    }
    .rating__delete {
        position: absolute;
        right:5px;
        top:5px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        
    }
    .rating__delete:hover {
        background-color: #eee;
    }
    .rating__delete img {
        width: 15px;
    }
    .rating__text {
        padding: 10px;
        font-weight: 600;
    }
</style>