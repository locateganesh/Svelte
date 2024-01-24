<script>
    import { createEventDispatcher } from "svelte";
    export let selected;
    let radioList = [1,2,3,4,5,6,7,8,9,10];

    const dispatch = createEventDispatcher();
    const onchange = (id) => {
      //console.log(id);
      //selected = id;
      dispatch('rating-select', id);
      // console.log(selected);
      // setTimeout(() => {
      //   selected = null;
      // }, 3000);
    }
</script>

<ul class="rating">
    {#each radioList as i (i) }
      <li id={`rating-${i}`}>
          <input type="radio" name="rating" id={`numb${i}`} on:change={() => onchange(i)} checked={selected === i}>
          <label for={`numb${i}`}>{i}</label>
      </li>
    {/each}
</ul>

<style>
    .rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 30px 0;
    padding: 0;
  }

  .rating li {
    list-style: none;
    position: relative;
    margin: 0 2.5px;    
  }

  .rating li label {
    background: #f4f4f4;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    line-height: 1;
    text-align: center;
    border-radius: 50%;
    font-size: 16px;
    border: 1px #eee solid;
    transition: 0.3s;
    box-sizing: border-box;
  }

  .rating li label:hover {
    background: #ff6a95;
    color: #fff;
  }

  /* Make actual radio select invisible */
  [type='radio'] {
    opacity: 0;
    display: none;
  }

  /* Use the sibling select */
  [type='radio']:checked ~ label {
    background: #ff6a95;
    color: #fff;
  }
</style>