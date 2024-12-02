<script>
  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * @type {string} Button contents
   */
  export let label;

  $: mode = primary ? 'btn-primary' : 'btn-secondary';

</script>

<button
  type="button"
  class={['btn', `${mode}`, mode].join(' ')}
  on:click
>
  {label}
</button>
