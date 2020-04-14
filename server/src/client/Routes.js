import React from "react";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsListPage from "./pages/AdminsListPage";

export default [
	{
		...App,
		routes: [
			{
				...HomePage,
				path: "/",
				exact: true
			},
			{
				...UsersListPage,
				path: "/users",
				exact: true
			},
			{
				...AdminsListPage,
				path: "/admins",
				exact: true
			},
			{
				component: NotFoundPage
			}
		]
	}
];
