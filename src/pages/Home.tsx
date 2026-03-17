
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Award, Users, Globe } from "lucide-react";
import { subCenters, activities, categories } from "../data/mockData";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white flex items-center justify-center">
        <div className="relative z-20 text-center max-w-[90rem] mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="inline-block">Dalian University of Technology</span>
            <span className="hidden md:inline-block mx-2">-</span>
            <span className="inline-block">Cardiff University</span>
            <div className="mt-2 md:mt-4">Joint Research Center</div>
          </motion.h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
             This Centre was jointly established on Dec. 2025 by researchers from Dalian University of Technology, China and Cardiff University, UK. It aims to integrate the advantageous research groups from both unviersities, promote scientific and technological innovation and development in related fields through joint research, talent cultivation, and academic exchange. The center has expanded its collaboration to multiple disciplines including Engineering, Computer Science, Medicine, Chemistry, Architecture, and Business.
            </p>
          </div>

          {/* Latest Activities */}
          <div className="mb-20">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">Activities</h2>
                <p className="text-gray-600">Latest mutual visits and academic exchanges</p>
              </div>
              <Link
                to="/activities"
                className="text-secondary hover:text-secondary-dark font-medium hidden md:block"
              >
                View All Activities &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {activities.slice(0, 2).map((activity) => {
                const category = categories.find(c => c.id === activity.category);
                return (
                  <div
                    key={activity.id}
                    className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 relative"
                  >
                    <div className="md:w-2/5 h-48 md:h-auto">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {activity.date}
                          </div>
                          {category && category.id !== "all" && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 whitespace-nowrap overflow-hidden text-ellipsis max-w-[50%]">
                              {category.name}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {activity.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {activity.summary}
                        </p>
                      </div>
                      <Link
                        to={`/activities/${activity.id}`}
                        className="mt-4 text-primary hover:text-secondary text-sm font-medium"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 text-center md:hidden">
               <Link
                to="/activities"
                className="text-secondary hover:text-secondary-dark font-medium"
              >
                View All Activities &rarr;
              </Link>
            </div>
          </div>

          {/* Sub-groups Preview */}
          <div>
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-2">Sub-Groups</h2>
                <p className="text-gray-600">Our collaborative research groups</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {subCenters.map((center, index) => (
                <motion.div
                  key={center.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {center.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {center.description}
                    </p>
                    <Link
                      to={`/sub-groups/${center.id}`}
                      className="text-primary hover:text-secondary font-medium inline-flex items-center"
                    >
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-8 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold mb-2">17</div>
              <div className="text-gray-300">Core Researchers</div>
            </div>
            <div className="p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-300">High-level Papers</div>
            </div>
            <div className="p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-gray-300">Joint Projects</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
