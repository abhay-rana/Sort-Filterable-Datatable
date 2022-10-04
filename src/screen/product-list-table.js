import React from "react";

import Button from "../components/common/button";
import { useSort } from "../scripts/useSort";

const ProductListTable = ({ product_list }) => {
	//useSort is a custom hook for the sorting of the data tables
	const { data, sortOrder } = useSort(product_list);

	return (
		<>
			<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="py-3 px-6">
								<Button onClick={() => sortOrder("name")}>Product name</Button>
							</th>
							<th scope="col" className="py-3 px-6">
								<Button onClick={() => sortOrder("color")}>Color</Button>
							</th>
							<th scope="col" className="py-3 px-6">
								<Button onClick={() => sortOrder("category")}>Category</Button>
							</th>
							<th scope="col" className="py-3 px-6">
								<Button onClick={() => sortOrder("price")}>Price</Button>
							</th>
							<th scope="col" className="py-3 px-6">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{data.map((el, i) => {
							return (
								<React.Fragment key={el.key}>
									<tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
										<th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
											{el.name}
										</th>
										<td className="py-4 px-6">{el.color}</td>
										<td className="py-4 px-6">{el.category}</td>
										<td className="py-4 px-6">{el.price}</td>
										<td className="py-4 px-6">
											<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
												Edit
											</a>
										</td>
									</tr>
								</React.Fragment>
							);
						})}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default ProductListTable;
