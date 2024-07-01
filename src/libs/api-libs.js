export const getProductResponse = async (resource, query) => {
	const response = await fetch(`${process.env.API_URL}/api/${resource}?${query}`, {
		cache: 'no-store',
	});
	const products = await response.json();
	return products;
};
