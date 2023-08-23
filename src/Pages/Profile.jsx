import React from "react";

const Profile = ({ user }) => {
  return (
    <main>
      <section className=" w-90% mx-auto min-h-screen flex justify-center items-center">
        <div className="relative max-w-sm shadow-md shadow-zinc-950 text-light rounded-md p-5 w-full">
          <img
            src={user.avatar && user.avatar.url}
            alt="avatar.png"
            className="md:h-28 h-20 md:w-28 w-20 rounded-full bg-dark object-cover object-center absolute top-0 -translate-y-1/2 left-1/2 shadow-lg shadow-zinc-950 -translate-x-1/2"
          />
          <div className="flex justify-center items-center min-h-100 w-90% mx-auto px-5 flex-col">
            <h4 className="text-main">Name</h4>
            <hr className="block h-0.5 bg-main-m w-full my-2" />
            <h6 className="py-2">{user.name}</h6>
            <h4 className="text-main">Email</h4>
            <hr className="block h-0.5 bg-main-m w-full my-2" />
            <p className="word py-2">{user.email}</p>
            <h4 className="text-main">Role</h4>
            <hr className="block h-0.5 bg-main-m w-full my-2" />
            <p className="py-2">{user.role}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
