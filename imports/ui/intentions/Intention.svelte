<script>
  import {Intentions} from '../../api/intentions' 
  export let intention
  let updateIntent = intention.title

  function deleteIntent() {
    Intentions.remove(intention._id)
  }

  function handleSubmit(event) {
    Intentions.update(
      {
        _id: intention._id
      },
      {
        title: updateIntent
      }
    )

    updateIntent = ""
  }
</script>

<li>
  <button on:click={deleteIntent}>Delete</button>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Update Intention" bind:value={updateIntent}>
    <button>Submit</button>
  </form>
</li>