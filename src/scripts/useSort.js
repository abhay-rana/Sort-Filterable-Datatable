import { useMemo, useState } from "react";

export const useSort = (data) => {
	const [sorted_column_info, setSortedColumnField] = useState({ key: "", order: "" });

	//memoize the sorting function so that the component re-renders so the function will not fires again and compute
	const sorted_data = useMemo(() => {
		const sorted_products = [...data];
		if (!!sorted_column_info.key) {
			//sort is a higher order function and we pass a compare function as a argument
			sorted_products.sort((a, b) => {
				if (a[sorted_column_info.key] < b[sorted_column_info.key]) {
					return sorted_column_info.order === "ascending" ? -1 : 1;
				}
				if (a[sorted_column_info.key] > b[sorted_column_info.key]) {
					return sorted_column_info.order === "ascending" ? 1 : -1;
				}
				return 0;
			});
		}

		return sorted_products;
	}, [sorted_column_info, data]);

	const sortOrder = (key) => {
		let order = "ascending";
		if (sorted_column_info && sorted_column_info.key === key && sorted_column_info.order === "ascending") {
			order = "descending";
		}
		setSortedColumnField({ key, order });
	};

	const getOrder = () => {
		console.log(sorted_column_info);
		return { ...sorted_column_info };
	};
	return { data: sorted_data, sortOrder, getOrder };
};
