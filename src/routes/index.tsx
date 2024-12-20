import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Button from "../components/Button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const nextMeeting = {
    title: "Book Club Meeting",
    date: "2024-12-25",
    time: "18:00",
    location: "Library",
    description: "We'll discuss 'The Great Gatsby' by F. Scott Fitzgerald.",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600">
          Welcome to the Book Club!
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Discover, share, and discuss amazing books with fellow readers.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-12">
        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Add New Book
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Share your favorite books with the club and inspire others to read
            them.
          </p>
          <Button
            label="Add a Book"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
            onClick={() => alert("Navigate to Add Book")}
          />
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Create a New Meeting
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Plan the next meeting and bring everyone together to discuss.
          </p>
          <Button
            label="Create a Meeting"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
            onClick={() => alert("Navigate to Create Meeting")}
          />
        </div>
      </section>

      <section className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Next Meeting
        </h2>
        <p className="text-sm text-gray-600 mb-4">{nextMeeting.description}</p>
        <div className="text-gray-500 text-sm">
          <p>
            <strong>Date:</strong> {nextMeeting.date}
          </p>
          <p>
            <strong>Time:</strong> {nextMeeting.time}
          </p>
          <p>
            <strong>Location:</strong> {nextMeeting.location}
          </p>
        </div>
        <Button
          label="View Details"
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 mt-6 rounded-lg"
          onClick={() => alert("Navigate to Meeting Details")}
        />
      </section>
    </div>
  );
}

export default Home;
