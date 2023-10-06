import React, { useState } from "react";
import "./Courses.css";
import MainTitle from "./Main-title";
import CoursesCard from "./CoursesCard";
import "./CoursesCard.css";

const cardData = [
  {
    imgsrc:
      "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FA90ijraxStiEoemCcNUn&w=384&q=75",
    title: "All-access Subscription",
    text: "Become the best coder you can be with unlimited access to all the existing and future courses",
  },
  {
    imgsrc:
      "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=384&q=75",
    title: "The ultimate Next.js Series",
    text: "Everything you need to build full-stack applications with Next.js 13+ (App Router) and TypeScript",
  },
  {
    imgsrc:
      "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2FbLy3JtIoQ8y8PDs4tFem&w=384&q=75",
    title: "React 18 for Beginners",
    text: "A step-by-step guide to building web apps with React 18+ and TypeScript",
  },
  {
    imgsrc:
      "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FBFMMlbcQvml9HSqXcvNp&w=384&q=75",
    title: "Complete Python Mastery",
    text: "Everything you need to program in Python in one course (includes 3 real-world projects)",
  },
  {
    imgsrc:
      "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FRL4kFbu1SMiCIeLAtWX3&w=384&q=75",
    title: "Complete SQL Mastery",
    text: "Everything you need to design and query databases in one course",
  },
  {
    imgsrc:
      "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2FINZsH6XtRIqQqxvYGP6Q&w=384&q=75",
    title: "The Ultimate HTML5 & CSS3 Series",
    text: "Everything you need to build fast and stunning websites with HTML5 and CSS3 in one bundle",
  },
  {
    imgsrc:
      "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2Ft12BZqmRoulvCTDhoYie&w=384&q=75",
    title: "The Ultimate Java Mastery Series",
    text: "Master Java - the most popular programming language underpinning most apps and websites",
  },
  {
    imgsrc:
      "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fwww.filepicker.io%2Fapi%2Ffile%2F4JkBtVU9QUwcwFCWi3AV&w=384&q=75",
    title: "The Ultimate JavaScript Series",
    text: "Master JavaScript: Go from Novice to Professional. Everything you need to code in JavaScript in one bundle!",
  },
  {
    imgsrc:
      "https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2FlkYCN9UvRNFaLzywghPu&w=384&q=75",
    title: "The Ultimate C++ Series",
    text: "Master Modern C++: Go from Novice to Professional. Everything you need to code in C++ in one bundle!",
  },
];
const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(cardData);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);

    const filtered = cardData.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="container">
        <div className="title text-center">
          <MainTitle
            title="Level up your coding skills"
            text="Whether you want to excel in web development, mobile development or strengthen your fundamental software engineering skills, there is a course for you."
          />
        </div>

        <nav className="navbar ">
          <div className="container">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearch}
                value={searchTerm}
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="courses-list">
          <CoursesCard cardData={filteredData} />{" "}
          {/* Подаване на филтрирания списък като пропс */}
        </div>
      </div>
    </>
  );
};
export default Courses;
