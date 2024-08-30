import React from "react";
import FavoriteList from "../../components/FavoriteList";

function Profile() {
  return (
    <div className="p-4 md:p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-primary mb-4">Profile</h1>
      <FavoriteList />
    </div>
  );
}

export default Profile;
