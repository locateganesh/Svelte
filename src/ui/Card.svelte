<script>
    export let className = '';
</script>

<div class={`card ${className}`}>
    <slot></slot>
</div>

<style>
    .card {
        background-color: #fff;
        color:#333;
        padding:20px 30px;
        border-radius: 12px;
        position: relative;
    }
    .rating {
        margin-bottom: 30px;
    }
    .form-card {
        margin-top: 30px;
        margin-bottom: 20px;
    }
</style>