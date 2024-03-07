<script>
  import { Router, Link, Route } from 'svelte-routing'
  import { routesStore } from './routes.js'
  import Header from './components/Header.svelte'
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
</script>

<div class="grid 
            [grid-template-areas:'header_header''nav_main''footer_footer'] 
            grid-rows-[1fr_auto]
            grid-cols-[16rem_auto]
            h-screen ">
  <Router>
    <Header />
    <Nav />
    <main class="[grid-area:main] p-4 bg-slate-50 overflow-auto">
      {#each $routesStore as route}
        <Route path={route.path} component={route.component} />
      {/each}
    </main>
    <Footer />
  </Router>
</div>