import React from "react";

export default function DashboardHomePage() {
  return (
    <div>
      <main className="flex-1 bg-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-blue-800">
              Manage Projects
            </h2>
            <p className="text-blue-700">
              Easily add, edit, or delete projects from your inventory. Keep
              your project listings up-to-date and organized for your customers.
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-green-800">
              Manage Blogs
            </h2>
            <p className="text-green-700">
              Easily add, edit, or delete blogs from your inventory. Keep
              your blog listings up-to-date and organized for your customers.
            </p>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-yellow-800">
              Manage Users
            </h2>
            <p className="text-yellow-700">
              Easily add, edit, or delete users from your inventory. Keep
              your user listings up-to-date and organized for your customers.
            </p>
          </div>
          <div className="bg-red-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-red-800">
              Manage Orders
            </h2>
            <p className="text-red-700">
              Easily add, edit, or delete orders from your inventory. Keep
              your order listings up-to-date and organized for your customers.
            </p>
          </div>
          <div className="bg-purple-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-purple-800">
              Manage Categories
            </h2>
            <p className="text-purple-700">
              Easily add, edit, or delete categories from your inventory. Keep
              your category listings up-to-date and organized for your customers.
            </p>
          </div>
          <div className="bg-indigo-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-indigo-800">
              Manage Contacts
            </h2>
            <p className="text-indigo-700">
              Easily add, edit, or delete contacts from your inventory. Keep
              your contact listings up-to-date and organized for your customers.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
