<!-- Nav.svelte -->
<script>
  import { Router, Link, Route } from 'svelte-routing';
</script>

<nav class="[grid-area:nav]">
    <ul>
        <li><Link to="/intro">--Intro</Link></li>
        <li><Link to="/guide">--Guide</Link></li>
    </ul>
</nav>
  