import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<div className="categories">
			<div className="col">
				<div className="row">
					<img
						src="https://images.unsplash.com/photo-1594969155368-f19485a9d88c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
						alt="Sale"
					/>
					<button>
						<Link className="link" to="/products/4">
							Sale
						</Link>
					</button>
				</div>
				<div className="row">
					<img
						src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
						alt="Women"
					/>
					<button>
						<Link className="link" to="/products/1">
							Women
						</Link>
					</button>
				</div>
			</div>
			<div className="col">
				<div className="row">
					<img
						src="https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
						alt="New Season"
					/>
					<button>
						<Link className="link" to="/products/3">
							New Season
						</Link>
					</button>
				</div>
			</div>
			<div className="col col-l">
				<div className="row">
					<div className="col">
						<div className="row">
							<img
								src="https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=826&q=80"
								alt="Men"
							/>
							<button>
								<Link className="link" to="/products/2">
									Men
								</Link>
							</button>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<img
								src="https://images.unsplash.com/photo-1518912217224-3b1ae276c89e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
								alt="Accessories"
							/>
							<button>
								<Link className="link" to="/products/5">
									Accessories
								</Link>
							</button>
						</div>
					</div>
				</div>
				<div className="row">
					<img
						src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80"
						alt="Shoes"
					/>
					<button>
						<Link className="link" to="/products/6">
							Shoes
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Categories;
