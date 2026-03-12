
import React, { useState } from "react";
import { FileText, Award, Lightbulb } from "lucide-react";
import { achievements, categories } from "../data/mockData";
import { motion, AnimatePresence } from "framer-motion";

const Achievements = () => {
  const [filterType, setFilterType] = useState<"all" | "paper" | "project" | "patent">("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredAchievements = achievements.filter((item) => {
    const typeMatch = filterType === "all" || item.type === filterType;
    const categoryMatch = filterCategory === "all" || item.category === filterCategory || item.category === "all";
    return typeMatch && categoryMatch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "paper":
        return <FileText className="h-6 w-6 text-blue-500" />;
      case "project":
        return <Award className="h-6 w-6 text-red-500" />;
      case "patent":
        return <Lightbulb className="h-6 w-6 text-yellow-500" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "paper":
        return "Paper";
      case "project":
        return "Project";
      case "patent":
        return "Patent";
      default:
        return type;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Achievements</h1>
          <p className="text-xl text-gray-600">
            Showcasing fruitful results from joint research.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          {/* Type Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: "all", label: "All Types" },
              { id: "paper", label: "Papers" },
              { id: "project", label: "Projects" },
              { id: "patent", label: "Patents" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilterType(item.id as any)}
                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                  filterType === item.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 shadow-sm"
                }`}
              >
                {item.label}
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

        {/* Achievements List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-gray-50 rounded-lg mr-4">
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                        {getTypeLabel(item.type)}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700">
                          {categories.find(c => c.id === item.category)?.name || "General"}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.year || item.details.match(/\d{4}/)?.[0]}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{item.details}</p>
                    {item.authors && (
                      <p className="text-gray-500 text-xs italic">
                        Authors: {item.authors}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredAchievements.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No achievements found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
