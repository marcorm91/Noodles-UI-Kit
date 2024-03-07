<!-- Header.svelte -->
<script>
      import { Link } from 'svelte-routing'
</script>
  
<header class="[grid-area:header] flex items-center px-4 py-2 bg-primary-100">
    <Link to="/">
        <div role="logotipo">
            <img src="src/assets/images/logo.png" class="w-32" alt="Noodles UI Kit Logo" />
        </div>
    </Link>
</header>
  