import React from "react";
import { useLocation } from "wouter";

import { ReactComponent as UpSvg } from "../assets/up.svg";
import { ReactComponent as DownSvg } from "../assets/down.svg";

import Button from "./common/button";

import { useSort } from "../scripts/useSort";

const ProductListTable = ({ product_list, setProductListData, editProductListData, deleteProductListData }) => {
	const [location, setLocation] = useLocation();

	//useSort is a custom hook for the sorting of the data tables
	const { sortOrder, getOrder } = useSort(product_list, setProductListData);

	const editProduct = (el) => {
		editProductListData(el);
		setLocation("/add-edit");
	};

	const deleteProduct = (el) => {
		if (!!window.confirm("do you want to delete the modal")) deleteProductListData(el);
	};

	return (
		<>
			<div className="overflow-x-auto relative shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="py-3 px-6 ">
								<Button onClick={() => sortOrder("name")} className="w-[150px] hover:bg-blue-300">
									<div className="flex">
										{getOrder().key === "name" ? getOrder().order === "ascending" ? <UpSvg height={20} /> : <DownSvg height={20} /> : null}
										Product name
									</div>
								</Button>
							</th>
							<th scope="col" className="py-3 px-6">
								<Button onClick={() => sortOrder("color")} className="w-[150px] hover:bg-blue-300">
									<div className="flex	">
										{getOrder().key === "color" ? getOrder().order === "ascending" ? <UpSvg height={20} /> : <DownSvg height={20} /> : null}
										Color
									</div>
								</Button>
							</th>
							<th scope="col" className="py-3 px-6">
								<Button onClick={() => sortOrder("category")} className="w-[150px] hover:bg-blue-300">
									<div className="flex">
										{getOrder().key === "category" ? getOrder().order === "ascending" ? <UpSvg height={20} /> : <DownSvg height={20} /> : null}
										Category
									</div>
								</Button>
							</th>
							<th scope="col" className="py-3 px-6">
								<Button onClick={() => sortOrder("price")} className="w-[150px] hover:bg-blue-300">
									<div className="flex">
										{getOrder().key === "price" ? getOrder().order === "ascending" ? <UpSvg height={20} /> : <DownSvg height={20} /> : null}
										Price
									</div>
								</Button>
							</th>
							<th scope="col" className="py-3 px-6">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						{product_list.map((el, i) => {
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
											<Button onClick={() => editProduct(el)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
												Edit
											</Button>
											<Button onClick={() => deleteProduct(el)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
												Delete
											</Button>
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
