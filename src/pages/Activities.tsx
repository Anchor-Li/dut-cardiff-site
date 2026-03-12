
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { activities, categories } from "../data/mockData";

const Activities = () => {
  const [filterYear, setFilterYear] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  
  // Extract unique years from activities
  const years = Array.from(
    new Set(activities.map((a) => a.date.split("-")[0]))
  ).sort((a, b) => Number(b) - Number(a));

  const filteredActivities = activities.filter((a) => {
    const yearMatch = filterYear === "all" || a.date.startsWith(filterYear);
    const categoryMatch = filterCategory === "all" || a.category === filterCategory || a.category === "all";
    return yearMatch && categoryMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Activities</h1>
          <p className="text-xl text-gray-600">
            Records of mutual visits, academic seminars, and cooperative exchanges
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          {/* Year Filter */}
          <div className="flex space-x-2 overflow-x-auto pb-2 max-w-full">
            <button
              onClick={() => setFilterYear("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                filterYear === "all"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              All Years
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setFilterYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  filterYear === year
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="block w-full pl-4 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-full"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Activities List */}
        <div className="space-y-8">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col md:flex-row"
              >
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {activity.date}
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {categories.find(c => c.id === activity.category)?.name || "General"}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors">
                      <Link to={`/activities/${activity.id}`}>{activity.title}</Link>
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {activity.summary}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/activities/${activity.id}`}
                      className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              No activities found for the selected filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activities;
