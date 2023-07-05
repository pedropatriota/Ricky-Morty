export function transformObjectToArray<T extends Record<string, string>>(
	obj: T,
	arr: string[]
) {
	const content = arr.map(key => {
		return {
			...arr,
			[key]: obj[key]
		};
	});

	return [content.reduce((result, obj) => ({ ...result, ...obj }), {})];
}
