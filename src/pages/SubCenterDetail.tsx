
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, User, ExternalLink, Calendar } from "lucide-react";
import { subCenters, activities, achievements } from "../data/mockData";
import { motion } from "framer-motion";

const SubCenterDetail = () => {
  const { id } = useParams();
  const center = subCenters.find((c) => c.id === id);

  if (!center) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sub-Group Not Found</h2>
          <Link to="/sub-groups" className="text-primary hover:underline">
            Back to List
          </Link>
        </div>
      </div>
    );
  }

  const centerActivities = activities.filter(a => a.category === id);
  const centerAchievements = achievements.filter(a => a.category === id);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/sub-groups"
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
               This sub-group brings together outstanding researchers from Dalian University of Technology and Cardiff University.
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

        {/* Activities */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Activities
          </h2>
          {centerActivities.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {centerActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {activity.date}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
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
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12 bg-white rounded-xl shadow-sm">
              <p>No activity information available yet.</p>
            </div>
          )}
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Achievements
          </h2>
          {centerAchievements.length > 0 ? (
            <div className="space-y-4">
              {centerAchievements.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium uppercase">
                          {item.type}
                        </span>
                        <span className="text-sm text-gray-500">{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-1">{item.details}</p>
                      {item.authors && (
                        <p className="text-sm text-gray-500 italic">
                          {item.authors}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12 bg-white rounded-xl shadow-sm">
              <p>No achievement information available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubCenterDetail;
