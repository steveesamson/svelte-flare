<script lang="ts">
    const { data } = $props();
</script>

<section>
    <h1 class="font-bold text-2xl my-3 text-center">Users</h1>
    <ul class="list-none p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
        {#each data.users as user (user.id) }
            <li class="border rounded-md border-amber-300 bg-amber-100 p-3 cursor-pointer hover:bg-amber-400 transition-colors">
                <h2 class="font-bold text-lg">{user.username}</h2>
                <p>{user.name}</p>
                <small class="font-medium">{user.email}</small>
            </li>
        {/each}
    </ul>
</section>