<!-- Nav.svelte -->
<script>
  import { Link } from 'svelte-routing'
</script>

<nav class="[grid-area:nav]
            flex
            flex-col
            gap-4
            h-[calc(100vh_-_5.5rem)] 
            overflow-auto 
            p-4 
            shadow 
            bg-primary-200
            [&>figure]:flex [&>figure]:flex-col [&>figure]:gap-2
            [&>figure>figcaption]:font-semibold
            [&>figure>ul]:text-sm [&>figure>ul]:pl-2 [&>figure>ul]:flex [&>figure>ul]:flex-col [&>figure>ul]:gap-2 [&>figure>ul]:border-l-primary-500 [&>figure>ul]:border-l-2">
  <figure>
    <figcaption>Introduction</figcaption>
    <ul>
        <li><Link to="/intro">Welcome to Noodles UI KIT</Link></li>
        <li><Link to="/guide">Guide</Link></li>
    </ul>
  </figure>
</nav>
  