import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
	const catId = parseInt(useParams().id);
	const [maxPrice, setMaxPrice] = useState(1000);
	const [sort, setSort] = useState("asc");
	const [subCategory, setSubCategory] = useState([]);

	const { data, loading, error } = useFetch(
		`/sub-categories?[filters][categories][id][$eq]=${catId}`
	);
	let imgUrl;
	if (catId === 1) {
		imgUrl =
			"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
	} else if (catId === 2) {
		imgUrl =
			"https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=826&q=80";
	} else if (catId === 3) {
		imgUrl =
			"https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80";
	} else if (catId === 4) {
		imgUrl =
			"https://images.unsplash.com/photo-1594969155368-f19485a9d88c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
	} else if (catId === 5) {
		imgUrl =
			"https://images.unsplash.com/photo-1518912217224-3b1ae276c89e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80";
	} else if (catId === 6) {
		imgUrl =
			"https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80";
	}
	const handleChange = (e) => {
		const isChecked = e.target.checked;
		const value = e.target.value;
		setSubCategory(
			isChecked
				? [...subCategory, value]
				: subCategory.filter((item) => item !== value)
		);
	};
	console.log(subCategory);
	return (
		<div className="products">
			<div className="left">
				<div className="filterItem">
					<h2>Product Categories</h2>
					{data?.map((item) => (
						<div className="inputItem" key={item.id}>
							<input
								type="checkbox"
								id={item.id}
								value={item.id}
								onChange={handleChange}
							/>
							<label htmlFor={item.id}>{item.attributes.title}</label>
						</div>
					))}
				</div>
				<div className="filterItem">
					<h2>Filter by price</h2>
					<div className="inputItem">
						<span>0</span>
						<input
							type="range"
							min={0}
							max={1000}
							onChange={(e) => setMaxPrice(e.target.value)}
						/>
						<span>{maxPrice}</span>
					</div>
				</div>
				<div className="filterItem">
					<h2>Sort by</h2>
					<div className="inputItem">
						<input
							type="radio"
							id="asc"
							value="asc"
							name="price"
							onChange={(e) => setSort("asc")}
						/>
						<label htmlFor="asc">Price {"{Lowest First}"}</label>
					</div>
					<div className="inputItem">
						<input
							type="radio"
							id="desc"
							value="desc"
							name="price"
							onChange={(e) => setSort("desc")}
						/>
						<label htmlFor="desc">Price {"{Highest First}"}</label>
					</div>
				</div>
			</div>
			<div className="right">
				<img src={imgUrl} alt="category image" className="catImg" />
				<List
					catId={catId}
					maxPrice={maxPrice}
					sort={sort}
					subCategory={subCategory}
				/>
			</div>
		</div>
	);
};

export default Products;
