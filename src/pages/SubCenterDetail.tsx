
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, User, ExternalLink } from "lucide-react";
import { subCenters } from "../data/mockData";
import { motion } from "framer-motion";

const SubCenterDetail = () => {
  const { id } = useParams();
  const center = subCenters.find((c) => c.id === id);

  if (!center) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sub-center Not Found</h2>
          <Link to="/sub-centers" className="text-primary hover:underline">
            Back to List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/sub-centers"
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to List
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-12">
          <div className="relative h-80">
            <img
              src={center.image}
              alt={center.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">{center.name}</h1>
              <p className="text-xl text-gray-200 max-w-3xl">
                {center.description}
              </p>
            </div>
          </div>
          
          <div className="p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Research Directions & Goals</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
               This sub-center brings together outstanding researchers from Dalian University of Technology and Cardiff University.
               Based on long-term cooperation, both teams continue to deepen scientific research cooperation and have achieved a series of internationally influential research results through mutual visits and joint training of graduate students.
            </p>
          </div>
        </div>

        {/* Members */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Members
          </h2>
          {center.members.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {center.members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-64 overflow-hidden bg-gray-200">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <User className="h-20 w-20" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 flex items-center justify-center gap-2">
                      {member.website ? (
                        <a 
                          href={member.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex items-center gap-1 group"
                        >
                          {member.name}
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                        </a>
                      ) : (
                        member.name
                      )}
                    </h3>
                    <p className="text-primary font-medium mb-2">{member.title}</p>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full mb-4">
                      {member.role}
                    </span>
                    <p className="text-gray-500 text-sm">
                      Research Interests: {member.research}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12 bg-white rounded-xl shadow-sm">
              <p>No member information available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubCenterDetail;
