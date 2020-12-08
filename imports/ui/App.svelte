<script>
  import { useTracker } from 'meteor/rdb:svelte-meteor-data'
  import { Intentions } from '../api/intentions'
  import { LoginWindow } from 'meteor/levelup:svelte-accounts-ui'

  import Intention from './intentions/Intention.svelte'

  let newIntent = ""
  
  $: intentions = useTracker(() => Intentions.find({}).fetch())

  function handleSubmit(event) {
    Intentions.insert({
      title: newIntent,
      datetime: Date.now()
    })

    newIntent = ""
  }
</script>

<header>
  <h1>Yo that's fresh</h1>
  <LoginWindow />
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Add intention" bind:value={newIntent}>
    <button>Submit</button>
  </form>
  
  {#each $intentions as intention}
    <Intention {intention} />
  {/each}
</header>