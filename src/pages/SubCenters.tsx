
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { subCenters } from "../data/mockData";
import { motion } from "framer-motion";

const SubCenters = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-4">Sub-groups</h1>
          <p className="text-xl text-gray-600">
            The Centre has several specialized research directions, gathering top scientific research forces from both universities.
          </p>
        </div>

        <div className="space-y-12">
          {subCenters.map((center, index) => (
            <motion.div
              key={center.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={center.image}
                  alt={center.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {center.name}
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {center.description}
                </p>
                <div>
                  <Link
                    to={`/sub-groups/${center.id}`}
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors font-medium"
                  >
                    View Members & Details <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCenters;
