<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<head>
  <title>Xolani Mthembu</title>
</head>

<Header />
<main>
  <slot />
</main>
<Footer />