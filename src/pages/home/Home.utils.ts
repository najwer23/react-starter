export const curry = (fn: Function): Function => {
	return function curried(...args: any[]) {
		return args.length === fn.length
			? fn(...args)
			: (...newArgs: any) => curried(...args, ...newArgs);
	};
};

export const sum = (a: number, b: number) => a + b;

export const csum = curry(sum);
