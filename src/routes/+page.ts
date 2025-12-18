import type { PageLoad } from './$types';
import type { User } from '$lib/types';

const BASE_URL ="https://jsonplaceholder.typicode.com"

export const load = ( async ({ fetch }):Promise<{users:User[]}> => {

	const res = await fetch(`${BASE_URL}/users`);
	const users = await res.json();
	return {
		users
	}
	
}) satisfies PageLoad;
